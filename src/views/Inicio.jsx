import Producto from "../components/Producto"
import clienteAxios from "../config/axios"

import useQuiosco from "../hooks/useQuiosco"

import useSWR from "swr"

const Inicio = () => {

  const { categoriaActual } = useQuiosco()

  const fetcher = () => clienteAxios("/api/productos").then(data => data.data)
  const { data, error, isLoading } = useSWR("/api/productos", fetcher, {
    refreshInterval:1000
  })

  if(isLoading) return "Cargando..."
  const productos = data.data.filter( p => p.categoria_id === categoriaActual.id )

  return (
    <>
      <h1 className="text-4xl font-black">{ categoriaActual.nombre }</h1>
      <p className="text-2l my-10">Elige y personaliza tu pedido a continuación.</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        { productos.map((producto)=>(
          <Producto
            key={producto.imagen}
            producto={producto}
          />
        )) }
      </div>
    </>
  )
}

export default Inicio