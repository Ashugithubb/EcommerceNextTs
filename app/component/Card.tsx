'use client'
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import product from './product';
import { useAppDispatch } from '../redux/hook/hook';
import { setCount } from '../redux/slice/CartCountSlice';
import { setProduct } from '../redux/slice/Products';
import Product from './product';
import { Box } from '@mui/material';
import { useRouter } from "next/navigation";

export default function ProductCard(props: Product) {
    const router = useRouter();

    const handleNavigate = () => {
        console.log(`/product/${props.id}`);
        router.push(`/product/${props.id}`);
    };

    const dispatch = useAppDispatch();
    return (
        <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>

            <CardOverflow>
                <AspectRatio sx={{ minWidth: 200 }}
                >
                    <img
                        src={props.thumbnail}
                        // srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                        loading="lazy"
                        alt=""
                        style={{ cursor: 'pointer' }}
                        onClick={handleNavigate}
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
                    onClick={handleNavigate} style={{ cursor: 'pointer' }}
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
                    (Only {props.stock} left in stock!)
                </Typography>
            </CardContent>
            <CardOverflow>
                <Button variant="solid" color="danger" size="lg"
                    onClick={() => {
                        dispatch(setCount());
                        dispatch(setProduct(props));
                    }}>
                    Add to cart
                </Button>
            </CardOverflow>
        </Card>
    );
}