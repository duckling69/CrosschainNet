import React, { useEffect } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Hero Section
function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: '#fff',
      }}
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '20px' }}
      >
        Welcome to CrossChainConnect
      </motion.h1>
      <Typography variant="h6" style={{ marginBottom: '40px', fontSize: '1.5rem' }}>
        Automate token airdrops and monitor wallet activities in real-time.
      </Typography>
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
        <Button
          variant="contained"
          component={Link}
          to="/dashboard"
          style={{
            backgroundColor: '#f5a623',
            padding: '15px 30px',
            fontSize: '1.2rem',
            borderRadius: '30px',
            boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
          }}
        >
          Go to Dashboard
        </Button>
      </motion.div>
    </motion.div>
  );
}

// About Section
function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      style={{ padding: '100px 0', color: '#fff' }}
    >
      <Container>
        <Typography variant="h4" style={{ marginBottom: '20px', fontWeight: '600' }}>
          About CrossChainConnect
        </Typography>
        <Typography style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
          CrossChainConnect is a seamless platform designed to automate token airdrops while providing real-time wallet monitoring for projects on Solana and Ethereum. By leveraging the Streamflow API for efficient airdrop management and the Synternet Data Layer SDK for live transaction insights, CrossChainConnect enhances transparency and efficiency in token distribution and wallet activity tracking.
        </Typography>
      </Container>
    </motion.div>
  );
}

// Features Section
function FeaturesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      style={{
        padding: '100px 0',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="h4" style={{ marginBottom: '40px', fontWeight: 600 }}>
          Our Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: '40px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
              }}
            >
              <Typography variant="h6" style={{ marginBottom: '20px', fontWeight: '500' }}>
                Automated Token Airdrops
              </Typography>
              <Typography>
                Utilize Streamflow's API to facilitate efficient airdrops across Solana and Ethereum networks.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: '40px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
              }}
            >
              <Typography variant="h6" style={{ marginBottom: '20px', fontWeight: '500' }}>
                Real-Time Wallet Monitoring
              </Typography>
              <Typography>
                Monitor wallet activities across Solana and Ethereum with real-time transaction insights using Synternet SDK.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: '40px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
              }}
            >
              <Typography variant="h6" style={{ marginBottom: '20px', fontWeight: '500' }}>
                User Dashboard
              </Typography>
              <Typography>
                A comprehensive interface to manage your airdrops and monitor wallet activity, all in one place.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}

// Integration Plan Section
function IntegrationPlanSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      style={{ padding: '100px 0', color: '#fff' }}
    >
      <Container>
        <Typography variant="h4" style={{ marginBottom: '20px', fontWeight: '600' }}>
          Integration Plan
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '20px', fontSize: '1.2rem' }}>
          Integrating CrossChainConnect is a simple process. Follow these steps to get started:
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: '40px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
              }}
            >
              <Typography variant="h6" style={{ marginBottom: '20px', fontWeight: '500' }}>
                Step 1: Set up your account
              </Typography>
              <Typography>
                Create your CrossChainConnect account and get access to our dashboard and API documentation.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: '40px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
              }}
            >
              <Typography variant="h6" style={{ marginBottom: '20px', fontWeight: '500' }}>
                Step 2: Connect your wallet
              </Typography>
              <Typography>
                Connect your Solana or Ethereum wallet to start monitoring activities and automating airdrops.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: '40px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
              }}
            >
              <Typography variant="h6" style={{ marginBottom: '20px', fontWeight: '500' }}>
                Step 3: Configure your project
              </Typography>
              <Typography>
                Configure your project settings and parameters for the airdrop or wallet monitoring functions.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: '40px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
              }}
            >
              <Typography variant="h6" style={{ marginBottom: '20px', fontWeight: '500' }}>
                Step 4: Launch and track results
              </Typography>
              <Typography>
                Launch your airdrop or monitoring service, and track the real-time results in your dashboard.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}

// Conclusion Section
function ConclusionSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      style={{ padding: '100px 0', color: '#fff', textAlign: 'center' }}
    >
      <Container>
        <Typography variant="h4" style={{ marginBottom: '20px', fontWeight: '600' }}>
          Get Started with CrossChainConnect Today
        </Typography>
        <Typography style={{ marginBottom: '40px', fontSize: '1.2rem' }}>
          Experience the future of token distribution and wallet monitoring. Sign up now and take control of your project with ease and transparency.
        </Typography>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Button
            variant="contained"
            component={Link}
            to="/signup"
            style={{
              backgroundColor: '#f5a623',
              padding: '15px 30px',
              fontSize: '1.2rem',
              borderRadius: '30px',
              boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
            }}
          >
            Sign Up Now
          </Button>
        </motion.div>
      </Container>
    </motion.div>
  );
}

function HomePage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        <dotlottie-player
          src="https://lottie.host/2b87d3fd-d60f-4bd9-bb7c-75b9aa1e8cf0/3SAseRXY4W.json"
          background="transparent"
          speed="1"
          style={{ width: '100%', height: '100%' }}
          loop
          autoplay
        />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Integration Plan Section */}
      <IntegrationPlanSection />

      {/* Conclusion Section */}
      <ConclusionSection />
    </div>
  );
}

export default HomePage;
