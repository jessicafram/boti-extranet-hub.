import { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Box, Container, CircularProgress } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import { getDashboardData, type FranchiseData } from '../../services/api';

const Dashboard = () => {
    const [data, setData] = useState<FranchiseData | null>(null);

    useEffect(() => {
        // Simulando o carregamento de dados críticos da Extranet
        getDashboardData().then(res => setData(res));
    }, []);

    if (!data) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}><CircularProgress /></Box>;

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <BusinessIcon sx={{ mr: 2, color: 'primary.main', fontSize: 40 }} />
                <Typography variant="h4" component="h1" fontWeight="bold">
                    Extranet | Gestão de Franquia
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {/* Card de Vendas */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', height: 160, borderLeft: '5px solid #00a859' }}>
                        <Typography color="text.secondary" variant="overline" fontWeight="bold">Vendas do Dia</Typography>
                        <Typography variant="h3" sx={{ mt: 1 }}>
                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(data.vendasDia)}
                        </Typography>
                    </Paper>
                </Grid>

                {/* Card de Status */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', height: 160, borderLeft: '5px solid #1976d2' }}>
                        <Typography color="text.secondary" variant="overline" fontWeight="bold">Status do Sistema</Typography>
                        <Typography variant="h4" color="success.main" sx={{ mt: 1 }}>
                            {data.statusSistema} ({data.disponibilidade})
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Dashboard;