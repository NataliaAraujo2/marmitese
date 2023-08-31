import React, { useEffect, useRef, useState } from "react";
import styles from "./Register.module.css";
import Button from "../../components/Button/Button";
import { FaBuilding, FaUnlock, FaUser } from "react-icons/fa";
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [natural, setNatural] = useState(true);
  const displayNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      setPassword("");
      setConfirmPassword("");
      passwordRef.current.focus();
      return;
    }

    if (displayName === "") {
      setError("Preencha todos os campos");
      displayNameRef.current.focus();
      return;
    }

    if (email === "") {
      setError("Preencha todos os campos");
      emailRef.current.focus();
      return;
    }
    const res = await createUser(user);
  };
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.register}>
      <h1>CRIE SUA CONTA</h1>
      <h3>Preencha os dados abaixo para se cadastrar no site!</h3>

      <div className={styles.button}>
        <ul>
          <li>
            <Button
              action={() => setNatural(true)}
              className={styles.natural}
              Text="Pessoa Física"
              Icon={FaUser}
            />
          </li>
          <li>
            <Button
              className={styles.legal}
              action={() => setNatural(false)}
              Text="Pessoa Jurídica"
              Icon={FaBuilding}
            />
          </li>
        </ul>
      </div>

      {natural === true ? (
        <div className={styles.naturalform}>
          <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            {error === "E-mail já cadastrado" && (
              <div className={styles.button}>
                <ul>
                  <li>
                    <Button
                      way="/"
                      className={styles.natural}
                      Text="Clique aqui para entrar!"
                      Icon={FaUnlock}
                    />
                  </li>
                </ul>
              </div>
            )}
            <label>
              <span>Nome:</span>
              <input
                type="text"
                name="displayName"
                ref={displayNameRef}
                placeholder="Nome de Usuário"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </label>
            <label>
              <span>Email:</span>
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="Digite seu Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <span>Senha:</span>
              <input
                type="password"
                name="password"
                ref={passwordRef}
                required
                placeholder="Insira sua Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
            </label>
            <label>
              <span>Confirmação de Senha:</span>
              <input
                type="password"
                name="confirmPassword"
                ref={confirmPasswordRef}
                required
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="off"
              />
            </label>
            {!loading && <button>Cadastrar</button>}
            {loading && <button disabled>Aguarde...</button>}
          </form>
        </div>
      ) : (
        <div className={styles.legalform}>
          <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <label>
              <span>Nome da Empresa:</span>
              <input
                type="text"
                name="displayName"
                ref={displayNameRef}
                placeholder="Nome de Usuário"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </label>
            <label>
              <span>Email:</span>
              <input
                type="email"
                name="email"
                ref={emailRef}
                required
                placeholder="Digite seu Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <span>Senha:</span>
              <input
                type="password"
                name="password"
                ref={passwordRef}
                required
                placeholder="Insira sua Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
            </label>
            <label>
              <span>Confirmação de Senha:</span>
              <input
                type="password"
                name="confirmPassword"
                ref={confirmPasswordRef}
                required
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="off"
              />
            </label>
            {!loading && <button>Cadastrar</button>}
            {loading && <button disabled>Aguarde...</button>}
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;
