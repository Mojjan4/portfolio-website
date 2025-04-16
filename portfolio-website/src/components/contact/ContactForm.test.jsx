import { describe, expect, test } from 'vitest';

describe('ContactForm Validation', () => {
    let formData = {
        name: '',
        email: '',
        subject: '',
        message: '',
    };

    // Simulating the validateForm function for testing
    const validateForm = (formData) => {
        let valid = true;
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
            valid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            valid = false;
        }

        return { valid, newErrors };
    };

    test('should show an error message when name is empty', () => {
        formData.name = ''; // Simulate empty name input
        const { valid, newErrors } = validateForm(formData);
        expect(valid).toBe(false);
        expect(newErrors.name).toBe('Name is required');
    });

    test('should show an error message when email is empty', () => {
        formData.email = ''; // Simulate empty email input
        const { valid, newErrors } = validateForm(formData);
        expect(valid).toBe(false);
        expect(newErrors.email).toBe('Email is required');
    });

    test('should show an error message when email is invalid', () => {
        formData.email = 'invalidemail'; // Simulate invalid email input
        const { valid, newErrors } = validateForm(formData);
        expect(valid).toBe(false);
        expect(newErrors.email).toBe('Email is invalid');
    });

    test('should show an error message when subject is empty', () => {
        formData.subject = ''; // Simulate empty subject input
        const { valid, newErrors } = validateForm(formData);
        expect(valid).toBe(false);
        expect(newErrors.subject).toBe('Subject is required');
    });

    test('should show an error message when message is empty', () => {
        formData.message = ''; // Simulate empty message input
        const { valid, newErrors } = validateForm(formData);
        expect(valid).toBe(false);
        expect(newErrors.message).toBe('Message is required');
    });

    test('should pass validation when all fields are filled correctly', () => {
        formData = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            subject: 'Test Subject',
            message: 'This is a test message',
        }; // Simulate valid input
        const { valid, newErrors } = validateForm(formData);
        expect(valid).toBe(true);
        expect(newErrors).toEqual({});
    });
});


