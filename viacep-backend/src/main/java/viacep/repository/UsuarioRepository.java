package viacep.repository;

import viacep.model.Cadastro;  // Corrigido para Cadastro
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Cadastro, Long> {  // Corrigido para Cadastro
    Cadastro findByCpf(String cpf);  // Método para buscar usuário pelo CPF
}
