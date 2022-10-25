/**
 * React
 */
import { useState, useEffect } from 'react';
/**
 * Next
 */
import { useRouter } from 'next/router'

/**
 * Material UI
 */
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
/**
 * Icons
 */
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShopIcon from '@mui/icons-material/Shop';
/**
 * Routes
 */
import {HOME} from '@/constants/routes';

/**
 * Redux
 */
import { useSelector, useDispatch } from 'react-redux';
/**
 * FixedBottomNavigation
 * @constructor
 */
const BottomNavBar = () => {
	const router = useRouter();
	const [value, setValue] = useState(0);
	return (
		<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
					router.push(newValue);
				}}
			>
				<BottomNavigationAction label={"Home"} value={HOME} icon={<HomeIcon />} />
			</BottomNavigation>
		</Paper>
	);
}

const ShoppingCartBadge = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<Badge badgeContent={cart.quantity} color="primary">
			<ShoppingCartIcon/>
		</Badge>
	);
};

export default BottomNavBar;