'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form data:", formData); //  confirm data correct

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' }); // clear up list
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
      {/* Name input */}
      <div className='relative flex items-center'>
        <Input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} required />
        <User className='absolute right-6' size={20} />
      </div>
      {/* Email input */}
      <div className='relative flex items-center'>
        <Input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
        <MailIcon className='absolute right-6' size={20} />
      </div>
      {/* Message textarea */}
      <div className='relative flex items-center'>
        <Textarea name='message' placeholder='Type Your Message Here.' value={formData.message} onChange={handleChange} required />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>
      {/* Submit button */}
      <Button type='submit' className='flex items-center gap-x-1 max-w-[166px]'>
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
