package com.example.backend.endpoints.helloreact;

import com.example.backend.data.Todo;
import com.example.backend.repository.TodoRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import dev.hilla.Nonnull;

import java.util.List;

@Endpoint
@AnonymousAllowed
public class TodoEndpoint {

    private TodoRepository repository;

    public TodoEndpoint(TodoRepository repository) {


        this.repository = repository;
    }

    public @Nonnull List<@Nonnull Todo> findAll() {
        return repository.findAll();
    }

    public Todo save(Todo todo) {
        return repository.save(todo);
    }
}
