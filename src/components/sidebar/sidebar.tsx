import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<div className='sidebar'>
			<ul className='nav flex-column'>
				<li className='nav-item'>
					<Link to='todolist' className='nav-link active'>
						Todolist
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='calculator' className='nav-link'>
						Calculator
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='products-filterable' className='nav-link'>
						products-filterable
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
