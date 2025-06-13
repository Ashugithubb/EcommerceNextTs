// components/LoginPage.tsx
'use client'
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Stack
} from '@mui/material';
import { useRouter } from 'next/navigation';
import {
    signInWithPopup,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from "firebase/auth";
import{auth,db,googleProvider} from "../firebase/firebase"
import {doc,setDoc} from "firebase/firestore"
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try{
        const res = await signInWithPopup(auth, googleProvider);
        console.log("L00ged in");
    }
    catch (error: any) {
            console.log(error);
    }
  }; 
  const handleLogin = async ()=>{
    try{
         const response = await signInWithEmailAndPassword(auth, email, password);
    }
    catch (error: any) {
        console.log(error);
    }
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
                <Stack direction={"row"}>
                    <Typography>New User?</Typography>
                    <Typography
                        onClick={() =>  router.push("/signup")}
                        sx={{ paddingLeft: "10px", cursor: "pointer", color: "blue" }}
                    >
                        Signup
                    </Typography>
                </Stack>

                <Button
                    onClick={handleGoogleLogin}
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Continue with Google
                </Button>

                <Typography sx={{ textAlign: "center" }}>or</Typography>

                <Typography variant="h5" align="center" gutterBottom>
                    Login
                </Typography>

                <Box component="form" noValidate autoComplete="off">
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
                    <Typography
                        sx={{ color: "blue", cursor: "pointer", fontSize: 14, mt: 1, mb: 2 }}
                        // onClick={handleForgotPassword}
                    >
                        Forgot Password?
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </Box>
            </Paper>

            
        </Box>
    );
};

export default LoginPage;
