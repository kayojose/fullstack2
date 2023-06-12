import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
//import { nanoid } from 'nanoid';
import ReactModal from 'react-modal';

import { MdAdd } from 'react-icons/md';
import { Container, Title, FormContainer, Row, HalfColumn, Button, ButtonsField } from './styles';
import InputText from '../InputText';

import { TClient, TProject, TPartner } from '../PartnersList/PartnersList.types';


const customStyles = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      borderRadius: '15px',
      transform: 'translate(-50%, -50%)',
  },
};

type NewPartnerModelProps = {
  isOpen: boolean,
  handleClose: () => void,
  handleSave: (partnerToSave: TPartner) => Promise<any>
} 

const NewPartnerModal = ({ 
  isOpen, handleClose, handleSave }: NewPartnerModelProps) => {

  const [ name, setName ] = useState("");
  const [ repositoryGit, seRepositoryGit ] = useState("");
  const [ urlDoc, setUrlDoc ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ clientName, setClientName ] = useState("");
  const [ projectName, setProjectName ] = useState("");
  const [ clients, setClients ] = useState<TClient[]>([] as TClient[]);
  const [ projects, setProjects ] = useState<TProject[]>([] as TProject[]);
  const [ partnerToSave, setPartnerToSave ] = useState<TPartner>({} as TPartner);

  const joinData = () => {
    setPartnerToSave({
      name,
      repositoryGit,
      urlDoc,
      description,
      clients,
      projects
    })
  }

  const handleSubmit = async () => {
    joinData();
    console.log("dado modal: ", partnerToSave);
    await handleSave({...partnerToSave});  
}

  const handleSaveClient = () => {
    const newClient = {
      id: uuid(),
      name: clientName
    }
    setClients([...clients, newClient]);
    setClientName("");
  }

  const handleSaveProject = () => {
    const newProject = {
      id: uuid(),
      name: projectName
    }
    setProjects([...projects, newProject]);
    setProjectName("");
  }

  return (
    <ReactModal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={handleClose}
      closeTimeoutMS={150}
    >
      <Container>
        <Title>Novo Parceiro</Title>
        <FormContainer>
          <form>
            <Row>
              <HalfColumn>
                <InputText 
                  type="text"
                  label="Nome"
                  name="name"
                  placeholder="Nome do parceiro"
                  value={name}
                  handleOnChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
              </HalfColumn>

              <HalfColumn>
                <InputText 
                  type="text"
                  label="Descrição"
                  name="description"
                  placeholder="Descrição da parceria"
                  value={description}
                  handleOnChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                />
              </HalfColumn>
            </Row>

            <Row>
              <HalfColumn>
                <InputText 
                  type="text"
                  label="Repositório Git"
                  name="repositoryGit"
                  placeholder="Url do repositório git"
                  value={repositoryGit}
                  handleOnChange={(e: React.ChangeEvent<HTMLInputElement>) => seRepositoryGit(e.target.value)}
                />
              </HalfColumn>

              <HalfColumn>
                <InputText 
                  type="text"
                  label="Url do Documento"
                  name="urlDoc"
                  placeholder="Url do Documento"
                  value={urlDoc}
                  handleOnChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrlDoc(e.target.value)}
                />
              </HalfColumn>
            </Row>

            <Row>
              <HalfColumn>
                <div id="field">  
                  <InputText 
                    type="text"
                    label="Nome do cliente"
                    name="client"
                    placeholder="Insira o nome do cliente"
                    value={clientName}
                    handleOnChange={(e: React.ChangeEvent<HTMLInputElement>) => setClientName(e.target.value)}
                  />
                  <MdAdd color="orange" fontSize='1.8rem' style={{cursor: "pointer"}} onClick={handleSaveClient}/>
                </div>

                <div id="registers">
                  {clients.length > 0   
                    ?  clients.map((client) => (
                        <span key={client.name}>{client.name}</span>
                      ))
                    : <span>Nenhum cliente adicioando</span>
                  }
                </div>
              </HalfColumn>

              <HalfColumn>
                <div id="field">
                  <InputText 
                    type="text"
                    label="Nome do projeto"
                    name="project"
                    placeholder="Insira o nome do projeto"
                    value={projectName}
                    handleOnChange={(e: React.ChangeEvent<HTMLInputElement>) => setProjectName(e.target.value)}
                  />
                  <MdAdd color="orange" fontSize='1.8rem' style={{cursor: "pointer"}} onClick={handleSaveProject}/>
                </div>

                <div id="registers">
                  {projects.length > 0   
                    ?  projects.map((project) => (
                        <span key={project.name}>{project.name}</span>
                      ))
                    : <span>Nenhum projeto adicionado</span>
                  }
                </div>
              </HalfColumn>
            </Row>

            <ButtonsField>
              <HalfColumn>
                <Button
                  type="button"
                  style={{backgroundColor: "#eb6625", color: "white"}}
                  onClick={async () => {
                    await handleSubmit();
                  }}
                >
                  Salvar
                </Button>
              </HalfColumn>

              <HalfColumn>
              <Button
                  type="button"
                  style={{backgroundColor: "#cecbcb", color: "#eb6625"}}
                  onClick={() => handleClose()}
                >
                  Cancelar
                </Button>
              </HalfColumn>
            </ButtonsField>
            

            

          </form>
        </FormContainer>
      </Container>
    </ReactModal>
  )
}

export default NewPartnerModal;