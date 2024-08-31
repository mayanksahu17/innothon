
import React from 'react';
import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from '@react-email/components';

interface VerificationEmailProps {
  username: string;
  otp: string;
  url:string
}
// Define the VerificationEmail component
const VerificationEmail: React.FC<VerificationEmailProps> = ({ username, otp, url }) => (
  <Html lang="en" dir="ltr">
    <Head>
      <title>Verification Code</title>
      <Font
        fontFamily="Roboto"
        fallbackFontFamily="Verdana"
        webFont={{
          url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
          format: 'woff2',
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>Here&apos;s your verification code: {otp}</Preview>
    <Section>
      <Row>
        <Heading as="h2">Hello {username},</Heading>
      </Row>
      <Row>
        <Text>
          Thank you for registering. Please use the following verification
          code to complete your registration:
        </Text>
      </Row>
      <Row>
        <Text> OTP : {otp}</Text>
      </Row>
      <Row>
        <Text><p>Please click the link below to verify your email:</p>
        <a href={url}>Verify your email</a></Text>
      </Row>
      <Row>
        <Text>
          If you did not request this code, please ignore this email.
        </Text>
      </Row>
      <Row>
        <Text>
          (Please copy the OTP manually if the button does not work in your email client)
        </Text>
      </Row>
    </Section>
  </Html>
);

export default VerificationEmail;