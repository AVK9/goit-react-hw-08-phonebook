import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Title } from 'components/Title/Title';
import UserMenu from 'components/UserMenu/UserMenu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Phonebook = () => {
  return (
    <>
      <ToastContainer autoClose={1500} />
      <UserMenu />
      <Title text="Phonebook" />
      <ContactForm />
      <Title text="Contacts" />
      <Filter />
      <ContactList />
    </>
  );
};

export default Phonebook;
