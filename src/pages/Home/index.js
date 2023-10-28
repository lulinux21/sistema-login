import React from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import "./../../styles/styles.css";

import Nav from "react-bootstrap/Nav";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <Nav class="nav-home navbar navbar-expand-md navbar-light bg-light fixed-top py-3 box-shadow">
        <a href="index.html" class="navbar-brand">
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
              <a class="nav-link text-white" href="#">
                Sobre nós
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
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

      <section class="container-fluid">
        <div class="row bg-dark text-white">
          <div class="col-lg-7 p-0">
            <div
              id="carouselCidades"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselCidades"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#carouselCidades" data-slide-to="1"></li>
                <li data-target="#carouselCidades" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src="https://d335luupugsy2.cloudfront.net/cms/files/335916/1658244490/$t8eewba3jv"
                    alt="California"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselCidades"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Anterior</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselCidades"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Próximo</span>
              </a>
            </div>
          </div>

          <div class="col-lg-5 p-4 align-self-center">
            <h3>REALIZE UMA TRANSFORMAÇÃO NA SUA VIDA FINANCEIRA!</h3>
            <p class="lead">
              Seja para viajar, trocar de carro, comprar uma casa, ou qualquer
              outro objetivo, se planejar financeiramente é essencial.
            </p>
            <form action="">
              <div class="input-group input-group-lg">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  aria-label="Email"
                />
                <span class="input-group-btn">
                  <button
                    style={{ height: "48px" }}
                    class="btn btn-primary"
                    type="button"
                  >
                    Inscreva-se
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </C.Container>
  );
};

export default Home;
