import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    Grid,
} from '@mui/material';

const ContactUsForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        // Simple email regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateFields = (validateField) => {
        let newErrors = errors ? { ...errors } : {};
        let reqFields = [ 'name', 'email', 'message' ];

        reqFields.forEach(field => {
            if (validateField && validateField !== field) return;

            if (!form[field]) {
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
                return
            } else {
                delete newErrors[field];
            }

            if (field === 'email' && !validateEmail(form.email)) {
                newErrors.email = 'Please enter a valid email address';
            } else {
                delete newErrors.email;
            }
        });

        setErrors(newErrors);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields();

        if (Object.keys(errors).length === 0) {
            window.location.href = `mailto:ashwinkumar948@gmail.com?subject=Contact%20from%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + (form.phone ? `\n\nPhone: ${form.phone}` : ''))}`
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 4,   mt: 6, mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Ask your queries via email
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container direction='column' spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            onBlur={() => validateFields('name')}
                            fullWidth
                            required
                            error={!!errors.name}
                            helperText={errors.name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            onBlur={() => validateFields('message')}
                            multiline
                            rows={4}
                            fullWidth
                            required
                            error={!!errors.message}
                            helperText={errors.message}
                        />
                    </Grid>
                    <Grid sx={{ alignSelf: 'stretch', display: 'flex', justifyContent: 'center' }} item xs={12}>
                        <Button type="submit" variant="contained" style={{width: '100%'}} color="primary" >
                           -- Send Message --
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};

export default ContactUsForm;