import React, { useState, useEffect } from "react";

export const CustomInput = ({ label, name, value, onChange, placeholder, error }) => {
  const [focus, setFocus] = useState(false);

  const handleChange = (e) => {
    onChange(e);
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocus(false);
    }
  };

  const handleContainerClick = () => {
    if (!focus) {
      setFocus(true);
      document.getElementById(name).focus();
    }
  };

  return (
    <div className={`sm:col-span-4`}>
      <div
        className="relative flex flex-wrap cursor-text rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md"
        onClick={handleContainerClick}
      >
        <span
          className={`absolute top-3 left-1 w-full flex items-center pl-1 ${
            focus || value
              ? "text-[11px] text-gray-500 transform -translate-y-[12px]"
              : "text-md text-gray-500"
          }  duration-500`}
        >
          {label}
        </span>
        <input
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="off"
          className="block flex-1 border-0 bg-transparent p-3 text-gray-900 font-semibold placeholder:text-gray-400 focus:ring-0 sm:text-md sm:leading-6"
          placeholder={placeholder}
        />
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

const AddressForm = ({ handleAddress, email, payerInfo }) => {
  const [form, setForm] = useState({
    payerName: "",
    email: "",
    phone: "",
    zipCode: "",
    state: "",
    city: "",
    street: "",
    streetNumber: "",
    floor: "",
    aclaration: "",
    client_id: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (payerInfo) {
      setForm({
        payerName: payerInfo.payerName || "",
        email: payerInfo.email || email || "",
        phone: payerInfo.phone || "",
        zipCode: payerInfo.zipCode || "",
        state: payerInfo.state || "",
        city: payerInfo.city || "",
        street: payerInfo.street || "",
        streetNumber: payerInfo.streetNumber || "",
        floor: payerInfo.floor || "",
        aclaration: payerInfo.aclaration || "",
        client_id: payerInfo.client_id || "",
      });
    }
  }, [payerInfo, email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    validate({ ...form, [name]: value });
  };

  const validate = (form) => {
    let errors = {};
    if (!form.payerName) {
      errors.payerName = "Completar con su nombre";
    }
    if (!form.email) {
      errors.email = "Debes ingresar un email.";
    } else {
      const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (!emailRegex.test(form.email)) {
        errors.email = "El email ingresado no es válido";
      }
    }
    if (!form.phone) {
      errors.phone = "Debe ingresar su número de celular.";
    }
    if (!form.zipCode) {
      errors.zipCode = "Debe ingresar su código postal.";
    }
    if (!form.state) {
      errors.state = "Debe completar con su provincia.";
    }
    if (!form.city) {
      errors.city = "Debe completar con su ciudad.";
    }
    if (!form.street) {
      errors.street = "Debe ingresar su calle.";
    }
    if (!form.streetNumber) {
      errors.streetNumber = "Debe ingresar su número de calle.";
    }
    if (!form.client_id) {
      errors.client_id = "Debe ingresar su DNI, Cuil o Cuit.";
    }
    setErrors(errors);
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length === 0) {
      handleAddress(form);
      submitForm();
    } else {
      setFormSubmitted(true);
    }
  };

  const submitForm = () => {
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    
    // Add new object with FNAME, EMAIL, PHONE
    const additionalData = {
      FNAME: form.payerName,
      EMAIL: form.email,
      PHONE: form.phone,
    };
    for (const key in additionalData) {
      formData.append(key, additionalData[key]);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbw5i05mkhXcR8YlvCtqTM6ZMmD0Y5hsC6gC3C9hr2LiJ9E40OHxca2jMOoT-0sUvO-4IQ/exec",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    )
      .then((res) => {
        console.log("Form successfully submitted to Google Sheets");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CustomInput
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder=""
        error={formSubmitted && errors.email}
      />
      <CustomInput
        label="Nombre"
        name="payerName"
        value={form.payerName}
        onChange={handleChange}
        placeholder=""
        error={formSubmitted && errors.payerName}
      />

      <CustomInput
        label="Teléfono de contacto"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder=""
        error={formSubmitted && errors.phone}
      />

      <CustomInput
        label="Código Postal"
        name="zipCode"
        value={form.zipCode}
        onChange={handleChange}
        placeholder=""
        error={formSubmitted && errors.zipCode}
      />

      <div className="block lg:flex lg:flex-nowrap w-full space-y-3 lg:space-y-0 gap-2">
        <CustomInput
          label="Provincia"
          name="state"
          value={form.state}
          onChange={handleChange}
          placeholder=""
          error={formSubmitted && errors.state}
        />

        <CustomInput
          label="Ciudad"
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder=""
          error={formSubmitted && errors.city}
        />
      </div>
      <div className="block lg:flex lg:flex-nowrap w-full space-y-3 lg:space-y-0 gap-2">
        <CustomInput
          label="Calle/Avenida"
          name="street"
          value={form.street}
          onChange={handleChange}
          placeholder=""
          error={formSubmitted && errors.street}
        />

        <CustomInput
          label="Número"
          name="streetNumber"
          value={form.streetNumber}
          onChange={handleChange}
          placeholder=""
          error={formSubmitted && errors.streetNumber}
        />
      </div>

      <CustomInput
        label="Piso/Departamento (opcional)"
        name="floor"
        value={form.floor}
        onChange={handleChange}
        placeholder=""
      />

      <CustomInput
        label="Aclaracion sobre este domicilio (opcional)"
        name="aclaration"
        value={form.aclaration}
        onChange={handleChange}
        placeholder=""
      />
      <CustomInput
        label="DNI, Cuil o Cuit"
        name="client_id"
        value={form.client_id}
        onChange={handleChange}
        placeholder=""
        error={formSubmitted && errors.client_id}
      />

      <div className="w-full flex justify-start">
        <button
          type="submit"
          className="p-4 bg-gray-800 text-gray-100 py-2 rounded-md block text-lg hover:opacity-80"
        >
          Guardar Información
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
