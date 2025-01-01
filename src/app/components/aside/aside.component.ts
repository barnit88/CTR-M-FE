import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}




/**
 * HTML Comment 
 * 
 * 
 * 
 * 
                    <!-- Tree View Personal Equipment -->
                    <ul class="nav nav-treeview">
                        <li class="nav-item has-treeview">
                            <a class="nav-link">
                                <p class="active">
                                    Personal Equipment
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <!-- Personal Equipement Items -->
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['personal-equipment']" class="nav-link">
                                        <p class="active">
                                            Personal Equipement
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['pe-bought']" class="nav-link">
                                        <p class="active">
                                            Personal Equipement Bought
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['peb-payment-transaction']" class="nav-link">
                                        <p class="active">
                                            Personal Equipement Bought Payment Transaction
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['pe-income']" class="nav-link">
                                        <p class="active">
                                            Personal Equipement Income
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['pei-payment-transaction']" class="nav-link">
                                        <p class="active">
                                            Personal Equipement Income Payment Transaction
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['pe-expenses']" class="nav-link">
                                        <p class="active">
                                            Personal Equipement Expenses
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['pee-payment-transaction']" class="nav-link">
                                        <p class="active">
                                            Personal Equipement Expenses Payment Transaction
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <!-- Tree View Personal Vehicle -->
                    <ul class="nav nav-treeview">
                        <li class="nav-item has-treeview">
                            <a class="nav-link">
                                <p class="active">
                                    Personal Vehicle
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <!-- Personal Vehicle Items -->
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['personal-vehicle']" class="nav-link">
                                        <p class="active">
                                            Personal Vehicle
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['pv-bought']" class="nav-link">
                                        <p class="active">
                                            Personal Vehicle Bought
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['pvb-payment-transaction']" class="nav-link">
                                        <p class="active">
                                            Personal Vehicle Bought Transaction
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['pv-income']" class="nav-link">
                                        <p class="active">
                                            Personal Vehicle Income
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['pvi-payment-transaction']" class="nav-link">
                                        <p class="active">
                                            Personal Vehicle Income Payment Transaction
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['pv-expenses']" class="nav-link">
                                        <p class="active">
                                            Personal Vehicle Expenses
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['pve-payment-transaction']" class="nav-link">
                                        <p class="active">
                                            Personal Vehicle Expenses Transaction
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <!-- Tree View Rented Equipment -->
                    <ul class="nav nav-treeview">
                        <li class="nav-item has-treeview">
                            <a class="nav-link">
                                <p class="active">
                                    Rented Equipment
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <!-- Rented Equipment Items -->
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['rented-equipment']" class="nav-link">
                                        <p class="active">
                                            Rented Equipment
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['re-rent']" class="nav-link">
                                        <p class="active">
                                            Rented Equipment Rent
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['rer-payment-transaction']" class="nav-link">
                                        <p class="active">
                                            Rented Equipment Rent Payment Transaction
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['re-income']" class="nav-link">
                                        <p class="active">
                                            Rented Equipment Income
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['rei-payment-transaction']" class="nav-link">
                                        <p class="active">
                                            Rented Equipment Income Payment Transaction
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['re-expenses']" class="nav-link">
                                        <p class="active">
                                            Rented Equipment Expenses
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['ree-payment-transaction']" class="nav-link">
                                        <p class="active">
                                            Rented Equipment Expenses Payment Transaction
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <!-- Tree View Rented Equipment -->
                    <ul class="nav nav-treeview">
                        <li class="nav-item has-treeview">
                            <a class="nav-link">
                                <p class="active">
                                    Rented Vehicle
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <!-- Rented Equipment Items -->
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['rented-vehicle']" class="nav-link">
                                        <p class="active">
                                            Rented Vehicle
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['rv-rent']" class="nav-link">
                                        <p class="active">
                                            Rented Vehicle Rent
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['rvr-payment-transaction']" class="nav-link">
                                        <p class="active">
                                            Rented Vehicle Rent Payment Transaction
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['rv-income']" class="nav-link">
                                        <p class="active">
                                            Rented Vehicle Income
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['rvi-payment-transaction']" class="nav-link">
                                        <p class="active">
                                            Rented Vehicle Income Transaction
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['rv-expenses']" class="nav-link">
                                        <p class="active">
                                            Rented Vehicle Expenses
                                        </p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav nav-treeview">
                                <li class="nav-item has-treeview">
                                    <a [routerLink]="['rve-payment-transaction']" class="nav-link">
                                        <p class="active">
                                            Rented Vehicle Expenses Payment Transaction
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
 * 
 * 
 */