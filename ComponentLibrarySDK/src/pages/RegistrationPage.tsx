import React, { useState } from 'react';
import {
  Layout,
  Typography,
  TextField,
  UploadField,
  Button,
  Card,
} from '../lib/components';
import { colors } from '../lib/theme';
import { createUser, generateTicket, isValidEmail, isValidGithubUsername } from '../lib/utils';
import { User, Ticket } from '../lib/types';
import { Sparkles } from 'lucide-react';

interface FormValues {
  fullName: string;
  email: string;
  githubUsername: string;
  avatar: File | null;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  githubUsername?: string;
  avatar?: string;
}

interface RegistrationPageProps {
  onComplete: (ticket: Ticket) => void;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({ onComplete }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: '',
    email: '',
    githubUsername: '',
    avatar: null,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [avatarPreview, setAvatarPreview] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Record who made changes (for collaboration tracking)
  const [changeHistory, setChangeHistory] = useState<Array<{field: string, timestamp: Date}>>([]);

  const handleChange = (field: keyof FormValues, value: string | File | null) => {
    setFormValues(prev => ({
      ...prev,
      [field]: value,
    }));

    // Record change for collaboration
    setChangeHistory(prev => [
      ...prev,
      { field, timestamp: new Date() }
    ]);

    // Clear error when user edits field
    if (formErrors[field]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleAvatarChange = (file: File | null) => {
    if (file) {
      handleChange('avatar', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      handleChange('avatar', null);
      setAvatarPreview('');
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formValues.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formValues.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formValues.githubUsername.trim()) {
      errors.githubUsername = 'GitHub username is required';
    } else if (!isValidGithubUsername(formValues.githubUsername)) {
      errors.githubUsername = 'Please enter a valid GitHub username';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        const user: User = createUser(
          formValues.fullName, 
          formValues.email, 
          formValues.githubUsername,
          avatarPreview // Use the preview as avatar URL
        );
        
        const ticket = generateTicket(user);
        
        setIsSubmitting(false);
        onComplete(ticket);
      }, 1500);
    }
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  };

  const formStyle: React.CSSProperties = {
    width: '100%',
  };

  return (
    <Layout>
      <div style={logoStyle}>
        <Sparkles size={24} color={colors.secondary[500]} />
        <Typography variant="subtitle1" color={colors.secondary[500]}>
          Coding Conf
        </Typography>
      </div>
      
      <Typography 
        variant="h1" 
        color={colors.white}
        className="mb-1 text-center"
      >
        Your Journey to Coding Conf
      </Typography>
      
      <Typography 
        variant="h2" 
        color={colors.white}
        className="mb-6 text-center"
      >
        2025 Starts Here!
      </Typography>
      
      <Typography 
        variant="body1" 
        color={colors.gray[300]}
        className="mb-6 text-center"
      >
        Secure your spot at next year's biggest coding conference.
      </Typography>
      
      <Card variant="default">
        <form onSubmit={handleSubmit} style={formStyle}>
          <UploadField
            id="avatar"
            label="Upload avatar"
            onChange={handleAvatarChange}
            value={formValues.avatar}
            preview={avatarPreview}
            error={formErrors.avatar}
          />
          
          <TextField
            id="fullName"
            label="Full Name"
            value={formValues.fullName}
            onChange={(value) => handleChange('fullName', value)}
            placeholder="John Doe"
            required
            error={formErrors.fullName}
          />
          
          <TextField
            id="email"
            label="Email address"
            value={formValues.email}
            onChange={(value) => handleChange('email', value)}
            placeholder="you@example.com"
            type="email"
            required
            error={formErrors.email}
          />
          
          <TextField
            id="githubUsername"
            label="GitHub Username"
            value={formValues.githubUsername}
            onChange={(value) => handleChange('githubUsername', value)}
            placeholder="yourusername"
            required
            error={formErrors.githubUsername}
          />
          
          <Button 
            type="submit" 
            variant="primary" 
            size="large" 
            fullWidth 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Generating...' : 'Generate My Ticket'}
          </Button>
        </form>
      </Card>
    </Layout>
  );
};

export default RegistrationPage;