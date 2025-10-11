import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Grid,
  InputAdornment,
} from '@mui/material';
import {
  Search as SearchIcon,
  Description as DescriptionIcon,
  DirectionsRun as RunIcon,
  Science as ScienceIcon,
  BugReport as BugIcon,
  Checklist as ChecklistIcon,
} from '@mui/icons-material';

function Documents() {
  const [searchTerm, setSearchTerm] = useState("");

  const documents = [
    { id: 1, title: "Software Requirements Specification", version: "v2.1", status: "Approved", modified: "2023-01-01" },
    { id: 2, title: "Sprint 3 planning", version: "v2.1", status: "Approved", modified: "2023-01-01" },
    { id: 3, title: "Test Case Repository", version: "v2.1", status: "Approved", modified: "2023-01-01" },
    { id: 4, title: "Deployment Checklist", version: "v2.1", status: "Approved", modified: "2023-01-01" },
  ];

  const templates = [
    {
      icon: <DescriptionIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "SRS Template",
      description: "Standard template for documenting software requirements",
    },
    {
      icon: <RunIcon sx={{ fontSize: 40, color: 'success.main' }} />,
      title: "Sprint Planning",
      description: "Template for planning and documenting sprint goals",
    },
    {
      icon: <ScienceIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: "Test Case Template",
      description: "Standard format for writing test cases",
    },
    {
      icon: <BugIcon sx={{ fontSize: 40, color: 'error.main' }} />,
      title: "Bug Report Template",
      description: "Template for reporting and tracking bugs",
    },
    {
      icon: <ChecklistIcon sx={{ fontSize: 40, color: 'warning.main' }} />,
      title: "Deployment Checklist",
      description: "Comprehensive checklist for deployments",
    },
  ];

  const filteredDocs = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
  <Box>
      <Container maxWidth="xl" sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Documentation Center
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <TextField
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="small"
              sx={{ width: 300 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button 
              variant="contained" 
              color="primary"
            >
              + New Document
            </Button>
          </Box>
        </Box>

        {/* Documents Grid */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {filteredDocs.length > 0 ? (
            filteredDocs.map(doc => (
              <Grid item xs={12} sm={6} md={4} key={doc.id}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                      <DescriptionIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          {doc.title}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 1 }}>
                          <Typography variant="caption" color="text.secondary">
                            {doc.version}
                          </Typography>
                          <Button 
                            size="small" 
                            variant="outlined" 
                            color="success"
                            sx={{ py: 0, px: 1, fontSize: '0.7rem' }}
                          >
                            {doc.status}
                          </Button>
                        </Box>
                        <Typography variant="caption" color="text.secondary">
                          Last modified: {doc.modified}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                      <Button variant="outlined" size="small" fullWidth>
                        Edit
                      </Button>
                      <Button variant="outlined" size="small" fullWidth>
                        Export
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="body1" color="text.secondary" textAlign="center">
                No documents found
              </Typography>
            </Grid>
          )}
        </Grid>

        {/* Templates Section */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            Document Templates
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {templates.map((template, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': {
                    boxShadow: 4,
                    transform: 'translateY(-4px)',
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', py: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    {template.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: '1rem' }}>
                    {template.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {template.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Documents;
