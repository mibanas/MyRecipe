import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);


const deleteClick = (plat, navigate) => {

    MySwal.fire({
      text: `Are you sure yo want to delete "${plat.nom}"?`,
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: "Delete",
      denyButtonText: "Cancel",
      confirmButtonColor: "red",
      denyButtonColor: "#5FE26C",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/plats/${plat.id}`, {
            method: "DELETE"
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            navigate('/menu')
            MySwal.fire({
                text: `${plat.nom} was deleted sucessfuly!`,
                icon: 'success',
                showConfirmButton: true,
                timer: 3000
            });
        })
      }
    })
  }

export default deleteClick;