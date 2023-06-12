import { ListContainer, Row, TitleBox, Title, ActionButton, NoResults } from './styles';
import NoData from '../../assets/no-data.svg';
import { LuEdit } from 'react-icons/lu';
import { AiFillDelete } from 'react-icons/ai';
import { TPartner } from './PartnersList.types';

type partnersProps = {
  partners : TPartner[]
}

const PartnersList = ({ partners } : partnersProps) => {
  

  return (
    <ListContainer>
      <Row isHeader={true}>
        <TitleBox>
          <Title isHeader={true}>Nome</Title>
        </TitleBox>

        <TitleBox>
          <Title isHeader={true}>Repositório Git</Title>
        </TitleBox>

        <TitleBox>
          <Title isHeader={true}>Doc. URL</Title>
        </TitleBox>

        <TitleBox>
          <Title isHeader={true}>Clientes</Title>
        </TitleBox>

        <TitleBox>
          <Title isHeader={true}>Produtos</Title>
        </TitleBox>

        <TitleBox>
          <Title isHeader={true}>Ações</Title>
        </TitleBox>
      </Row>

      { partners.length > 0 
        ? partners.map( partner => (
            <Row isHeader={false} key={partner.id}>
              <TitleBox>
                <Title isHeader={false}>{partner.name}</Title>
              </TitleBox>

              <TitleBox>
                <Title isHeader={false}>{partner.repositoryGit}</Title>
              </TitleBox>

              <TitleBox>
                <Title isHeader={false}>{partner.urlDoc}</Title>
              </TitleBox>

              <TitleBox>
                {partner.clients.length > 0 
                  ? partner.clients.map(client => (
                    <Title key={client.id} isHeader={false}>
                      {client.name}
                    </Title>
                    ))
                  : <Title isHeader={false}>Sem clientes registrados</Title>
                }
              </TitleBox>

              <TitleBox>
                {partner.projects.length> 0 
                  ? partner.projects.map(project => (
                    <Title key={project.id} isHeader={false}>
                      {project.name}
                    </Title>
                    ))
                  : <Title isHeader={false}>Sem projetos registrados</Title>
                }
              </TitleBox>

              <TitleBox>
                <ActionButton> <LuEdit /> </ActionButton>
                <ActionButton> <AiFillDelete /> </ActionButton>
              </TitleBox>
            </Row>
          ))
        : (
          <NoResults>
            <img src={NoData} />
            <p>Nenhum registro foi encontrado</p>
          </NoResults>
        )
      }
    </ListContainer>
  )
}

export default PartnersList;