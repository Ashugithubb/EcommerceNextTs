"use client"
import { Typography, Box, Paper, Divider, Button } from "@mui/material";
import { useAppDispatch,useAppSelector } from "../../redux/hook/hook";
import { removeProduct } from "../../redux/slice/Products";

const Cart = () => {
  const productss = useAppSelector((state) => state.product.products);
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ p: { xs: 1, sm: 3 }, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" fontWeight={700} gutterBottom align="center" color="primary">
        🛒 Your Cart
      </Typography>
      <Divider sx={{ mb: 3 }} />
      {productss.length === 0 ? (
        <Typography align="center" color="text.secondary" sx={{ mt: 6 }}>
          No items in cart.
        </Typography>
      ) : (
        productss.map((item) => (
          <Paper
            key={item.id}
            elevation={3}
            sx={{
              mb: 3,
              p: 2,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              gap: 3,
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              transition: "box-shadow 0.2s",
              "&:hover": { boxShadow: "0 4px 24px rgba(0,0,0,0.13)" },
            }}
          >
            <Box
              sx={{
                minWidth: 90,
                minHeight: 90,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f9f9f9",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                width={80}
                height={80}
                style={{ objectFit: "cover", borderRadius: 8 }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" fontWeight={600}>
                {item.title}
              </Typography>
              {/* Removed description */}
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Typography variant="body2" color="primary">
                  <b>Price:</b> ${item.price}
                </Typography>
                <Typography variant="body2">
                  <b>Rating:</b> {item.rating} ⭐
                </Typography>
                <Typography variant="body2">
                  <b>Stock:</b> {item.stock}
                </Typography>
                {/* <Typography variant="body2">
                  <b>Quantity:</b> 1
                </Typography> */}
              </Box>
            </Box>
            <Button variant="outlined" color="error" size="small" onClick={()=>{dispatch(removeProduct(item.id))}}>
              Remove
            </Button>
          </Paper>
        ))
      )}
    </Box>
  );
};

export default Cart;