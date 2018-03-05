import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  first_name: string;
  last_name: string;
  phone: string;
  constructor(private contactService: ContactService) { }


  addContact() {
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    };
    this.contactService.addContact(newContact)
    .subscribe(contact => {
      this.contacts.push(contact);
      this.contactService.getContacts()
      .subscribe( contacts =>
      this.contacts = contacts);
    });
  }


  deleteContact(id: any) {
    const contacts = this.contacts;
    this.contactService.deleteContact(id)
    .subscribe(data => {
      // tslint:disable-next-line:triple-equals
      if (data.n == 1) {
        for (let i = 0; i < contacts.length; i++) {
          // tslint:disable-next-line:triple-equals
          if (contacts[i]._id == id) {
            contacts.splice(i, 1);
          }
        }
      }
    });
  }
  ngOnInit() {
    this.contactService.getContacts()
    .subscribe( contacts =>
    this.contacts = contacts);
  }

}
