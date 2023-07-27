import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

const Producto = ({producto, btnAgregar = false, btnDisponible = false}) => {
  
    const { handleClickModal, handleSetProducto, handleClickProductoAgotado } = useQuiosco()
    const { nombre, imagen, precio } = producto
  
    return (
        <div className="border p-3 shadow bg-white">
            <img
                alt={`Imagen ${nombre}`}
                className="w-full"
                src={`/img/${imagen}.jpg`}
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{ nombre }</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    { formatearDinero(precio) }
                </p>

                { btnAgregar && (
                    <button
                        type="button"
                        className="bg-indigo-600 hover:bg-indigo-800 transition-colors duration-300 text-white w-full mt-5 p-3 uppercase font-bold"
                        onClick={ () => {
                            handleClickModal()
                            handleSetProducto(producto)
                        } }
                    >
                        Agregar
                    </button>
                    ) }
                { btnDisponible && (
                    <button
                        type="button"
                        className="bg-indigo-600 hover:bg-indigo-800 transition-colors duration-300 text-white w-full mt-5 p-3 uppercase font-bold"
                        onClick={ () => handleClickProductoAgotado(producto.id) }
                    >
                        Producto Agotado
                    </button>
                ) }
            </div>
        </div>
    )
}

export default Producto