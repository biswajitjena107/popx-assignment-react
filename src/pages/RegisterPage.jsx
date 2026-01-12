import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import CustomInput from '../components/CustomInput';
import { useUser } from '../context/UserContext';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { registerUser } = useUser();
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = registerUser(formData);
    
    if (result.success) {
      navigate('/profile');
    } else {
      alert(result.message);
    }
  };

  return (
    <Layout title="Create your PopX account">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <CustomInput label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required />
        <CustomInput label="Phone number" name="phone" value={formData.phone} onChange={handleChange} required />
        <CustomInput label="Email address" name="email" type="email" value={formData.email} onChange={handleChange} required />
        <CustomInput label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />
        <CustomInput label="Company name" name="company" value={formData.company} onChange={handleChange} />

        <div className="mb-6">
            <p className="text-sm font-semibold text-pop-text mb-2">Are you an Agency?<span className="text-pop-error">*</span></p>
            <div className="flex gap-4">
                <label className="flex items-center gap-2">
                    <input type="radio" name="isAgency" value="yes" checked={formData.isAgency === 'yes'} onChange={handleChange} className="accent-pop-primary w-4 h-4" />
                    <span>Yes</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="isAgency" value="no" checked={formData.isAgency === 'no'} onChange={handleChange} className="accent-pop-primary w-4 h-4" />
                    <span>No</span>
                </label>
            </div>
        </div>

        <button type="submit" className="w-full bg-pop-primary text-white py-3 rounded-lg font-medium mt-auto hover:bg-opacity-90 transition-all">
            Create Account
        </button>
      </form>
    </Layout>
  );
};

export default RegisterPage;