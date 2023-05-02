import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Delete, Edit } from '@mui/icons-material';
import './../style/etudiant.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#1634ad',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Etudiant = () => {
    const [open, setOpen] = React.useState(false);
    const [student, setStudent] = React.useState(
        {
            lastname: 'Kwabou',
            firstname: 'Nelda',
            number: '20P123',
            datenais: '2002-04-10'
        }
    );
    const [data, setData] = React.useState([])
    const [modif, setModif] = React.useState(false)
    const [mat, setMat] = React.useState("")


    const start = {
        lastname: '',
        firstname: '',
        number: '',
        datenais: ''
    }

    const handleOpen = (item) => {
        setOpen(true)
        setStudent(item)
        setModif(false)
    };

    const updateOpen = (item) => {
        setOpen(true)
        setModif(true)
        setStudent(item)
        console.log(item);
        setMat(item.number)
    };

    const handleClose = () => setOpen(false);



    const welcome = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:4000/v1/api/student", requestOptions)
            .then(response => response.text())
            .then(result => {
                setData(JSON.parse(result))
            })
            .catch(error => console.log('error', error));
    }
    const add = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "lastname": student.lastname,
            "firstname": student.firstname,
            "number": student.number,
            "datenais": student.datenais
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:4000/v1/api/student/add", requestOptions)
            .then(response => response.text())
            .then(result => {
                setOpen(false)
                welcome()
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }
    const update = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "lastname": student.lastname,
            "firstname": student.firstname,
            "number": student.number,
            "datenais": student.datenais
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:4000/v1/api/student/update/"+mat, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                welcome()
                setOpen(false)
            })
            .catch(error => console.log('error', error));

    }
    const del = (item) => {
        console.log(item)
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };
        fetch("http://localhost:4000/v1/api/student/" + item.number, requestOptions)
            .then(response => response.text())
            .then(result => {
                welcome()
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }


    React.useEffect(() => welcome(), [])

    return (
        <div className='student'>
            <div>
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style} className="modal">
                        <h3>Etudiant</h3>
                        <hr />
                        <div className="form">
                            <div className="text-field">
                                <div className="g1">
                                    <label htmlFor="lastname">Nom :</label>
                                </div>
                                <div className="g2">
                                    <input type="text" value={student.lastname}
                                        onChange={e => {
                                            let stud = {
                                                lastname: e.target.value,
                                                firstname: student.firstname,
                                                number: student.number,
                                                datenais: student.datenais
                                            }
                                            setStudent(stud)
                                        }}
                                        id='lastname' className='nom g2' />
                                </div>
                            </div>
                            <div className="text-field">
                                <div className="g1">
                                    <label htmlFor="firstname">Prenom :</label>
                                </div>
                                <div className="g2">
                                    <input type="text" value={student.firstname}
                                        onChange={e => {
                                            let stud = {
                                                lastname: student.lastname,
                                                firstname: e.target.value,
                                                number: student.number,
                                                datenais: student.datenais
                                            }
                                            setStudent(stud)
                                        }}
                                        id='firstname' className='nom g2' />
                                </div>
                            </div>
                            <div className="text-field">
                                <div className="g1">
                                    <label htmlFor="number">Matricule :</label>
                                </div>
                                <div className="g2">
                                    <input type="text" value={student.number}
                                        onChange={e => {
                                            let stud = {
                                                lastname: student.lastname,
                                                firstname: student.firstname,
                                                number: e.target.value,
                                                datenais: student.datenais
                                            }
                                            setStudent(stud)
                                        }}
                                        id='number' className='nom g2' />
                                </div>
                            </div>
                            <div className="text-field">
                                <div className="g1">
                                    <label htmlFor="number">Daye  de Nais. :</label>
                                </div>
                                <div className="g2">
                                    <input type="date" value={student.datenais}
                                        onChange={e => {
                                            let stud = {
                                                lastname: student.lastname,
                                                firstname: student.firstname,
                                                number: student.number,
                                                datenais: e.target.value
                                            }
                                            setStudent(stud)
                                        }}
                                        id='number' className='nom g2' />
                                </div>
                            </div>
                            <div className="footer">
                                {modif ? <span onClick={() => { update() }}>
                                    Modifier
                                </span>
                                    :
                                    <span onClick={() => { add() }}>
                                        Ajouter
                                    </span>
                                }

                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
            <nav>
                <NavLink to="/">
                    <h2 className='logo'>
                        <span className='bleu'>J</span>
                        <span className='violet'>P</span>
                        <span className='bleu2'>A</span> student
                    </h2>
                </NavLink>
                <span></span>
                <NavLink to="/about">About</NavLink>
            </nav>
            <main>
                <div className="head">
                    <h3>Liste des étudiants</h3>
                    <span className='add' onClick={() => handleOpen(start)}> + </span>
                </div>
                <div className="body">
                    <table>
                        <tr>
                            <th className='b'>Matricule</th>
                            <th className='c'>Nom</th>
                            <th className='d'>Prenom</th>
                            <th className='e'>Date de Nais.</th>
                            <th>Mod.</th>
                            <th>Del.</th>
                        </tr>
                        {data.map(stud => {
                            return <tr key={stud.id}>
                                <td className='mat'>{stud.number}</td>
                                <td>{stud.lastname}</td>
                                <td>{stud.firstname}</td>
                                <td>{stud.datenais}</td>
                                <td>
                                    <Edit className='del'
                                        onClick={() => updateOpen(stud)}
                                    />
                                </td>
                                <td>
                                    <Delete className='del'
                                        onClick={() => del(stud)}
                                    />
                                </td>
                            </tr>
                        })}
                    </table>
                </div>
            </main>
        </div>
    );
};

export default Etudiant;