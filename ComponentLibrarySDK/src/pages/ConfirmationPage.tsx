import React, { useEffect, useState } from 'react';
import {
  Layout,
  Typography,
  Ticket,
  Card,
  Button,
} from '../lib/components';
import { colors, animations, transitions } from '../lib/theme';
import { Ticket as TicketType } from '../lib/types';
import { Sparkles } from 'lucide-react';

interface ConfirmationPageProps {
  ticket: TicketType;
  onRestart: () => void;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ ticket, onRestart }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
    width: '100%',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: transitions.slow,
  };

  const logoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  };

  const ticketContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  };

  const messageStyle: React.CSSProperties = {
    marginTop: '1.5rem',
    fontSize: '0.875rem',
    color: colors.gray[300],
    lineHeight: 1.6,
  };

  const emailHighlightStyle: React.CSSProperties = {
    color: colors.secondary[400],
    fontWeight: 500,
  };

  const actionsContainerStyle: React.CSSProperties = {
    marginTop: '2rem',
  };

  const nameHighlightStyle: React.CSSProperties = {
    color: colors.secondary[500],
    fontWeight: 700,
  };

  return (
    <Layout>
      <div style={containerStyle}>
        <div style={logoStyle}>
          <Sparkles size={24} color={colors.secondary[500]} />
          <Typography variant="subtitle1" color={colors.secondary[500]}>
            Coding Conf
          </Typography>
        </div>

        <Typography
          variant="h2"
          color={colors.white}
        >
          Congrats, <span style={nameHighlightStyle}>{ticket.user.fullName}!</span>
        </Typography>

        <Typography
          variant="subtitle1"
          color={colors.white}
        >
          Your ticket is ready.
        </Typography>

        <Typography
          variant="body2"
          color={colors.gray[300]}
        >
          We've emailed your ticket to <span style={emailHighlightStyle}>{ticket.user.email}</span> and will send updates in the run up to the event.
        </Typography>

        <div style={ticketContainerStyle}>
          <Ticket ticket={ticket} />
        </div>

        <div style={actionsContainerStyle}>
          <Button
            variant="secondary"
            size="medium"
            onClick={onRestart}
          >
            Register Another Attendee
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ConfirmationPage;