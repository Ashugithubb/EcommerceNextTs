"use client"
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
// import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    createUserWithEmailAndPassword,
} from "firebase/auth";
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    // Stack,
    Snackbar,
    Alert,
} from "@mui/material";

 const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const handleSignup = async ()=>{
        const res =   await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", res.user.uid), {
             id:res.user.uid,
             name,
             email,
             password
            });
        router.push("/login");
    }
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#f5f6fa",
            }}
        >
            <Paper elevation={3} sx={{ padding: 4, minWidth: 320 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Create A Account
                </Typography>

                <Box component="form" noValidate autoComplete="off">
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="Text"
                        value={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={handleSignup}
                    >
                        SignUp
                    </Button>
                </Box>
            </Paper>
        </Box>
    );

};
export default SignUp;
