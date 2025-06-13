'use client';
import { Box, Typography } from "@mui/joy";
import { Card, CardContent, CardOverflow, AspectRatio, Chip, Button } from "@mui/joy";
import { use } from "react";

interface Params {
  params: { id: string };
}

export default async function FetchComponent({ params }: Params) {
  const { id } = params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        my: 4,
        px: 2,
      }}
    >
      <Card sx={{ boxShadow: "lg" }}>
        <CardOverflow>
          <AspectRatio ratio="16/9">
            <img
              src={product.thumbnail}
              alt={product.title}
              loading="lazy"
              style={{ borderRadius: 12 }}
            />
          </AspectRatio>
        </CardOverflow>

        <CardContent>
          <Typography level="h2" fontWeight="lg" sx={{ mb: 1 }}>
            {product.title}
          </Typography>
          <Typography level="body-md" sx={{ mb: 2 }}>
            {product.description}
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            <Chip color="success">Price: ${product.price}</Chip>
            <Chip color="primary">Rating: {product.rating} ⭐</Chip>
            <Chip color="neutral">Stock: {product.stock}</Chip>
          </Box>

          <Button
            fullWidth
            color="danger"
            variant="solid"
            size="lg"
            sx={{ mt: 3 }}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
