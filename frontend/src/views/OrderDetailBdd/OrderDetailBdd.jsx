import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {  mistico } from "../../assets/index";
import axios from "axios";

const OrderDetailBdd = () => {
  const [isChanging, setIsChanging] = useState(false);
  const { id } = useParams();
  const [order, setOrder] = useState("");
  const [prevOrder, setPrevOrder] = useState("");
  const orders = useSelector((state) => state.orebiReducer.orders);
  const [changes, setChanges] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (orders) {
      const foundOrder = orders.find((order) => order.id === id);
      if (foundOrder) {
        setOrder(foundOrder);
        setPrevOrder(foundOrder);
        setChanges((prevChanges) => ({
          ...prevChanges,
          items: foundOrder.items,
        }));
      }
    }
  }, [orders]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isChanging) {
        const message =
          "Tienes cambios sin guardar. ¿Seguro que quieres salir? Perderás los cambios si sales.";
        e.returnValue = message; // Requerido para algunos navegadores
        return message; // Requerido para otros navegadores
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isChanging]);

  const handleNavigation = (nextLocation) => {
    if (isChanging) {
      const confirmLeave = window.confirm(
        "Tienes cambios sin guardar. ¿Quieres salir sin guardar los cambios?"
      );
      if (confirmLeave) {
        setIsChanging(false);
        history.push(nextLocation);
      }
    } else {
      history.push(nextLocation);
    }
  };

  const handleSaveChanges = () => {
    if (changes.status === "Enviado" && !changes.track_id) {
      alert(
        "Debes ingresar el código de seguimiento asi el cliente puede rastrear su pedido"
      );
    } else {
      setLoading(true);
      axios
        .put(`https://misticofunnel-production.up.railway.app/order/${order.id}`, changes)
        .then((response) => {
          // Maneja la respuesta de la solicitud, por ejemplo, muestra una notificación de éxito
          alert("Cambios guardados con éxito");
          setIsChanging(false);
          setChanges({
            items: order.items,
          });
          setLoading(false);
        })
        .catch((error) => {
          // Maneja errores, muestra una notificación de error, etc.
          console.error("Error al guardar los cambios", error);
          setIsChanging(false);
          setChanges({
            items: order.items,
          });
          setLoading(false);
        });
    }
  };

  const handleChanging = () => {
    setIsChanging(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevRegistro) => ({
      ...prevRegistro,
      [name]: value,
    }));
    setChanges((prevChanges) => ({
      ...prevChanges,
      [name]: value,
    }));
  };

  const handleReturn = () => {
    setOrder(prevOrder);
    setIsChanging(!isChanging);
  };

  const productQuantity = order.items ? order.items?.length : "";
 
  return (
    <>
      <div className="px-32 py-10">
        <div className="w-full flex justify-between">
          <a href="/tabla-de-ordenes" onClick={(e) => { e.preventDefault(); handleNavigation('/tabla-de-ordenes'); }}>
            <img className="w-32" src={mistico} alt="" />
          </a>
          <div>
            {isChanging ? (
              <button
                className="text-2xl mr-3 bg-blue-500 px-3 py-1 rounded-lg text-gray-200"
                onClick={handleReturn}
              >
                X
              </button>
            ) : (
              ""
            )}
            <button
              onClick={!isChanging ? handleChanging : handleSaveChanges}
              className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
            >
              {!isChanging ? "Realizar Cambios" : loading ? "cargando..." : "Guardar"}
            </button>
          </div>
        </div>
        {order ? (
          <div className="flex justify-center gap-32 mx-20 border-[1px] shadow-md border-gray-500 rounded-lg p-4">
            <div className="flex flex-col gap-4 justify-center ">
              <div>
                <h1 className="font-bold text-[#fc148c]">
                  Orden #{order.order_number}
                </h1>
              </div>
              <div className="flex flex-col justify-start text-md">
                <h1 className="font-semibold text-lg">Cliente</h1>
                <p>{order.name ? order.name : ""}</p>
                <p>{productQuantity} producto/s</p>
              </div>
              <div>
                Estado:
                {isChanging ? (
                  <div className="flex flex-col">
                    <select
                      name="status"
                      value={order.status}
                      onChange={handleChange}
                    >
                      <option value="Cancelado">Cancelado</option>
                      <option value="Pago Pendiente">Pago pendiente</option>
                      <option value="Aprobado">Aprobado</option>
                      <option value="Enviado">Enviado</option>
                      <option value="Entregado">Entregado</option>
                    </select>
                    {order.status === "Enviado" ? (
                      <div>
                        <label htmlFor="">Código de Seguimiento</label>
                        <input
                          type="text"
                          name="track_id"
                          id="track_id"
                          onChange={handleChange}
                          value={order.track_id}
                          autoComplete="track_id"
                          className="border-[1px] border-gray-700"
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <p>{order.status}</p>
                )}
                {order.track_id !== "" && !isChanging ? (
                  <p>Código de Seguimiento: {order.track_id}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="flex flex-col justify-start text-md">
                <h1 className="font-semibold text-lg">Informacion de Contacto</h1>
                <p>{order.email}</p>
                <p>{order.phone}</p>
                <p>Id: {order.client_id}</p>
              </div>
              <div className="flex flex-col justify-start text-md">
                <h1 className="font-semibold text-lg">Dirección de Envío</h1>
                <p>{order.name}</p>
                <p>
                  {order.shipment.street_name} {order.shipment.street_number} {order.shipment.floor}
                </p>
                <p>
                  {order.shipment.city_name}, {order.shipment.state_name}
                </p>
                <p>{order.shipment.zipCode}, AR</p>
                <p>{order.shipment.apartment}</p>
              </div>
            </div>
            <div className="w-1/2 space-y-2">
              <div className="w-2/3 h-auto border-[1px] border-gray-500 rounded-lg space-y-4 p-4 flex flex-wrap justify-center items-center">
                {order.items?.map((item) => (
                  <div className="w-full flex justify-between " key={item.id}>
                    <div className="w-20 ">
                      <img className="w-full" src={item.image} alt={item.name} />
                    </div>
                    <div className="w-auto text-gray-800">
                      <p>
                        {item.name}
                        <span>
                          ({item.size}) x{item.quantity}
                        </span>
                      </p>
                      <p className="text-[#fc148c]">${item.price} c/u</p>
                    </div>
                  </div>
                ))}
              </div>
              {isChanging ? (
                <div>
                  <label htmlFor="admin_comment">Comentarios: </label>
                  <textarea
                    name="admin_comment"
                    id="admin_comment"
                    onChange={handleChange}
                    value={order.admin_comment}
                    autoComplete="admin_comment"
                    className="border-[1px] border-gray-400 rounded-lg p-1"
                    rows="4"
                    cols="50"
                  />
                </div>
              ) : (
                <div>
                  <h1>Comentarios:</h1>
                  <p>{order.admin_comment ? order.admin_comment : ""}</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default OrderDetailBdd;
