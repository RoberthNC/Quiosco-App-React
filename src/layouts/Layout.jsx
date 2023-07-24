import { Outlet } from "react-router-dom"
import Modal from "react-modal"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ModalProducto from "../components/ModalProducto"
import Resumen from "../components/Resumen"
import Sidebar from "../components/Sidebar"

import useQuiosco from "../hooks/useQuiosco"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

Modal.setAppElement("#root")

const Layout = () => {

  const { modal } = useQuiosco()

  return (
    <>
      <div className="md:flex">
          <Sidebar />
          <main className="flex-1 h-screen overflow-y-scroll p-3">
            <Outlet />
          </main>
          <Resumen />
      </div>
      <Modal isOpen={ modal } style={ customStyles }>
        <ModalProducto />
      </Modal>

      <ToastContainer />
    </>
  )
}

export default Layout