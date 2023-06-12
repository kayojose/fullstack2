import ReactModal from 'react-modal';
import { GiConfirmed } from 'react-icons/gi';

import {
  FormContainer,
  TitleContainer,
  SubTitleContainer,
  NewPartnerModalContainer,
  Button
} from './styles';

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

type SucessModalProps = {
  isOpen: boolean,
  handleClose: () => void;
  message: string;
}

const SuccessModal = ({ isOpen, handleClose, message } : SucessModalProps) => {
  return (
    <ReactModal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={handleClose}
      closeTimeoutMS={150}
    >
      <NewPartnerModalContainer>
        <FormContainer>
          <TitleContainer>
              <GiConfirmed color="#eb6625" fontSize={"3rem"}/>
              <SubTitleContainer dangerouslySetInnerHTML={{__html: message}}>
              </SubTitleContainer>
          </TitleContainer>

          <div id="button-form">
            <Button type="button" onClick={() => { handleClose()}}>OK</Button>
          </div>
        </FormContainer>
      </NewPartnerModalContainer>
      
    </ReactModal>
  )
}

export default SuccessModal;