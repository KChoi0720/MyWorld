'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/holzer1.jpg',
    category: 'Development',
    name: 'Holzer Website',
    description:
      'Achieved in Holzer web responsive and interactive functions.',
    link: 'http://www.holzer.com.cn/',
    // github: '/',
  },

  {
    image: '/work/powerbi.jpg',
    category: 'Data Analytics',
    name: 'Sales Analysis and Prediction',
    description:
      'Use Power BI, Excel, Python to analyse all sales data',
    link: '/',
    github: '/',
  },

  {
    image: '/work/1.png',
    category: 'Salesforce',
    name: 'Salesforce with Kafka',
    description:
      'Achieve real-time data ETL with Salesforce',
    link: '/',
    github: '/',
  },

];


const Work = () => {
    return (
      // mt-8 pb-12 xl:py-6
      <section className='relative mb-6 xl:mb-24'>
        <div className='container mx-auto'>
          {/* text */}
          <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
            <h2 className='section-title mb-4'>My Projects</h2>
            <p className='subtitle mb-8'>
              All the projects that I participated and achieved.
            </p>
            <Link href='/projects'>
              <Button>All projects</Button>
            </Link>
          </div>
          {/* slider */}
          <div className='xl:max-w-[900px] xl:absolute right-60 top-20'>
            <Swiper
              className='h-[500px]'
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {/* show only the first 4 projects for the slides */}
              {projectData.slice(0, 4).map((project, index) => {
                return (
                  <SwiperSlide key={index} >
                    <ProjectCard project={project} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    );
  };
  
  export default Work;
