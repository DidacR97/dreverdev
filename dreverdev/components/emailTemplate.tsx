import * as React from 'react';

interface EmailTemplateProps {
  email: string;
  where: string;
  why: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  where,
  why
}) => (
  <div>
    <h1>New Contact</h1>
    <ul>
      <li><strong>email: </strong>{email}</li>
      <li><strong>Discovered you in: </strong>{where}</li>
      <li><strong>Question: </strong>{why}</li>
    </ul>
  </div>
);