import { orderDTO } from './../models/order.dto';
import { Cart } from './../models/cart';
import { STORAGE_KEYS } from './../config/storage_keys.config';
import { Injectable } from '@angular/core';
import { LocalUser } from 'src/models/local_user';

@Injectable()
export class StorageService {

    getLocalUser(): LocalUser {
        let user = localStorage.getItem(STORAGE_KEYS.localUser);
        if (user == null) {
            return null;
        } else {
            return JSON.parse(user);
        }
    }

    setLocalUser(obj : LocalUser) { 
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        } else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }

    getCart() : Cart {
        let str = localStorage.getItem(STORAGE_KEYS.cart);
        if (str != null) {
            return JSON.parse(str);
        }
        else {
            return null;
        }
    }

    setCart(obj : Cart) {
        if (obj != null) {
            localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(obj));
        } 
        else {
            localStorage.removeItem(STORAGE_KEYS.cart);
        }
    }

    getOrder() : orderDTO {
        let str = localStorage.getItem(STORAGE_KEYS.order);
        if (str != null) {
            return JSON.parse(str);
        }
        else {
            return null;
        }
    }

    setOrder(obj : orderDTO) {
        if (obj != null) {
            localStorage.setItem(STORAGE_KEYS.order, JSON.stringify(obj));
        } 
        else {
            localStorage.removeItem(STORAGE_KEYS.order);
        }
    }
}