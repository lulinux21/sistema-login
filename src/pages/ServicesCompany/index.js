import React from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import * as C from "./../Home/styles";
import "./../../styles/styles.css";
import { Container, Row, Col } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";

const ServicesCompany = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <C.Container>
        <Nav class="nav-home navbar navbar-expand-md navbar-light bg-light fixed-top py-3 box-shadow">
          <a href="/home" class="navbar-brand">
            <img
              width={"120px"}
              src="https://d335luupugsy2.cloudfront.net/cms/files/335916/1657750336/$5c3n6c19mcl"
              alt="Caravan"
            />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Abrir Navegação"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a
                  onClick={() => [navigate("/about")]}
                  class="nav-link text-white"
                  href="#"
                >
                  Sobre nós
                </a>
              </li>
              <li class="nav-item">
                <a
                  onClick={() => [navigate("/services-company")]}
                  class="nav-link text-white"
                  href="#"
                >
                  Serviços
                </a>
              </li>

              <li class="nav-item">
                <a
                  onClick={() => [signout(), navigate("/")]}
                  class="btn-logout btn btn-outline-primary ml-md-2"
                  href="inscricao.html"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </Nav>

        <Container style={{ marginTop: "270px" }}>
          <Row>
            <Col>
              {" "}
              <section>
                <p className="text-white">
                  Nossa Missão: Empoderar você na conquista dos seus objetivos
                  financeiros. <br /> <br />
                  Nossa Visão: Ser parte da transformação financeira, econômica
                  e cultural dos brasileiros, mostrando que planejamento é o
                  caminho para grandes conquistas. <br /> <br />
                  Nossos Valores INTEGRIDADE Atuamos a partir de altos padrões
                  de responsabilidade profissional, adotando os princípios da
                  ética, legalidade e excelência na prestação dos nossos
                  serviços. PROXIMIDADE Pautamos nosso trabalho baseados na
                  honestidade e confiança, buscando a construção de um
                  relacionamento de longo-prazo. <br /> <br />A capacidade de
                  gerar resultados positivos aos nossos clientes é o que nos
                  motiva.
                  <br /> <br />
                  IMPARCIALIDADE Colocamos sempre os objetivos e interesses do
                  cliente em primeiro lugar, atuando com o máximo de
                  transparência. <br /> <br /> EXCLUSIVIDADE Elaboramos
                  planejamentos exclusivos e personalizados de acordo com a
                  demanda específica de cada cliente. <br /> <br /> INOVAÇÃO
                  Estamos em constante adaptação para prover experiências novas
                  e memoráveis aos nossos clientes.
                </p>
              </section>
            </Col>
          </Row>
        </Container>

        <footer class="container-fluid bg-dark text-white mt-5">
          <div class="py-4">
            <div class="row">
              <div class="col-md-3 col-6">
                <h4 class="h6">PÁGINAS</h4>
                <ul class="list-unstyled">
                  <li>
                    <a className="text-white" href="planos.html">
                      Sobre nós
                    </a>
                  </li>
                  <li>
                    <a className="text-white" href="contato.html">
                      Serviços
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-3 col-6">
                <h4 class="h6">Lorem ipsum</h4>
                <ul class="list-unstyled">
                  <li>
                    <a className="text-white" href="local.html">
                      lorem ipsum
                    </a>
                  </li>
                  <li>
                    <a className="text-white" href="local.html">
                      Lorem ipsum
                    </a>
                  </li>
                  <li>
                    <a className="text-white" href="local.html">
                      lorem ipsum
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <h4 class="h6">DADOS DE CONTATO</h4>
                <ul class="list-unstyled text-secondary">
                  <li>contato@w1consultoria.com.br</li>
                  <li>21 99999-9999</li>
                  <li>De Seg. à Sex. das 8h às 18h</li>
                </ul>
              </div>
              <div class="col-md-2">
                <h4 class="h6">REDES SOCIAIS</h4>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="btn btn-outline-secondary btn-sm btn-block mb-2"
                      href="#"
                      style={{ maxWidth: "140px" }}
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      class="btn btn-outline-secondary btn-sm btn-block mb-2"
                      href="#"
                      style={{ maxWidth: "140px" }}
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      class="btn btn-outline-secondary btn-sm btn-block mb-2"
                      href="#"
                      style={{ maxWidth: "140px" }}
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row justify-content-center bg-primary py-3">
            <p class=" mb-0">
              W1Consultoria © 2023. Alguns direitos reservados.
            </p>
          </div>
        </footer>
      </C.Container>
    </>
  );
};

export default ServicesCompany;
