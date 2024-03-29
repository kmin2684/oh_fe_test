import { home } from "../../data_types/data_types";
import {Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {formatter} from '../../utils/organize_data';

interface propType {
    index: number 
    home: home
}

export default function Home(props: propType) {
    return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card style={{margin: '0.5rem'}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Home {props.index + 1}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: {formatter.format(props.home.price)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Type: {props.home.type}
                </Typography>
            </CardContent>
        </Card>
    </Grid> 
    )
}

