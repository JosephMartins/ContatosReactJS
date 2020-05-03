import React from 'react';
import { Link } from 'react-router-dom';
import {FiLogIn, FiTrash, FiEdit } from 'react-icons/fi';
import logoImg from '../../assets/logo.png';
import contactImg from '../../assets/contacts.png';

import {Navbar, Title, Form, Contacts, SingIn} from "./styles";


const Dashboard: React.FC = () => {
  return(
    <>
      <Navbar>
        <img src={logoImg} alt="Logo contacts" />
        <h2>Contacts</h2>
      </Navbar>

      <Title>Pesquise na sua lista de contato</Title>

      <Form>
        <input placeholder="Digite o nome do seu contato" />
        <button type="submit">Pesquisar</button>
      </Form>

      
      <SingIn>
        <Link to="/">
          Criar Contato
          <FiLogIn />
        </Link>
      </SingIn>

      <Contacts>
        <article>
          <span>
            <img src={contactImg} alt="Imagem de Contato" />
          </span>
          <div>
            <strong>Josezinho Martins</strong>
            <p>61 981772154</p>
            <p>martins.josemn@gmail.com</p>
          </div>
          <span>            
            <FiEdit color="#1a73e8" />
            <FiTrash color="#dd574c" />
          </span>
        </article>
        <article>
          <span>
            <img src={contactImg} alt="Imagem de Contato" />
          </span>
          <div>
            <strong>Josezinho Martins</strong>
            <p>61 981772154</p>
            <p>martins.josemn@gmail.com</p>
          </div>
          <span>            
            <FiEdit color="#1a73e8" />
            <FiTrash color="#dd574c" />
          </span>
        </article>
        <article>
          <span>
            <img src={contactImg} alt="Imagem de Contato" />
          </span>
          <div>
            <strong>Josezinho Martins</strong>
            <p>61 981772154</p>
            <p>martins.josemn@gmail.com</p>
          </div>
          <span>            
            <FiEdit color="#1a73e8" />
            <FiTrash color="#dd574c" />
          </span>
        </article>

      </Contacts>

    </>
  );
}


export default Dashboard;