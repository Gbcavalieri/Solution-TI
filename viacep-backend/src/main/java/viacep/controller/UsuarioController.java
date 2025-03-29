package viacep.controller;

import org.springframework.http.ResponseEntity;
import viacep.model.Cadastro;  // Corrigido para Cadastro
import viacep.repository.UsuarioRepository;  // Corrigido para o nome correto do repositório
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Criar usuário
    @PostMapping
    public Cadastro criarUsuario(@RequestBody Cadastro usuario) {  // Corrigido para Cadastro
        return usuarioRepository.save(usuario);
    }

    // Listar usuários
    @GetMapping
    public List<Cadastro> listarUsuarios() {  // Corrigido para Cadastro
        return usuarioRepository.findAll();
    }

    // Buscar pelo CPF | Adicionar validação se existe caso não exista retornar HTTP 404
    @GetMapping("/{cpf}")
    public ResponseEntity<Cadastro> buscarPorCpf(@PathVariable String cpf) {  // Corrigido para Cadastro
        Cadastro usuario = usuarioRepository.findByCpf(cpf);
        if(usuario == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(usuario);
    }

    // Editar usuário | Adicionar validação se existe caso não exista retornar HTTP 404
    @PutMapping("/{cpf}")
    public ResponseEntity<Cadastro> atualizarUsuario(@PathVariable String cpf, @RequestBody Cadastro usuarioAtualizado) {  // Corrigido para Cadastro
        Cadastro usuario = usuarioRepository.findByCpf(cpf);

        if(usuario == null){
            return ResponseEntity.notFound().build();
        }

        usuario.setNome(usuarioAtualizado.getNome());
        usuario.setCpf(usuarioAtualizado.getCpf());
        usuario.setCep(usuarioAtualizado.getCep());
        usuario.setLogradouro(usuarioAtualizado.getLogradouro());
        usuario.setBairro(usuarioAtualizado.getBairro());
        usuario.setCidade(usuarioAtualizado.getCidade());
        usuario.setEstado(usuarioAtualizado.getEstado());
        return ResponseEntity.ok(usuarioRepository.save(usuario));
    }

    // Excluir usuário
    @DeleteMapping("/{cpf}")
    public ResponseEntity<Void> excluirUsuario(@PathVariable String cpf) {
        Cadastro usuario = usuarioRepository.findByCpf(cpf);

        if(usuario == null) {
            return ResponseEntity.notFound().build();
        }
        Long id = usuario.getId();
        usuarioRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }
}
