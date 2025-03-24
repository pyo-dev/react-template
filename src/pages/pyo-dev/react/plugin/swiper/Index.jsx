import Highlight from 'react-highlight'

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const PyoDevPluginSwiper = () => {
	const pageCode = `// 페이지
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // 필요 묘듈 import
import { Swiper, SwiperSlide } from 'swiper/react'; // 필요 컴퍼넌트 import

// css import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export export const 컴포넌트이름 = () => {
	return (
		<>
			<div className='pyo-panel pyo-panel-flex-wrap'>
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={50}
					slidesPerView={3}
					navigation
					pagination={{ clickable: true }}
					autoplay={{ delay: 2000, disableOnInteraction: false }}
					loop={true}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide style={{height: '300px', background: 'red'}}>Slide 1</SwiperSlide>
					<SwiperSlide style={{height: '300px', background: 'orange'}}>Slide 2</SwiperSlide>
					<SwiperSlide style={{height: '300px', background: 'yellow'}}>Slide 3</SwiperSlide>
					<SwiperSlide style={{height: '300px', background: 'green'}}>Slide 4</SwiperSlide>
					<SwiperSlide style={{height: '300px', background: 'blue'}}>Slide 5</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};
`

	return (
		<>
			<div className='pyo-panel pyo-panel-flex-wrap'>
				<Highlight className='javascript pyo-panel-code'>{pageCode}</Highlight>
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={50}
					slidesPerView={3}
					navigation
					pagination={{ clickable: true }}
					autoplay={{ delay: 2000, disableOnInteraction: false }}
					loop={true}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide style={{height: `300px`, background: 'red'}}>Slide 1</SwiperSlide>
					<SwiperSlide style={{height: `300px`, background: 'orange'}}>Slide 2</SwiperSlide>
					<SwiperSlide style={{height: `300px`, background: 'yellow'}}>Slide 3</SwiperSlide>
					<SwiperSlide style={{height: `300px`, background: 'green'}}>Slide 4</SwiperSlide>
					<SwiperSlide style={{height: `300px`, background: 'blue'}}>Slide 5</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};