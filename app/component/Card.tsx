import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio'
    ;
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
interface product {
    id: number,
    title: string,
    image: string,
    price: number,
    rating: {
        rate: number,
        count: number
    }
}
export default function ProductCard(props: product) {
    // console.log(props);
    return (
        <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
            <CardOverflow>
                <AspectRatio sx={{ minWidth: 200 }}>
                    <img
                        src={props.image}
                        // srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                {/* <Typography level="body-xs">Bluetooth Headset</Typography> */}
                <Link
                    href="#product-card"
                    color="neutral"
                    textColor="text.primary"
                    overlay
                    endDecorator={<ArrowOutwardIcon />}
                    sx={{ fontWeight: 'md' }}
                >
                    {props.title}
                </Link>
                <Typography
                    level="title-lg"
                    sx={{ mt: 1, fontWeight: 'xl' }}
                    endDecorator={
                        <Chip component="span" size="sm" variant="soft" color="success">
                            Lowest price
                        </Chip>
                    }
                >
                    {props.price}$
                </Typography>
                <Typography level="body-sm">
                    (Only {props.rating.count} left in stock!)
                </Typography>
            </CardContent>
            <CardOverflow>
                <Button variant="solid" color="danger" size="lg">
                    Add to cart
                </Button>
            </CardOverflow>
        </Card>
    );
}