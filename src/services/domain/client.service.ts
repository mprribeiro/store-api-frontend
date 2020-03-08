import { StorageService } from './../storage.service';
import { API_CONFIG } from './../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientDTO } from 'src/models/client.dto';

@Injectable()
export class ClientService {
    
    constructor(public http: HttpClient, public storage: StorageService) {
    }

    findByEmail(email: String) {   
        return this.http.get(`${API_CONFIG.baseUrl}/clients/email?value=${email}`);
    }

    findById(id: String) {
        return this.http.get(`${API_CONFIG.baseUrl}/clients/${id}`);
    }

    insert(obj: ClientDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/clients`, obj, {
            observe: 'response',
            responseType: 'text'
        })
    }
}
