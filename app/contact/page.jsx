import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
// components
import Form from '@/components/Form';
import { TabsList } from '@radix-ui/react-tabs';
import { Tabs } from '@/components/ui/tabs';

const Contact = () => {
  return (
    <section>
      <div className='container mx-auto'>
        {/* text & illustration */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Welcome Sincerely
            </div>
            <h1 className='h1 max-w-md mb-8'>I believe I can do</h1>
            <div className='subtitle max-w-[400px]'>
              <Tabs>
              <TabsList>
              <span>&gt;&gt; </span>  I never stop studying and learning new things.
              </TabsList>
              <TabsList>
              <span>&gt;&gt; </span>  So let's see what we can achieve together.
              </TabsList>
              </Tabs>
            </div>
          </div>
          {/* illustration */}
          <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* info text & form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-20'>
          {/* info text */}
          <div className='flex flex-col gap-y-4 xl:gap-y-8 mb-12 xl:mb-24 text-base xl:text-lg'>
            {/* mail */}
            <div className='flex items-center gap-x-8'>
              <MailIcon size={20} className='text-primary' />
              <div>choicanlight@gmail.com</div>
            </div>
            {/* address */}
            <div className='flex items-center gap-x-8'>
              <HomeIcon size={20} className='text-primary' />
              <div>Mount Eden, Auckland, 1024</div>
            </div>
            {/* phone */}
            <div className='flex items-center gap-x-8'>
              <PhoneCall size={20} className='text-primary' />
              <div>+64 210 857 3848</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
