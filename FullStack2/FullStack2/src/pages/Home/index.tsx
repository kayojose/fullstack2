
import React, { useState, useEffect } from 'react';
import { PageContent, MainContent, CurrentPageTitle, TopContent, Button } from './styles';
import { MdAdd } from 'react-icons/md';
import Navbar from '../../components/Navbar';
import PartnersList from '../../components/PartnersList';
import { TPartner } from '../../components/PartnersList/PartnersList.types';
import NewPartnerModal from '../../components/NewPartnerModal';
import SuccessModal from '../../components/SuccessModal';
import api from '../../services/api';

type SucessModelProps = {
  isOpen: boolean,
  message: string
}

const Home = () => {
  const [ partners, setPartners ] = useState<TPartner[]>([] as TPartner[]);
  const [newPartnerModalIsOpen, setNewPartnerModalIsOpen] = useState(false);
  const [openSucessModel, setOpenSucessModel] = useState<SucessModelProps>({
    isOpen: false,
    message: '',
});

  const handleCreateNewPartner = async (partnerToSave: TPartner) => {
    console.log("partnerToSave: ", partnerToSave)
    const response = await api.post('/', {...partnerToSave});
    console.log("data: ", response?.data);
    console.log("status: ", response?.status);
    if (response?.status === 201) {
        setNewPartnerModalIsOpen(false);
        setOpenSucessModel({
            isOpen: true,
            message: '<p>Parceiro salvo com <strong>sucesso</strong><p/>',
        });
        await loadPartners();
    }
  }


  const loadPartners = async() => {
    const { data, status } = await api.get('/');
    if (status === 200) setPartners(data);
  }


  useEffect(() => {
    loadPartners();
  }, [])

  
  return (
    <>
      <Navbar />
      <PageContent>
        <TopContent>
          <CurrentPageTitle>Parceiros</CurrentPageTitle>
          <Button 
            type="button"
            onClick={() => setNewPartnerModalIsOpen(true)}
          >
            <MdAdd color="white" fontSize='1.8rem' /> 
            Parceiro
          </Button>
        </TopContent>
        <MainContent>
          <PartnersList partners={partners}/>
        </MainContent>
      </PageContent>

      <NewPartnerModal
        isOpen={newPartnerModalIsOpen}
        handleClose={() => setNewPartnerModalIsOpen(false)}
        handleSave={handleCreateNewPartner}
      />

      <SuccessModal
        isOpen={openSucessModel.isOpen}
        message={openSucessModel.message}
        handleClose={() => setOpenSucessModel({ isOpen: false, message: "" })}
      />
    </>
  )
}

export default Home;