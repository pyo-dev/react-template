import Highlight from 'react-highlight'

import { useState } from 'react'
import { ReactSortable } from "react-sortablejs";

export const PyoDevPluginSortable = () => {
	const pageCode = `// 페이지
import { useState } from 'react'
import { ReactSortable } from "react-sortablejs";

export const 컴포넌트이름 = () => {
	const [state, setState] = useState([
		{
			id: 1,
			name: "---11---",
			children: [
				{ id: 1, name: 'a' },
				{ id: 2, name: 'bb' },
				{ id: 3, name: 'ccc' },
			]
		},
		{
			id: 2,
			name: "---22---"
		},
		{
			id: 3,
			name: "---33---",
			children: [
				{ id: 1, name: 'a' },
				{ id: 2, name: 'bb' },
				{ id: 3, name: 'ccc' },
			]
		},
	]);

	const updateChildren = (parentIndex, newChildren) => {
		const newState = [...state];
		newState[parentIndex].children = newChildren;
		setState(newState);
	};

	return (
		<div className='sort-table-wrap'>
			<ReactSortable
				className='sort-table'
				handle='.my-handle'
				list={state}
				setList={setState}
				animation={200}
				delayOnTouchStart={true}
				delay={2}
			>
				{state.map((item, index) => (
					<div key={item.id}>
						<div className='my-handle'>+</div>
						{item.name}
						{
							item.children && 
							<ReactSortable
								className='sort-table'
								handle='.my-handle'
								list={item.children}
								setList={(newChildren) => updateChildren(index, newChildren)}
								animation={200}
								delayOnTouchStart={true}
								delay={2}
							>
								{item.children.map((child) => (
									<div key={child.id}>
										<div className='my-handle'>+</div>
										{child.name}
									</div>
								))}
							</ReactSortable>
						}
					</div>
				))}
			</ReactSortable>
			<ReactSortable
				className='sort-table'
				handle='.my-handle'
				list={state}
				setList={setState}
				animation={200}
				delayOnTouchStart={true}
				delay={2}
			>
				{state.map((item) => (
					<div key={item.id}><div className='my-handle'>+</div>{item.name}</div>
				))}
			</ReactSortable>
		</div>
	)
};
`
	const [state, setState] = useState([
		{
			id: 1,
			name: "---11---",
			children: [
				{ id: 1, name: 'a' },
				{ id: 2, name: 'bb' },
				{ id: 3, name: 'ccc' },
			]
		},
		{
			id: 2,
			name: "---22---"
		},
		{
			id: 3,
			name: "---33---",
			children: [
				{ id: 1, name: 'a' },
				{ id: 2, name: 'bb' },
				{ id: 3, name: 'ccc' },
			]
		},
	]);

	const updateChildren = (parentIndex, newChildren) => {
		const newState = [...state];
		newState[parentIndex].children = newChildren;
		setState(newState);
	};

	return (
		<div className='lm-panel lm-panel-flex-wrap'>
			<Highlight className='javascript lm-panel-code'>{pageCode}</Highlight>
			<div className='sort-table-wrap'>
				<ReactSortable
					className='sort-table'
					handle='.my-handle'
					list={state}
					setList={setState}
					animation={200}
					delayOnTouchStart={true}
					delay={2}
				>
					{state.map((item, index) => (
						<div key={item.id}>
							<div className='my-handle'>+</div>
							{item.name}
							{
								item.children && 
								<ReactSortable
									className='sort-table'
									handle='.my-handle'
									list={item.children}
									setList={(newChildren) => updateChildren(index, newChildren)}
									animation={200}
									delayOnTouchStart={true}
									delay={2}
								>
									{item.children.map((child) => (
										<div key={child.id}>
											<div className='my-handle'>+</div>
											{child.name}
										</div>
									))}
								</ReactSortable>
							}
						</div>
					))}
				</ReactSortable>
				<ReactSortable
					className='sort-table'
					handle='.my-handle'
					list={state}
					setList={setState}
					animation={200}
					delayOnTouchStart={true}
					delay={2}
				>
					{state.map((item) => (
						<div key={item.id}><div className='my-handle'>+</div>{item.name}</div>
					))}
				</ReactSortable>
			</div>
		</div>
	)
};