import { getUsers, deleteUser} from "../Service/api";
import { useEffect, useState } from "react";
import { Table, TableHead, TableCell,  TableRow, TableBody,  makeStyles, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 22,
            background: '#000000',
            color: 'purple'
        }
    },
    row: {
        '& > *': {
            fontSize: 18,
            color: "purple",
            background: "#D6E5FA"
        }
    }
})



const Alluser =()=>{

    const [users, setUsers] = useState([]);
    const classes = useStyles();
 
    useEffect(() => {
        getAllUsers();
    }, [])

  const getAllUsers = async() =>{
     const response=await getUsers();
     console.log(response.data);
     setUsers(response.data);
  }

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
}

    return(
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow className={classes.row}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                            <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default Alluser;