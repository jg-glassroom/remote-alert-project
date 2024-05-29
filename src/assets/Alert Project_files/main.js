var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
import { bootstrapApplication } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_platform-browser.js?v=478e822e";

// src/app/app.config.ts
import { importProvidersFrom } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { provideRouter } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_router.js?v=478e822e";

// src/app/components/home/home.component.ts
import { Component as Component8, ViewChild as ViewChild5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule7 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { take } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs_operators.js?v=478e822e";

// src/app/components/dialog/dialog.component.ts
import { Component as Component6, Inject as Inject6, inject as inject10, ViewChildren } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { FormsModule as FormsModule6, ReactiveFormsModule as ReactiveFormsModule6, FormControl, FormGroup, Validators as Validators6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import { deleteField } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_firestore.js?v=478e822e";

// src/app/components/form/platforms/dv360-form/dv360-form.component.ts
import { Component, Inject, ViewChild, inject as inject2, Output, EventEmitter, Input } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { Validators, FormsModule, ReactiveFormsModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import { COMMA, ENTER } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_cdk_keycodes.js?v=478e822e";
import { LiveAnnouncer } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_cdk_a11y.js?v=478e822e";
import { SelectionModel } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_cdk_collections.js?v=478e822e";
import { MatAutocompleteModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_autocomplete.js?v=478e822e";
import { MatInputModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import { MatDatepickerModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_datepicker.js?v=478e822e";
import { MatSelectModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import { MatCheckboxModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_checkbox.js?v=478e822e";
import { MatIconModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import { MatChipsModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_chips.js?v=478e822e";
import { MAT_DIALOG_DATA } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import { MatProgressSpinnerModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_progress-spinner.js?v=478e822e";
import { of as of3, firstValueFrom as firstValueFrom2, BehaviorSubject } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import { ToastrService as ToastrService2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import { getAuth as getAuth3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_auth.js?v=478e822e";
import * as i04 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i13 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";

// src/app/services/auth.service.ts
import { Injectable } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { getAuth } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_auth.js?v=478e822e";
import { of } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import { switchMap, first } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs_operators.js?v=478e822e";
import __vite__cjsImport34_moment from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/moment.js?v=478e822e"; const moment = __vite__cjsImport34_moment.__esModule ? __vite__cjsImport34_moment.default : __vite__cjsImport34_moment;
import * as i0 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i1 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_auth.js?v=478e822e";
import * as i2 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
import * as i3 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_router.js?v=478e822e";
var _AuthService = class _AuthService {
  constructor(afAuth, afs, router) {
    this.afAuth = afAuth;
    this.afs = afs;
    this.router = router;
    this.user$ = this.afAuth.authState.pipe(switchMap((user) => {
      if (user) {
        return this.afs.doc(`user/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    }));
  }
  get isAuthenticated() {
    return this.afAuth.currentUser !== null;
  }
  signUp(email, password, username, language) {
    return __async(this, null, function* () {
      try {
        const result = yield this.afAuth.createUserWithEmailAndPassword(email, password);
        return yield this.updateUserData({ displayName: username, uid: result.user.uid, language });
      } catch (error) {
        console.error("An error occurred: ", error);
        throw error;
      }
    });
  }
  emailPasswordSignIn(email, password) {
    return __async(this, null, function* () {
      try {
        yield this.afAuth.signInWithEmailAndPassword(email, password);
        const currentUser = getAuth().currentUser;
        if (!currentUser)
          throw new Error("User not logged in");
        const userRef = this.afs.collection("user").doc(currentUser.uid);
        yield userRef.update({ last_login: moment().format("MM/DD/YYYY HH:mm:ss") });
        const userDoc = this.afs.collection("user").doc(currentUser.uid).valueChanges();
        userDoc.pipe(first()).subscribe((user) => {
          if (user.googleAdsAccessToken) {
            localStorage.setItem("googleAdsAccessToken", user.googleAdsAccessToken);
          }
          if (user.dv360AccessToken) {
            localStorage.setItem("dv360AccessToken", user.dv360AccessToken);
          }
          if (user.facebookAccessToken) {
            localStorage.setItem("facebookAccessToken", user.facebookAccessToken);
          }
          if (user.microsoftAccessToken) {
            localStorage.setItem("microsoftAccessToken", user.microsoftAccessToken);
          }
        });
      } catch (error) {
        console.error("An error occurred: ", error);
        throw error;
      }
    });
  }
  signOut() {
    return __async(this, null, function* () {
      yield this.afAuth.signOut();
      localStorage.clear();
      return this.router.navigate(["/"]);
    });
  }
  updateUserData(user) {
    const userRef = this.afs.doc(`user/${user.uid}`);
    let data = {
      uid: user.uid,
      displayName: user.displayName,
      language: "",
      emailUpdates: false,
      date_created: moment().format("MM/DD/YYYY HH:mm:ss"),
      last_login: moment().format("MM/DD/YYYY HH:mm:ss")
    };
    if (user.language) {
      data.language = user.language;
    }
    return userRef.set(data, { merge: true });
  }
};
_AuthService.\u0275fac = function AuthService_Factory(t) {
  return new (t || _AuthService)(i0.\u0275\u0275inject(i1.AngularFireAuth), i0.\u0275\u0275inject(i2.AngularFirestore), i0.\u0275\u0275inject(i3.Router));
};
_AuthService.\u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;

// src/app/services/external-platforms.service.ts
import { Injectable as Injectable2, inject } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { ToastrService } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import { getAuth as getAuth2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_auth.js?v=478e822e";
import { firstValueFrom, first as first2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import * as i02 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i12 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
import * as i22 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_functions.js?v=478e822e";
var _ExternalPlatformsService = class _ExternalPlatformsService {
  constructor(db, fns) {
    this.db = db;
    this.fns = fns;
    this.toaster = inject(ToastrService);
    this.clientId = "552619214593-qblqi5upvvciqv2ldsftb6kqkj71jiuu.apps.googleusercontent.com";
    this.scope = [
      // DV360
      "https://www.googleapis.com/auth/display-video",
      "https://www.googleapis.com/auth/doubleclickbidmanager",
      // CM360
      "https://www.googleapis.com/auth/dfareporting",
      // Search Ads
      "https://www.googleapis.com/auth/doubleclicksearch"
    ].join(" ");
  }
  refreshGoogleToken(platform) {
    return __async(this, null, function* () {
      const auth = getAuth2();
      const currentUser = auth.currentUser;
      if (!currentUser) {
        console.error("User not logged in");
        return Promise.reject("User not logged in");
      }
      const callable = this.fns.httpsCallable("refreshGoogleAccessToken");
      const userDocRef = this.db.collection("user").doc(currentUser.uid);
      const user = yield firstValueFrom(userDocRef.valueChanges().pipe(first2()));
      try {
        const result = yield firstValueFrom(callable({ refreshToken: user[`${platform}RefreshToken`], platform }));
        if (result && result.access_token) {
          localStorage.setItem(`${platform}AccessToken`, result.access_token);
          yield userDocRef.update({
            [`${platform}AccessToken`]: result.access_token
          });
          console.log(`${platform === "dv360" ? "Display & Video 360" : "Google Ads"} access token refreshed and updated successfully`);
        } else {
          throw new Error("Failed to refresh access token");
        }
      } catch (error) {
        console.error("Error refreshing access token", error);
        return Promise.reject(error);
      }
    });
  }
  handleGoogleError(error, platform) {
    return __async(this, null, function* () {
      if (error.status === 401 || error.status === 403 || error.status === 400) {
        return yield this.refreshGoogleToken(platform);
      } else {
        if (error.status && error.message) {
          console.error(`An unexpected error occurred [${error.status}]: ${error.message}`);
        }
        this.toaster.error("An unexpected error occurred", "Error");
      }
    });
  }
  refreshMicrosoftToken() {
    return __async(this, null, function* () {
      const auth = getAuth2();
      const currentUser = auth.currentUser;
      const hostname = window.location.hostname;
      const redirectUri = hostname === "localhost" ? "https://localhost:4200/integrations/microsoft" : "https://alert-project-xy52mshrpa-nn.a.run.app/integrations/microsoft";
      if (!currentUser) {
        console.error("User not logged in");
        return Promise.reject("User not logged in");
      }
      const callable = this.fns.httpsCallable("refreshMicrosoftAccessToken");
      const userDocRef = this.db.collection("user").doc(currentUser.uid);
      const user = yield firstValueFrom(userDocRef.valueChanges().pipe(first2()));
      try {
        const result = yield firstValueFrom(callable({ refreshToken: user.microsoftRefreshToken, redirectUri }));
        if (result && result.access_token) {
          localStorage.setItem("microsoftAccessToken", result.access_token);
          yield userDocRef.update({
            microsoftAccessToken: result.access_token
          });
          console.log("Microsoft access token refreshed and updated successfully");
        } else {
          throw new Error("Failed to refresh access token");
        }
      } catch (error) {
        console.error("Error refreshing access token", error);
        return Promise.reject(error);
      }
    });
  }
  handleMicrosoftError() {
    return __async(this, null, function* () {
      return yield this.refreshMicrosoftToken();
    });
  }
};
_ExternalPlatformsService.\u0275fac = function ExternalPlatformsService_Factory(t) {
  return new (t || _ExternalPlatformsService)(i02.\u0275\u0275inject(i12.AngularFirestore), i02.\u0275\u0275inject(i22.AngularFireFunctions));
};
_ExternalPlatformsService.\u0275prov = /* @__PURE__ */ i02.\u0275\u0275defineInjectable({ token: _ExternalPlatformsService, factory: _ExternalPlatformsService.\u0275fac, providedIn: "root" });
var ExternalPlatformsService = _ExternalPlatformsService;

// src/app/components/form/platforms/dv360-form/dv360-form.component.ts
import * as i4 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common_http.js?v=478e822e";

// src/app/services/common/common.service.ts
import { Injectable as Injectable3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { of as of2, catchError } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import { startWith, map, switchMap as switchMap2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs_operators.js?v=478e822e";
import * as i03 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
var _CommonService = class _CommonService {
  constructor() {
    this.selectedAccountId = null;
    this.selectedBusinessId = null;
  }
  campaignSelectionValidator() {
    return (control) => {
      const campaigns = control.value;
      return campaigns && campaigns.length > 0 ? null : { "noCampaignSelected": true };
    };
  }
  add(event, campaigns, formGroup, formField) {
    const value = (event.value || "").trim();
    if (value) {
      campaigns.push(value);
    }
    event.chipInput.clear();
    formGroup.get(formField).setValue(null);
  }
  remove(campaign, campaigns, campaigns$, idField, selection, announcer) {
    const index = campaigns.indexOf(campaign);
    if (index >= 0) {
      campaigns.splice(index, 1);
      selection.deselect(campaign);
      campaign.selected = false;
      campaigns$.forEach((c) => {
        let campaignToUpdate = c.find((cc) => cc[idField] === campaign[idField]);
        campaignToUpdate.selected = false;
        if (c[idField] === campaign[idField]) {
          c.selected = false;
        }
      });
      announcer.announce(`Removed ${campaign}`);
    }
  }
  removeCampaignFromChips(campaigns, campaign, searchField) {
    const index = campaigns.findIndex((c) => c[searchField] === campaign[searchField]);
    if (index >= 0) {
      campaigns.splice(index, 1);
    }
  }
  addCampaignToChips(campaigns, campaign, formField, searchField, formGroup, campaignInput) {
    if (!campaigns.some((c) => c[searchField] === campaign[searchField])) {
      campaigns.push(campaign);
    }
    if (campaignInput && campaignInput.nativeElement) {
      campaignInput.nativeElement.value = "";
    }
    formGroup.get(formField).setValue(null);
  }
  toggleSelection(campaigns, campaign, formField, searchField, formGroup, selection, campaignInput) {
    if (selection.isSelected(campaign)) {
      selection.deselect(campaign);
      this.removeCampaignFromChips(campaigns, campaign, searchField);
      campaign.selected = false;
    } else {
      selection.select(campaign);
      this.addCampaignToChips(campaigns, campaign, formField, searchField, formGroup, campaignInput);
      campaign.selected = true;
    }
    formGroup.patchValue({
      [formField]: campaigns
    });
  }
  truncateName(string, num) {
    var name = string;
    if (name.length > num) {
      return name.slice(0, num) + "...";
    } else {
      return name;
    }
  }
  selected(event, campaigns, formGroup, formField, selection, announcer, campaignInput) {
    const selectedCampaign = event.option.value;
    const index = campaigns.findIndex((campaign) => campaign === selectedCampaign);
    if (selection.isSelected(selectedCampaign)) {
      selection.deselect(selectedCampaign);
    } else {
      selection.select(selectedCampaign);
    }
    event.option.deselect();
    event.option._getHostElement().blur();
    if (index >= 0) {
      campaigns.splice(index, 1);
      announcer.announce(`Removed ${selectedCampaign.displayName}`);
    } else {
      campaigns.push(selectedCampaign);
      announcer.announce(`Added ${selectedCampaign.displayName}`);
    }
    if (campaignInput && campaignInput.nativeElement) {
      campaignInput.nativeElement.value = "";
    }
    formGroup.get(formField).setValue(null);
  }
  isValidDate() {
    return (control) => {
      const isValid = !isNaN(Date.parse(control.value));
      return isValid ? null : { invalidDate: "The date is not valid." };
    };
  }
  startDateBeforeEndDate(startDateControl) {
    return (endDateControl) => {
      if (!startDateControl.value || !endDateControl.value) {
        return null;
      }
      const start = new Date(startDateControl.value);
      const end = new Date(endDateControl.value);
      return start <= end ? null : { dateMismatch: "Start date must be before end date." };
    };
  }
  formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }
  setupFilteringWithRetry(formGroup, formField, searchField, cachedData) {
    return formGroup.get(formField).valueChanges.pipe(startWith(""), map((value) => typeof value === "string" ? value.toLowerCase() : ""), switchMap2((name) => this.filterElements(name, searchField, cachedData)), catchError((error) => {
      console.error(error);
      this.setupFilteringWithRetry(formGroup, formField, searchField, cachedData);
      return of2([]);
    }));
  }
  filterElements(filterValue, searchField, cachedData) {
    if (!cachedData) {
      return of2([]);
    }
    try {
      const data = JSON.parse(cachedData);
      return of2(data.filter((element) => element[searchField].toLowerCase().includes(filterValue)));
    } catch (error) {
      console.error("Failed to parse JSON:", error);
      return of2([]);
    }
  }
  setupFiltering(formGroup, formField, originalObservable, filterSearchField) {
    return formGroup.get(formField).valueChanges.pipe(startWith(""), map((value) => typeof value === "string" ? value.toLowerCase() : ""), switchMap2((name) => this.filterElement(name, originalObservable, filterSearchField)));
  }
  filterElement(filterValue, observable, searchField) {
    return observable.pipe(map((elements) => elements.filter((element) => element[searchField].toLowerCase().includes(filterValue))));
  }
  validateAllFormFields(formGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
      control.updateValueAndValidity();
    });
  }
  isConnected(platform) {
    if (platform === "googleAds") {
      return !!localStorage.getItem("googleAdsAccessToken");
    } else if (platform === "dv360") {
      return !!localStorage.getItem("dv360AccessToken");
    } else if (platform === "facebook") {
      return !!localStorage.getItem("facebookAccessToken");
    } else if (platform === "bing") {
      return !!localStorage.getItem("microsoftAccessToken");
    } else {
      return false;
    }
  }
};
_CommonService.\u0275fac = function CommonService_Factory(t) {
  return new (t || _CommonService)();
};
_CommonService.\u0275prov = /* @__PURE__ */ i03.\u0275\u0275defineInjectable({ token: _CommonService, factory: _CommonService.\u0275fac, providedIn: "root" });
var CommonService = _CommonService;

// src/app/components/form/platforms/dv360-form/dv360-form.component.ts
import * as i6 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i7 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_autocomplete.js?v=478e822e";
import * as i8 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_core.js?v=478e822e";
import * as i9 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import * as i10 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import * as i11 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_datepicker.js?v=478e822e";
import * as i122 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_progress-spinner.js?v=478e822e";
import * as i132 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import * as i14 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import * as i15 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_checkbox.js?v=478e822e";
import * as i16 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_chips.js?v=478e822e";
var _c0 = ["campaignInput"];
var _c1 = ["IOInput"];
function Dv360FormComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "div", 35);
    i04.\u0275\u0275element(1, "mat-spinner");
    i04.\u0275\u0275elementEnd();
  }
}
function Dv360FormComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275text(1, " The field is required ");
    i04.\u0275\u0275elementEnd();
  }
}
function Dv360FormComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275text(1, " The field is required ");
    i04.\u0275\u0275elementEnd();
  }
}
function Dv360FormComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-option", 36);
    i04.\u0275\u0275text(1);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const partner_r2 = ctx.$implicit;
    i04.\u0275\u0275property("value", partner_r2);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275textInterpolate1(" ", partner_r2.displayName, " ");
  }
}
function Dv360FormComponent_mat_error_34_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275text(1, " The field is required ");
    i04.\u0275\u0275elementEnd();
  }
}
function Dv360FormComponent_mat_option_37_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-option", 36);
    i04.\u0275\u0275text(1);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const advertiser_r3 = ctx.$implicit;
    i04.\u0275\u0275property("value", advertiser_r3);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275textInterpolate1(" ", advertiser_r3.displayName, " ");
  }
}
function Dv360FormComponent_mat_chip_row_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i04.\u0275\u0275getCurrentView();
    i04.\u0275\u0275elementStart(0, "mat-chip-row", 37);
    i04.\u0275\u0275listener("removed", function Dv360FormComponent_mat_chip_row_45_Template_mat_chip_row_removed_0_listener() {
      const campaign_r5 = i04.\u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = i04.\u0275\u0275nextContext();
      return i04.\u0275\u0275resetView(ctx_r5.removeCampaign(campaign_r5, ctx_r5.campaigns, ctx_r5.selection, ctx_r5.announcer));
    });
    i04.\u0275\u0275elementStart(1, "span");
    i04.\u0275\u0275text(2);
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(3, "button", 38)(4, "mat-icon");
    i04.\u0275\u0275text(5, "cancel");
    i04.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const campaign_r5 = ctx.$implicit;
    const ctx_r5 = i04.\u0275\u0275nextContext();
    i04.\u0275\u0275advance(2);
    i04.\u0275\u0275textInterpolate(ctx_r5.combineAndTruncateName(campaign_r5, 25));
    i04.\u0275\u0275advance();
    i04.\u0275\u0275attribute("aria-label", "remove " + campaign_r5.displayName);
  }
}
function Dv360FormComponent_mat_option_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = i04.\u0275\u0275getCurrentView();
    i04.\u0275\u0275elementStart(0, "mat-option", 36)(1, "mat-checkbox", 39);
    i04.\u0275\u0275listener("click", function Dv360FormComponent_mat_option_50_Template_mat_checkbox_click_1_listener($event) {
      const campaign_r9 = i04.\u0275\u0275restoreView(_r8).$implicit;
      const ctx_r5 = i04.\u0275\u0275nextContext();
      const campaignInput_r7 = i04.\u0275\u0275reference(47);
      return i04.\u0275\u0275resetView(ctx_r5.selectCampaign($event, ctx_r5.campaigns, campaign_r9, ctx_r5.formGroup, ctx_r5.selection, campaignInput_r7));
    });
    i04.\u0275\u0275text(2);
    i04.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const campaign_r9 = ctx.$implicit;
    i04.\u0275\u0275property("value", campaign_r9);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("checked", campaign_r9.selected);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275textInterpolate2(" ", campaign_r9.displayName, " | ", campaign_r9.campaignId, " ");
  }
}
function Dv360FormComponent_mat_hint_52_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-hint")(1, "span", 40);
    i04.\u0275\u0275text(2, "At least one campaign must be selected");
    i04.\u0275\u0275elementEnd()();
  }
}
function Dv360FormComponent_mat_chip_row_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = i04.\u0275\u0275getCurrentView();
    i04.\u0275\u0275elementStart(0, "mat-chip-row", 37);
    i04.\u0275\u0275listener("removed", function Dv360FormComponent_mat_chip_row_58_Template_mat_chip_row_removed_0_listener() {
      const IO_r11 = i04.\u0275\u0275restoreView(_r10).$implicit;
      const ctx_r5 = i04.\u0275\u0275nextContext();
      return i04.\u0275\u0275resetView(ctx_r5.removeIO(IO_r11, ctx_r5.IOs, ctx_r5.selectionIO, ctx_r5.announcerIO));
    });
    i04.\u0275\u0275elementStart(1, "span");
    i04.\u0275\u0275text(2);
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(3, "button", 38)(4, "mat-icon");
    i04.\u0275\u0275text(5, "cancel");
    i04.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const IO_r11 = ctx.$implicit;
    const ctx_r5 = i04.\u0275\u0275nextContext();
    i04.\u0275\u0275advance(2);
    i04.\u0275\u0275textInterpolate(ctx_r5.combineAndTruncateName(IO_r11, 25));
    i04.\u0275\u0275advance();
    i04.\u0275\u0275attribute("aria-label", "remove " + IO_r11.displayName);
  }
}
function Dv360FormComponent_mat_option_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = i04.\u0275\u0275getCurrentView();
    i04.\u0275\u0275elementStart(0, "mat-option", 36)(1, "mat-checkbox", 39);
    i04.\u0275\u0275listener("click", function Dv360FormComponent_mat_option_63_Template_mat_checkbox_click_1_listener($event) {
      const IO_r14 = i04.\u0275\u0275restoreView(_r13).$implicit;
      const ctx_r5 = i04.\u0275\u0275nextContext();
      const IOInput_r12 = i04.\u0275\u0275reference(60);
      return i04.\u0275\u0275resetView(ctx_r5.selectIO($event, ctx_r5.IOs, IO_r14, ctx_r5.formGroup, ctx_r5.selectionIO, IOInput_r12));
    });
    i04.\u0275\u0275text(2);
    i04.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const IO_r14 = ctx.$implicit;
    i04.\u0275\u0275property("value", IO_r14);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("checked", IO_r14.selected);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275textInterpolate2(" ", IO_r14.displayName, " | ", IO_r14.campaignId, " ");
  }
}
function Dv360FormComponent_mat_error_75_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275text(1, " This field is required. ");
    i04.\u0275\u0275elementEnd();
  }
}
function Dv360FormComponent_mat_error_76_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275text(1, " Please enter a valid date. ");
    i04.\u0275\u0275elementEnd();
  }
}
function Dv360FormComponent_mat_error_86_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275text(1, " This field is required. ");
    i04.\u0275\u0275elementEnd();
  }
}
function Dv360FormComponent_mat_error_87_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275text(1, " Please enter a valid date. ");
    i04.\u0275\u0275elementEnd();
  }
}
function Dv360FormComponent_mat_error_88_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275text(1, " End date must be after or equal to start date. ");
    i04.\u0275\u0275elementEnd();
  }
}
function Dv360FormComponent_mat_error_94_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275text(1, " The field is required ");
    i04.\u0275\u0275elementEnd();
  }
}
function Dv360FormComponent_mat_error_95_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "mat-error");
    i04.\u0275\u0275text(1, " Please enter a valid number ");
    i04.\u0275\u0275elementEnd();
  }
}
var _Dv360FormComponent = class _Dv360FormComponent {
  constructor(formBuilder, auth, externalPlatforms, data, http, platformsCommon) {
    this.formBuilder = formBuilder;
    this.auth = auth;
    this.externalPlatforms = externalPlatforms;
    this.data = data;
    this.http = http;
    this.platformsCommon = platformsCommon;
    this.platformChange = new EventEmitter();
    this.platformIndex = 0;
    this.submitted = false;
    this.isEditMode = false;
    this.documentId = null;
    this.toaster = inject2(ToastrService2);
    this.isLoading = false;
    this.partners = [];
    this.partnersSubject = new BehaviorSubject([]);
    this.partners$ = this.partnersSubject.asObservable();
    this.campaigns = [];
    this.IOs = [];
    this.separatorKeysCodes = [ENTER, COMMA];
    this.selection = new SelectionModel(true, []);
    this.selectionIO = new SelectionModel(true, []);
    this.announcer = inject2(LiveAnnouncer);
    this.announcerIO = inject2(LiveAnnouncer);
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.documentId = data.id;
    }
  }
  get form() {
    return this.formGroup ? this.formGroup.controls : {};
  }
  combineAndTruncateName(campaign, num) {
    const combinedName = `${campaign.displayName} | ${campaign.campaignId}`;
    return this.platformsCommon.truncateName(combinedName, num);
  }
  selectCampaign(event, campaigns, campaign, formGroup, selection, campaignInput) {
    event.stopPropagation();
    this.platformsCommon.toggleSelection(campaigns, campaign, "dv360CampaignId", "campaignId", formGroup, selection, campaignInput);
    this.filterIOsByCampaigns();
  }
  removeCampaign(campaign, campaigns, selection, announcer) {
    this.platformsCommon.remove(campaign, campaigns, this.campaigns$, "campaignId", selection, announcer);
    this.filterIOsByCampaigns();
  }
  selectIO(event, IOs, IO, formGroup, selection, IOInput) {
    event.stopPropagation();
    this.platformsCommon.toggleSelection(IOs, IO, "dv360IO", "insertionOrderId", formGroup, selection, IOInput);
  }
  removeIO(IO, IOs, selection, announcer) {
    this.platformsCommon.remove(IO, IOs, this.IOs$, "insertionOrderId", selection, announcer);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (this.isEditMode && this.data.platforms[this.platformIndex]) {
        this.data = this.data.platforms[this.platformIndex].formData;
      }
      this.createForm();
      yield this.getDV360Partner();
    });
  }
  displayFn(dv360Partner) {
    return dv360Partner && dv360Partner.displayName ? dv360Partner.displayName : "";
  }
  createForm() {
    return __async(this, null, function* () {
      this.formGroup = this.formBuilder.group({
        dv360Label: [this.data?.dv360Label || null],
        dv360Partner: [this.data?.dv360Partner || null, [Validators.required]],
        dv360Platform: ["dv360", [Validators.required]],
        dv360Advertiser: [this.data?.dv360Advertiser || null, [Validators.required]],
        dv360IO: [this.data?.dv360IO || []],
        dv360CampaignId: [this.data?.dv360CampaignId || [], [Validators.required, this.platformsCommon.campaignSelectionValidator()]],
        dv360StartDate: [this.data?.dv360StartDate ? new Date(this.data.dv360StartDate) : null, [Validators.required, this.platformsCommon.isValidDate()]],
        dv360EndDate: [this.data?.dv360EndDate ? new Date(this.data.dv360EndDate) : null, [Validators.required, this.platformsCommon.isValidDate()]],
        dv360Budget: [this.data?.dv360Budget || null, [Validators.required, Validators.pattern(/^\d+\.?\d*$/)]]
      });
      const startDateControl = this.formGroup.get("dv360StartDate");
      const endDateControl = this.formGroup.get("dv360EndDate");
      if (startDateControl && endDateControl) {
        endDateControl.setValidators([
          ...endDateControl.validator ? [endDateControl.validator] : [],
          this.platformsCommon.startDateBeforeEndDate(startDateControl)
        ]);
        endDateControl.updateValueAndValidity();
      }
      if (this.isEditMode) {
        yield this.getDV360Partner();
        this.getDV360Advertiser(void 0, true);
        this.getDV360Campaign(void 0, true);
      }
    });
  }
  getDV360Partner(retryCount = 2) {
    return __async(this, null, function* () {
      this.isLoading = true;
      const cachedData = localStorage.getItem("partners");
      if (cachedData) {
        this.partners = JSON.parse(cachedData);
        this.partnersSubject.next(this.partners);
        this.isLoading = false;
        this.partners$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, "dv360Partner", "displayName", localStorage.getItem("partners"));
        return this.partners;
      }
      const headers = { "Authorization": `Bearer ${localStorage.getItem("dv360AccessToken")}` };
      try {
        const response$ = this.http.get("https://displayvideo.googleapis.com/v3/partners", { headers });
        const data = yield firstValueFrom2(response$);
        const sortedPartners = data.partners.sort((a, b) => a.displayName.localeCompare(b.displayName));
        this.partners = sortedPartners;
        this.partnersSubject.next(sortedPartners);
        localStorage.setItem("partners", JSON.stringify(data.partners));
        this.partnersSubject.next(data.partners);
        this.isLoading = false;
        this.partners$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, "dv360Partner", "displayName", localStorage.getItem("partners"));
      } catch (error) {
        if (retryCount > 0) {
          yield this.externalPlatforms.handleGoogleError(error, "dv360");
          return this.getDV360Partner(retryCount - 1);
        } else {
          console.error(error);
          this.toaster.error("An error occurred while fetching partners", "Error");
          this.isLoading = false;
        }
      }
    });
  }
  getDV360Advertiser(event, edit, retryCount = 2) {
    return __async(this, null, function* () {
      this.isLoading = true;
      let selectedPartner = null;
      if (event) {
        selectedPartner = event.option.value;
      } else {
        selectedPartner = this.data?.dv360Partner;
      }
      if (!selectedPartner) {
        this.isLoading = false;
        return;
      }
      if (!edit) {
        this.formGroup.patchValue({
          dv360CampaignId: [],
          dv360IO: [],
          dv360Advertiser: null,
          dv360StartDate: null,
          dv360EndDate: null,
          dv360Budget: null
        });
        this.campaigns = [];
        this.IOs = [];
      }
      const headers = { "Authorization": `Bearer ${localStorage.getItem("dv360AccessToken")}` };
      try {
        const response$ = this.http.get(`https://displayvideo.googleapis.com/v3/advertisers?partnerId=${selectedPartner.partnerId}`, { headers });
        const data = yield firstValueFrom2(response$);
        const storedData = localStorage.getItem("partners");
        const partnersData = storedData ? JSON.parse(storedData) : { advertisers: {} };
        localStorage.setItem("selectedPartner", selectedPartner.partnerId);
        partnersData.forEach((dv360Partner) => {
          if (dv360Partner.partnerId === selectedPartner.partnerId) {
            const sortedAdvertisers = data.advertisers.sort((a, b) => a.displayName.localeCompare(b.displayName));
            dv360Partner.advertisers = sortedAdvertisers;
            this.advertisers$ = of3(dv360Partner.advertisers);
            this.originalAdvertisers$ = of3(dv360Partner.advertisers);
            this.advertisers$ = this.platformsCommon.setupFiltering(this.formGroup, "dv360Advertiser", this.originalAdvertisers$, "displayName");
          }
        });
        localStorage.setItem("partners", JSON.stringify(partnersData));
        if (edit) {
          yield this.getDV360Campaign(void 0, true);
        } else {
          this.isLoading = false;
        }
      } catch (error) {
        if (retryCount > 0) {
          yield this.externalPlatforms.handleGoogleError(error, "dv360");
          return this.getDV360Advertiser(event, edit, retryCount - 1);
        } else {
          console.error(error);
          this.toaster.error("An error occurred while fetching advertisers", "Error");
          this.isLoading = false;
        }
      }
    });
  }
  getDV360IO(advertiserId) {
    return __async(this, null, function* () {
      const headers = { "Authorization": `Bearer ${localStorage.getItem("dv360AccessToken")}` };
      try {
        const response$ = this.http.get(`https://displayvideo.googleapis.com/v3/advertisers/${advertiserId}/insertionOrders`, { headers });
        const data = yield firstValueFrom2(response$);
        this.originalIOs$ = of3(data.insertionOrders);
        yield this.filterIOsByCampaigns();
        if (this.isEditMode) {
          this.updateIOSelectionInEditMode();
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        throw new Error(error);
      }
    });
  }
  updateIOSelectionInEditMode() {
    this.IOs$.subscribe((IOs) => {
      const uniqueIOs = /* @__PURE__ */ new Set();
      const selectedIOs = this.data?.dv360IO || [];
      this.IOs = IOs.filter((IO) => {
        if (!uniqueIOs.has(IO.insertionOrderId) && selectedIOs.some((selectedIO) => selectedIO.insertionOrderId === IO.insertionOrderId)) {
          uniqueIOs.add(IO.insertionOrderId);
          IO.selected = true;
          this.selectionIO.select(IO);
          return true;
        }
        return false;
      });
    });
  }
  filterIOsByCampaigns() {
    return __async(this, null, function* () {
      const selectedCampaignIds = this.campaigns.filter((c) => c.selected).map((campaign) => campaign.campaignId);
      this.originalIOs$.subscribe((originalIOs) => {
        const filteredIOs = originalIOs.filter((io) => selectedCampaignIds.includes(io.campaignId));
        const sortedIOs = filteredIOs.sort((a, b) => a.displayName.localeCompare(b.displayName));
        this.IOs$ = of3(sortedIOs);
        this.IOs.forEach((io) => {
          if (!selectedCampaignIds.includes(io.campaignId)) {
            this.selectionIO.deselect(io);
            io.selected = false;
          }
        });
        this.IOs = this.IOs.filter((io) => selectedCampaignIds.includes(io.campaignId));
      });
    });
  }
  getDV360Campaign(event, edit, retryCount = 2) {
    return __async(this, null, function* () {
      this.isLoading = true;
      let selectedAdvertiser = null;
      if (event) {
        selectedAdvertiser = event.option.value;
      } else {
        selectedAdvertiser = this.data?.dv360Advertiser;
      }
      if (!selectedAdvertiser) {
        this.isLoading = false;
        return;
      }
      if (!edit) {
        this.formGroup.patchValue({
          dv360CampaignId: [],
          dv360IO: [],
          dv360StartDate: null,
          dv360EndDate: null,
          dv360Budget: null
        });
        this.campaigns = [];
        this.IOs = [];
      } else {
        this.campaigns = this.data?.dv360CampaignId;
        this.IOs = this.data?.dv360IO;
      }
      const headers = { "Authorization": `Bearer ${localStorage.getItem("dv360AccessToken")}` };
      try {
        const response$ = this.http.get(`https://displayvideo.googleapis.com/v3/advertisers/${selectedAdvertiser.advertiserId}/campaigns`, { headers });
        const data = yield firstValueFrom2(response$);
        const storedData = localStorage.getItem("partners");
        const partnersData = storedData ? JSON.parse(storedData) : { advertisers: {} };
        partnersData.forEach((dv360Partner) => {
          if (dv360Partner.partnerId === localStorage.getItem("selectedPartner") && dv360Partner.advertisers && dv360Partner.advertisers.length > 0) {
            dv360Partner.advertisers.forEach((dv360Advertiser) => {
              if (dv360Advertiser.advertiserId === selectedAdvertiser.advertiserId) {
                const sortedCampaigns = data.campaigns.sort((a, b) => a.displayName.localeCompare(b.displayName));
                dv360Advertiser.campaigns = sortedCampaigns;
                this.campaigns$ = of3(dv360Advertiser.campaigns);
                this.originalCampaigns$ = of3(dv360Advertiser.campaigns);
                this.campaigns$ = this.platformsCommon.setupFiltering(this.formGroup, "dv360CampaignId", this.originalCampaigns$, "displayName");
              }
            });
          }
        });
        localStorage.setItem("partners", JSON.stringify(partnersData));
        if (edit) {
          const campaigns = data.campaigns.map((campaign) => {
            const isSelected = this.campaigns.some((selectedCampaign) => selectedCampaign.campaignId === campaign.campaignId);
            return __spreadProps(__spreadValues({}, campaign), {
              selected: isSelected
            });
          });
          this.campaigns$ = of3(campaigns);
          this.originalCampaigns$ = of3(campaigns);
        }
        yield this.getDV360IO(selectedAdvertiser.advertiserId);
      } catch (error) {
        if (retryCount > 0) {
          yield this.externalPlatforms.handleGoogleError(error, "dv360");
          return this.getDV360Campaign(event, edit, retryCount - 1);
        } else {
          console.error(error);
          this.toaster.error("An error occurred while fetching campaigns", "Error");
          this.isLoading = false;
        }
      }
    });
  }
  getFormData() {
    if (this.formGroup.valid) {
      const user = getAuth3().currentUser;
      if (user) {
        const formData = __spreadProps(__spreadValues({}, this.formGroup.value), {
          dv360StartDate: this.platformsCommon.formatDate(this.formGroup.value.dv360StartDate),
          dv360EndDate: this.platformsCommon.formatDate(this.formGroup.value.dv360EndDate),
          userId: user.uid
        });
        return formData;
      } else {
        throw new Error("User not logged in");
      }
    } else {
      this.platformsCommon.validateAllFormFields(this.formGroup);
      return null;
    }
  }
  refreshData() {
    localStorage.removeItem("partners");
    localStorage.removeItem("selectedPartner");
    this.formGroup.patchValue({
      dv360Partner: null,
      dv360Advertiser: null,
      dv360StartDate: null,
      dv360EndDate: null,
      dv360Budget: null,
      dv360CampaignId: [],
      dv360IO: []
    });
    this.advertisers$ = of3([]);
    this.originalAdvertisers$ = of3([]);
    this.originalCampaigns$ = of3([]);
    this.campaigns$ = of3([]);
    this.campaigns = [];
    this.IOs$ = of3([]);
    this.IOs = [];
    this.originalIOs$ = of3([]);
    this.selectionIO.clear();
    this.selection.clear();
  }
  changePlatform(newPlatform) {
    this.platformChange.emit(newPlatform);
  }
};
_Dv360FormComponent.\u0275fac = function Dv360FormComponent_Factory(t) {
  return new (t || _Dv360FormComponent)(i04.\u0275\u0275directiveInject(i13.FormBuilder), i04.\u0275\u0275directiveInject(AuthService), i04.\u0275\u0275directiveInject(ExternalPlatformsService), i04.\u0275\u0275directiveInject(MAT_DIALOG_DATA), i04.\u0275\u0275directiveInject(i4.HttpClient), i04.\u0275\u0275directiveInject(CommonService));
};
_Dv360FormComponent.\u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _Dv360FormComponent, selectors: [["app-dv360-form"]], viewQuery: function Dv360FormComponent_Query(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275viewQuery(_c0, 5);
    i04.\u0275\u0275viewQuery(_c1, 5);
  }
  if (rf & 2) {
    let _t;
    i04.\u0275\u0275queryRefresh(_t = i04.\u0275\u0275loadQuery()) && (ctx.campaignInput = _t.first);
    i04.\u0275\u0275queryRefresh(_t = i04.\u0275\u0275loadQuery()) && (ctx.IOInput = _t.first);
  }
}, inputs: { platformIndex: "platformIndex" }, outputs: { platformChange: "platformChange" }, standalone: true, features: [i04.\u0275\u0275StandaloneFeature], decls: 97, vars: 41, consts: [["partnersAuto", "matAutocomplete"], ["advertisersAuto", "matAutocomplete"], ["chipGrid", ""], ["campaignInput", ""], ["campaignsAuto", "matAutocomplete"], ["chipGridIO", ""], ["IOInput", ""], ["IOsAuto", "matAutocomplete"], ["startPicker", ""], ["endPicker", ""], ["class", "loader-overlay", 4, "ngIf"], [1, "form", 3, "formGroup"], [1, "form-row"], [1, "form-element"], ["formControlName", "dv360Platform", 3, "selectionChange"], ["value", "dv360", "disabled", ""], ["value", "facebook"], ["value", "googleAds"], ["value", "bing"], [4, "ngIf"], ["matInput", "", "formControlName", "dv360Label"], ["type", "text", "placeholder", "Select your partner", "formControlName", "dv360Partner", "aria-label", "partner", "matInput", "", 3, "matAutocomplete"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Select your advertiser", "formControlName", "dv360Advertiser", "aria-label", "advertiser", "matInput", "", 3, "matAutocomplete"], ["aria-label", "Campaign Selection"], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Select your campaigns", "formControlName", "dv360CampaignId", 3, "matChipInputTokenEnd", "matChipInputFor", "matAutocomplete", "matChipInputSeparatorKeyCodes"], [3, "optionSelected"], ["aria-label", "IO Selection"], ["placeholder", "Select your IOs", "formControlName", "dv360IO", 3, "matChipInputTokenEnd", "matChipInputFor", "matAutocomplete", "matChipInputSeparatorKeyCodes"], ["matInput", "", "formControlName", "dv360StartDate", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["matInput", "", "formControlName", "dv360EndDate", 3, "matDatepicker"], ["matInput", "", "formControlName", "dv360Budget"], [1, "loader-overlay"], [3, "value"], [3, "removed"], ["matChipRemove", "", 1, "mat-chip-remove"], [3, "click", "checked"], [1, "mat-error"]], template: function Dv360FormComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i04.\u0275\u0275getCurrentView();
    i04.\u0275\u0275template(0, Dv360FormComponent_div_0_Template, 2, 0, "div", 10);
    i04.\u0275\u0275elementStart(1, "form", 11)(2, "div", 12)(3, "mat-form-field", 13)(4, "mat-label");
    i04.\u0275\u0275text(5, "Platform");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(6, "mat-select", 14);
    i04.\u0275\u0275listener("selectionChange", function Dv360FormComponent_Template_mat_select_selectionChange_6_listener($event) {
      i04.\u0275\u0275restoreView(_r1);
      return i04.\u0275\u0275resetView(ctx.changePlatform($event.value));
    });
    i04.\u0275\u0275elementStart(7, "mat-option", 15);
    i04.\u0275\u0275text(8, "Display & Video 360");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(9, "mat-option", 16);
    i04.\u0275\u0275text(10, "Facebook");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(11, "mat-option", 17);
    i04.\u0275\u0275text(12, "Google Ads");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(13, "mat-option", 18);
    i04.\u0275\u0275text(14, "Bing");
    i04.\u0275\u0275elementEnd()();
    i04.\u0275\u0275template(15, Dv360FormComponent_mat_error_15_Template, 2, 0, "mat-error", 19);
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(16, "mat-form-field", 13)(17, "mat-label");
    i04.\u0275\u0275text(18, "Label");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275element(19, "input", 20);
    i04.\u0275\u0275elementEnd()();
    i04.\u0275\u0275elementStart(20, "div", 12)(21, "mat-form-field", 13)(22, "mat-label");
    i04.\u0275\u0275text(23, "Partner");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275element(24, "input", 21);
    i04.\u0275\u0275template(25, Dv360FormComponent_mat_error_25_Template, 2, 0, "mat-error", 19);
    i04.\u0275\u0275elementStart(26, "mat-autocomplete", 22, 0);
    i04.\u0275\u0275listener("optionSelected", function Dv360FormComponent_Template_mat_autocomplete_optionSelected_26_listener($event) {
      i04.\u0275\u0275restoreView(_r1);
      return i04.\u0275\u0275resetView(ctx.getDV360Advertiser($event));
    });
    i04.\u0275\u0275template(28, Dv360FormComponent_mat_option_28_Template, 2, 2, "mat-option", 23);
    i04.\u0275\u0275pipe(29, "async");
    i04.\u0275\u0275elementEnd()();
    i04.\u0275\u0275elementStart(30, "mat-form-field", 13)(31, "mat-label");
    i04.\u0275\u0275text(32, "Advertiser");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275element(33, "input", 24);
    i04.\u0275\u0275template(34, Dv360FormComponent_mat_error_34_Template, 2, 0, "mat-error", 19);
    i04.\u0275\u0275elementStart(35, "mat-autocomplete", 22, 1);
    i04.\u0275\u0275listener("optionSelected", function Dv360FormComponent_Template_mat_autocomplete_optionSelected_35_listener($event) {
      i04.\u0275\u0275restoreView(_r1);
      return i04.\u0275\u0275resetView(ctx.getDV360Campaign($event));
    });
    i04.\u0275\u0275template(37, Dv360FormComponent_mat_option_37_Template, 2, 2, "mat-option", 23);
    i04.\u0275\u0275pipe(38, "async");
    i04.\u0275\u0275elementEnd()()();
    i04.\u0275\u0275elementStart(39, "div", 12)(40, "mat-form-field", 13)(41, "mat-label");
    i04.\u0275\u0275text(42, "Campaign*");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(43, "mat-chip-grid", 25, 2);
    i04.\u0275\u0275template(45, Dv360FormComponent_mat_chip_row_45_Template, 6, 2, "mat-chip-row", 26);
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(46, "input", 27, 3);
    i04.\u0275\u0275listener("matChipInputTokenEnd", function Dv360FormComponent_Template_input_matChipInputTokenEnd_46_listener($event) {
      i04.\u0275\u0275restoreView(_r1);
      return i04.\u0275\u0275resetView(ctx.platformsCommon.add($event, ctx.campaigns, ctx.formGroup, "dv360CampaignId"));
    });
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(48, "mat-autocomplete", 28, 4);
    i04.\u0275\u0275listener("optionSelected", function Dv360FormComponent_Template_mat_autocomplete_optionSelected_48_listener($event) {
      i04.\u0275\u0275restoreView(_r1);
      const campaignInput_r7 = i04.\u0275\u0275reference(47);
      return i04.\u0275\u0275resetView(ctx.selectCampaign($event, ctx.campaigns, ctx.formGroup, ctx.selection, ctx.announcer, campaignInput_r7));
    });
    i04.\u0275\u0275template(50, Dv360FormComponent_mat_option_50_Template, 3, 4, "mat-option", 23);
    i04.\u0275\u0275pipe(51, "async");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275template(52, Dv360FormComponent_mat_hint_52_Template, 3, 0, "mat-hint", 19);
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(53, "mat-form-field", 13)(54, "mat-label");
    i04.\u0275\u0275text(55, "IOs");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(56, "mat-chip-grid", 29, 5);
    i04.\u0275\u0275template(58, Dv360FormComponent_mat_chip_row_58_Template, 6, 2, "mat-chip-row", 26);
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(59, "input", 30, 6);
    i04.\u0275\u0275listener("matChipInputTokenEnd", function Dv360FormComponent_Template_input_matChipInputTokenEnd_59_listener($event) {
      i04.\u0275\u0275restoreView(_r1);
      return i04.\u0275\u0275resetView(ctx.platformsCommon.add($event, ctx.IOs, ctx.formGroup, "dv360IO"));
    });
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(61, "mat-autocomplete", 28, 7);
    i04.\u0275\u0275listener("optionSelected", function Dv360FormComponent_Template_mat_autocomplete_optionSelected_61_listener($event) {
      i04.\u0275\u0275restoreView(_r1);
      const IOInput_r12 = i04.\u0275\u0275reference(60);
      return i04.\u0275\u0275resetView(ctx.selectIO($event, ctx.IOs, ctx.formGroup, ctx.selectionIO, ctx.announcerIO, IOInput_r12));
    });
    i04.\u0275\u0275template(63, Dv360FormComponent_mat_option_63_Template, 3, 4, "mat-option", 23);
    i04.\u0275\u0275pipe(64, "async");
    i04.\u0275\u0275elementEnd()()();
    i04.\u0275\u0275elementStart(65, "div", 12)(66, "mat-form-field", 13)(67, "mat-label");
    i04.\u0275\u0275text(68, "Start Date");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275element(69, "input", 31);
    i04.\u0275\u0275elementStart(70, "mat-hint");
    i04.\u0275\u0275text(71, "MM/DD/YYYY");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275element(72, "mat-datepicker-toggle", 32)(73, "mat-datepicker", null, 8);
    i04.\u0275\u0275template(75, Dv360FormComponent_mat_error_75_Template, 2, 0, "mat-error", 19)(76, Dv360FormComponent_mat_error_76_Template, 2, 0, "mat-error", 19);
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275elementStart(77, "mat-form-field", 13)(78, "mat-label");
    i04.\u0275\u0275text(79, "End Date*");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275element(80, "input", 33);
    i04.\u0275\u0275elementStart(81, "mat-hint");
    i04.\u0275\u0275text(82, "MM/DD/YYYY");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275element(83, "mat-datepicker-toggle", 32)(84, "mat-datepicker", null, 9);
    i04.\u0275\u0275template(86, Dv360FormComponent_mat_error_86_Template, 2, 0, "mat-error", 19)(87, Dv360FormComponent_mat_error_87_Template, 2, 0, "mat-error", 19)(88, Dv360FormComponent_mat_error_88_Template, 2, 0, "mat-error", 19);
    i04.\u0275\u0275elementEnd()();
    i04.\u0275\u0275elementStart(89, "div", 12)(90, "mat-form-field", 13)(91, "mat-label");
    i04.\u0275\u0275text(92, "Budget");
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275element(93, "input", 34);
    i04.\u0275\u0275template(94, Dv360FormComponent_mat_error_94_Template, 2, 0, "mat-error", 19)(95, Dv360FormComponent_mat_error_95_Template, 2, 0, "mat-error", 19);
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275element(96, "div", 13);
    i04.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const partnersAuto_r15 = i04.\u0275\u0275reference(27);
    const advertisersAuto_r16 = i04.\u0275\u0275reference(36);
    const chipGrid_r17 = i04.\u0275\u0275reference(44);
    const campaignsAuto_r18 = i04.\u0275\u0275reference(49);
    const chipGridIO_r19 = i04.\u0275\u0275reference(57);
    const IOsAuto_r20 = i04.\u0275\u0275reference(62);
    const startPicker_r21 = i04.\u0275\u0275reference(74);
    const endPicker_r22 = i04.\u0275\u0275reference(85);
    i04.\u0275\u0275property("ngIf", ctx.isLoading);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("formGroup", ctx.formGroup);
    i04.\u0275\u0275advance(14);
    i04.\u0275\u0275property("ngIf", (ctx.submitted || ctx.form["dv360Platform"].touched) && ctx.form["dv360Platform"].invalid);
    i04.\u0275\u0275advance(9);
    i04.\u0275\u0275property("matAutocomplete", partnersAuto_r15);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", (ctx.submitted || ctx.form["dv360Partner"].touched) && ctx.form["dv360Partner"].invalid);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("displayWith", ctx.displayFn);
    i04.\u0275\u0275advance(2);
    i04.\u0275\u0275property("ngForOf", i04.\u0275\u0275pipeBind1(29, 33, ctx.partners$));
    i04.\u0275\u0275advance(5);
    i04.\u0275\u0275property("matAutocomplete", advertisersAuto_r16);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", (ctx.submitted || ctx.form["dv360Advertiser"].touched) && ctx.form["dv360Advertiser"].invalid);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("displayWith", ctx.displayFn);
    i04.\u0275\u0275advance(2);
    i04.\u0275\u0275property("ngForOf", i04.\u0275\u0275pipeBind1(38, 35, ctx.advertisers$));
    i04.\u0275\u0275advance(8);
    i04.\u0275\u0275property("ngForOf", ctx.campaigns);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("matChipInputFor", chipGrid_r17)("matAutocomplete", campaignsAuto_r18)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
    i04.\u0275\u0275advance(4);
    i04.\u0275\u0275property("ngForOf", i04.\u0275\u0275pipeBind1(51, 37, ctx.campaigns$));
    i04.\u0275\u0275advance(2);
    i04.\u0275\u0275property("ngIf", (ctx.form["dv360CampaignId"].errors == null ? null : ctx.form["dv360CampaignId"].errors["required"]) && (ctx.submitted || ctx.form["dv360CampaignId"].touched));
    i04.\u0275\u0275advance(6);
    i04.\u0275\u0275property("ngForOf", ctx.IOs);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("matChipInputFor", chipGridIO_r19)("matAutocomplete", IOsAuto_r20)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
    i04.\u0275\u0275advance(4);
    i04.\u0275\u0275property("ngForOf", i04.\u0275\u0275pipeBind1(64, 39, ctx.IOs$));
    i04.\u0275\u0275advance(6);
    i04.\u0275\u0275property("matDatepicker", startPicker_r21);
    i04.\u0275\u0275advance(3);
    i04.\u0275\u0275property("for", startPicker_r21);
    i04.\u0275\u0275advance(3);
    i04.\u0275\u0275property("ngIf", ctx.form["dv360StartDate"].errors == null ? null : ctx.form["dv360StartDate"].errors["required"]);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", ctx.form["dv360StartDate"].errors == null ? null : ctx.form["dv360StartDate"].errors["invalidDate"]);
    i04.\u0275\u0275advance(4);
    i04.\u0275\u0275property("matDatepicker", endPicker_r22);
    i04.\u0275\u0275advance(3);
    i04.\u0275\u0275property("for", endPicker_r22);
    i04.\u0275\u0275advance(3);
    i04.\u0275\u0275property("ngIf", ctx.form["dv360EndDate"].errors == null ? null : ctx.form["dv360EndDate"].errors["required"]);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", ctx.form["dv360EndDate"].errors == null ? null : ctx.form["dv360EndDate"].errors["invalidDate"]);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", ctx.form["dv360EndDate"].errors == null ? null : ctx.form["dv360EndDate"].errors["dateMismatch"]);
    i04.\u0275\u0275advance(6);
    i04.\u0275\u0275property("ngIf", (ctx.form["dv360Budget"].errors == null ? null : ctx.form["dv360Budget"].errors["required"]) && (ctx.submitted || ctx.form["dv360Budget"].touched));
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", (ctx.form["dv360Budget"].errors == null ? null : ctx.form["dv360Budget"].errors["pattern"]) && (ctx.submitted || ctx.form["dv360Budget"].touched));
  }
}, dependencies: [CommonModule, i6.NgForOf, i6.NgIf, i6.AsyncPipe, MatAutocompleteModule, i7.MatAutocomplete, i8.MatOption, i7.MatAutocompleteTrigger, MatInputModule, i9.MatInput, i10.MatFormField, i10.MatLabel, i10.MatHint, i10.MatError, i10.MatSuffix, MatDatepickerModule, i11.MatDatepicker, i11.MatDatepickerInput, i11.MatDatepickerToggle, MatProgressSpinnerModule, i122.MatProgressSpinner, MatSelectModule, i132.MatSelect, MatIconModule, i14.MatIcon, MatCheckboxModule, i15.MatCheckbox, MatChipsModule, i16.MatChipGrid, i16.MatChipInput, i16.MatChipRemove, i16.MatChipRow, FormsModule, i13.\u0275NgNoValidate, i13.DefaultValueAccessor, i13.NgControlStatus, i13.NgControlStatusGroup, ReactiveFormsModule, i13.FormGroupDirective, i13.FormControlName], styles: ["\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 3%;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n}\n.form-element[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.budget-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.budget-row[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n  flex: 0 1 49%;\n}\n.button[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.loader-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.mat-error[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=dv360-form.component.css.map */"] });
var Dv360FormComponent = _Dv360FormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(Dv360FormComponent, { className: "Dv360FormComponent" });
})();

// src/app/components/form/platforms/facebook-form/facebook-form.component.ts
import { Component as Component2, Inject as Inject2, ViewChild as ViewChild2, inject as inject3, Output as Output2, EventEmitter as EventEmitter2, Input as Input2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { Validators as Validators2, FormsModule as FormsModule2, ReactiveFormsModule as ReactiveFormsModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import { COMMA as COMMA2, ENTER as ENTER2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_cdk_keycodes.js?v=478e822e";
import { LiveAnnouncer as LiveAnnouncer2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_cdk_a11y.js?v=478e822e";
import { SelectionModel as SelectionModel2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_cdk_collections.js?v=478e822e";
import { MatAutocompleteModule as MatAutocompleteModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_autocomplete.js?v=478e822e";
import { MatInputModule as MatInputModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import { MatDatepickerModule as MatDatepickerModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_datepicker.js?v=478e822e";
import { MatSelectModule as MatSelectModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import { MatCheckboxModule as MatCheckboxModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_checkbox.js?v=478e822e";
import { MatIconModule as MatIconModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import { MatChipsModule as MatChipsModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_chips.js?v=478e822e";
import { MAT_DIALOG_DATA as MAT_DIALOG_DATA2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import { MatProgressSpinnerModule as MatProgressSpinnerModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_progress-spinner.js?v=478e822e";
import { of as of4, firstValueFrom as firstValueFrom3, BehaviorSubject as BehaviorSubject2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import { ToastrService as ToastrService3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import { getAuth as getAuth4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_auth.js?v=478e822e";
import * as i05 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i17 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import * as i42 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common_http.js?v=478e822e";
import * as i62 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i72 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_autocomplete.js?v=478e822e";
import * as i82 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_core.js?v=478e822e";
import * as i92 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import * as i102 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import * as i112 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_datepicker.js?v=478e822e";
import * as i123 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import * as i133 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_progress-spinner.js?v=478e822e";
import * as i142 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import * as i152 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_checkbox.js?v=478e822e";
import * as i162 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_chips.js?v=478e822e";
var _c02 = ["campaignInput"];
var _c12 = ["adsetInput"];
function FacebookFormComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "div", 33);
    i05.\u0275\u0275element(1, "mat-spinner");
    i05.\u0275\u0275elementEnd();
  }
}
function FacebookFormComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "mat-error");
    i05.\u0275\u0275text(1, " The field is required ");
    i05.\u0275\u0275elementEnd();
  }
}
function FacebookFormComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "mat-error");
    i05.\u0275\u0275text(1, " The field is required ");
    i05.\u0275\u0275elementEnd();
  }
}
function FacebookFormComponent_mat_option_28_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementContainerStart(0);
    i05.\u0275\u0275elementStart(1, "span");
    i05.\u0275\u0275text(2);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const adAccount_r2 = i05.\u0275\u0275nextContext().$implicit;
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate1("", adAccount_r2.business.name, ": ");
  }
}
function FacebookFormComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "mat-option", 34);
    i05.\u0275\u0275template(1, FacebookFormComponent_mat_option_28_ng_container_1_Template, 3, 1, "ng-container", 18);
    i05.\u0275\u0275elementStart(2, "span");
    i05.\u0275\u0275text(3);
    i05.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const adAccount_r2 = ctx.$implicit;
    i05.\u0275\u0275property("value", adAccount_r2);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("ngIf", adAccount_r2.business);
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(adAccount_r2.name);
  }
}
function FacebookFormComponent_mat_chip_row_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = i05.\u0275\u0275getCurrentView();
    i05.\u0275\u0275elementStart(0, "mat-chip-row", 35);
    i05.\u0275\u0275listener("removed", function FacebookFormComponent_mat_chip_row_35_Template_mat_chip_row_removed_0_listener() {
      const campaign_r4 = i05.\u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = i05.\u0275\u0275nextContext();
      return i05.\u0275\u0275resetView(ctx_r4.removeCampaign(campaign_r4, ctx_r4.campaigns, ctx_r4.selection, ctx_r4.announcer));
    });
    i05.\u0275\u0275elementStart(1, "span");
    i05.\u0275\u0275text(2);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(3, "button", 36)(4, "mat-icon");
    i05.\u0275\u0275text(5, "cancel");
    i05.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const campaign_r4 = ctx.$implicit;
    const ctx_r4 = i05.\u0275\u0275nextContext();
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(ctx_r4.combineAndTruncateName(campaign_r4, 25));
    i05.\u0275\u0275advance();
    i05.\u0275\u0275attribute("aria-label", "remove " + campaign_r4.displayName);
  }
}
function FacebookFormComponent_mat_option_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = i05.\u0275\u0275getCurrentView();
    i05.\u0275\u0275elementStart(0, "mat-option", 34)(1, "mat-checkbox", 37);
    i05.\u0275\u0275listener("click", function FacebookFormComponent_mat_option_40_Template_mat_checkbox_click_1_listener($event) {
      const campaign_r8 = i05.\u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = i05.\u0275\u0275nextContext();
      const campaignInput_r6 = i05.\u0275\u0275reference(37);
      return i05.\u0275\u0275resetView(ctx_r4.selectCampaign($event, ctx_r4.campaigns, campaign_r8, ctx_r4.formGroup, ctx_r4.selection, campaignInput_r6));
    });
    i05.\u0275\u0275text(2);
    i05.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const campaign_r8 = ctx.$implicit;
    i05.\u0275\u0275property("value", campaign_r8);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("checked", campaign_r8.selected);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate2(" ", campaign_r8.name, " | ", campaign_r8.id, " ");
  }
}
function FacebookFormComponent_mat_hint_42_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "mat-hint")(1, "span", 38);
    i05.\u0275\u0275text(2, "At least one campaign must be selected");
    i05.\u0275\u0275elementEnd()();
  }
}
function FacebookFormComponent_mat_chip_row_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = i05.\u0275\u0275getCurrentView();
    i05.\u0275\u0275elementStart(0, "mat-chip-row", 35);
    i05.\u0275\u0275listener("removed", function FacebookFormComponent_mat_chip_row_49_Template_mat_chip_row_removed_0_listener() {
      const adset_r10 = i05.\u0275\u0275restoreView(_r9).$implicit;
      const ctx_r4 = i05.\u0275\u0275nextContext();
      return i05.\u0275\u0275resetView(ctx_r4.removeAdset(adset_r10, ctx_r4.adsets, ctx_r4.selectionAdset, ctx_r4.announcerAdset));
    });
    i05.\u0275\u0275elementStart(1, "span");
    i05.\u0275\u0275text(2);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(3, "button", 36)(4, "mat-icon");
    i05.\u0275\u0275text(5, "cancel");
    i05.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const adset_r10 = ctx.$implicit;
    const ctx_r4 = i05.\u0275\u0275nextContext();
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(ctx_r4.combineAndTruncateName(adset_r10, 25));
    i05.\u0275\u0275advance();
    i05.\u0275\u0275attribute("aria-label", "remove " + adset_r10.name);
  }
}
function FacebookFormComponent_mat_option_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = i05.\u0275\u0275getCurrentView();
    i05.\u0275\u0275elementStart(0, "mat-option", 34)(1, "mat-checkbox", 37);
    i05.\u0275\u0275listener("click", function FacebookFormComponent_mat_option_54_Template_mat_checkbox_click_1_listener($event) {
      const adset_r13 = i05.\u0275\u0275restoreView(_r12).$implicit;
      const ctx_r4 = i05.\u0275\u0275nextContext();
      const adsetInput_r11 = i05.\u0275\u0275reference(51);
      return i05.\u0275\u0275resetView(ctx_r4.selectAdset($event, ctx_r4.adsets, adset_r13, ctx_r4.formGroup, ctx_r4.selectionAdset, adsetInput_r11));
    });
    i05.\u0275\u0275text(2);
    i05.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const adset_r13 = ctx.$implicit;
    i05.\u0275\u0275property("value", adset_r13);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("checked", adset_r13.selected);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate2(" ", adset_r13.name, " | ", adset_r13.campaign_id, " ");
  }
}
function FacebookFormComponent_mat_error_60_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "mat-error");
    i05.\u0275\u0275text(1, " The field is required ");
    i05.\u0275\u0275elementEnd();
  }
}
function FacebookFormComponent_mat_error_61_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "mat-error");
    i05.\u0275\u0275text(1, " Please enter a valid number ");
    i05.\u0275\u0275elementEnd();
  }
}
function FacebookFormComponent_mat_error_72_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "mat-error");
    i05.\u0275\u0275text(1, " This field is required. ");
    i05.\u0275\u0275elementEnd();
  }
}
function FacebookFormComponent_mat_error_73_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "mat-error");
    i05.\u0275\u0275text(1, " Please enter a valid date. ");
    i05.\u0275\u0275elementEnd();
  }
}
function FacebookFormComponent_mat_error_83_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "mat-error");
    i05.\u0275\u0275text(1, " This field is required. ");
    i05.\u0275\u0275elementEnd();
  }
}
function FacebookFormComponent_mat_error_84_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "mat-error");
    i05.\u0275\u0275text(1, " Please enter a valid date. ");
    i05.\u0275\u0275elementEnd();
  }
}
function FacebookFormComponent_mat_error_85_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "mat-error");
    i05.\u0275\u0275text(1, " End date must be after or equal to start date. ");
    i05.\u0275\u0275elementEnd();
  }
}
var _FacebookFormComponent = class _FacebookFormComponent {
  constructor(formBuilder, auth, externalPlatforms, data, http, platformsCommon, cdRef) {
    this.formBuilder = formBuilder;
    this.auth = auth;
    this.externalPlatforms = externalPlatforms;
    this.data = data;
    this.http = http;
    this.platformsCommon = platformsCommon;
    this.cdRef = cdRef;
    this.platformChange = new EventEmitter2();
    this.platformIndex = 0;
    this.submitted = false;
    this.isEditMode = false;
    this.documentId = null;
    this.toaster = inject3(ToastrService3);
    this.isLoading = false;
    this.adAccounts = [];
    this.adAccountsSubject = new BehaviorSubject2([]);
    this.adAccounts$ = this.adAccountsSubject.asObservable();
    this.campaigns = [];
    this.adsets = [];
    this.separatorKeysCodes = [ENTER2, COMMA2];
    this.selection = new SelectionModel2(true, []);
    this.selectionAdset = new SelectionModel2(true, []);
    this.announcer = inject3(LiveAnnouncer2);
    this.announcerAdset = inject3(LiveAnnouncer2);
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.documentId = data.id;
    }
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (this.isEditMode && this.data.platforms[this.platformIndex]) {
        this.data = this.data.platforms[this.platformIndex].formData;
      }
      this.createForm();
      yield this.getAdAccounts();
    });
  }
  selectCampaign(event, campaigns, campaign, formGroup, selection, campaignInput) {
    event.stopPropagation();
    this.platformsCommon.toggleSelection(campaigns, campaign, "facebookCampaign", "id", formGroup, selection, campaignInput);
    this.filterAdsetsByCampaigns();
  }
  removeCampaign(campaign, campaigns, selection, announcer) {
    this.platformsCommon.remove(campaign, campaigns, this.campaigns$, "id", selection, announcer);
    this.filterAdsetsByCampaigns();
  }
  selectAdset(event, adsets, adset, formGroup, selection, adsetInput) {
    event.stopPropagation();
    this.platformsCommon.toggleSelection(adsets, adset, "facebookAdset", "id", formGroup, selection, adsetInput);
  }
  removeAdset(adset, adsets, selection, announcer) {
    this.platformsCommon.remove(adset, adsets, this.adsets$, "id", selection, announcer);
  }
  createForm() {
    return __async(this, null, function* () {
      this.formGroup = this.formBuilder.group({
        facebookLabel: [this.data?.facebookLabel || null],
        facebookAdAccount: [this.data?.facebookAdAccount || null, [Validators2.required]],
        facebookAdset: [this.data?.facebookAdset || null],
        facebookCampaign: [this.data?.facebookCampaign || [], [Validators2.required, this.platformsCommon.campaignSelectionValidator()]],
        facebookPlatform: ["facebook", [Validators2.required]],
        facebookStartDate: [this.data?.facebookStartDate ? new Date(this.data.facebookStartDate) : null, [Validators2.required, this.platformsCommon.isValidDate()]],
        facebookEndDate: [this.data?.facebookEndDate ? new Date(this.data.facebookEndDate) : null, [Validators2.required, this.platformsCommon.isValidDate()]],
        facebookBudget: [this.data?.facebookBudget || null, [Validators2.required, Validators2.pattern(/^\d+\.?\d*$/)]]
      });
      const startDateControl = this.formGroup.get("facebookStartDate");
      const endDateControl = this.formGroup.get("facebookEndDate");
      if (startDateControl && endDateControl) {
        endDateControl.setValidators([
          ...endDateControl.validator ? [endDateControl.validator] : [],
          this.platformsCommon.startDateBeforeEndDate(startDateControl)
        ]);
        endDateControl.updateValueAndValidity();
      }
      if (this.isEditMode) {
        yield this.getAdAccounts();
        this.getAdAccountCampaigns(void 0, true);
      }
      this.cdRef.detectChanges();
    });
  }
  fetchAllAdAccounts(_0) {
    return __async(this, arguments, function* (url, adAccounts = []) {
      try {
        const response = yield firstValueFrom3(this.http.get(url));
        const fetchedAdAccounts = response.data;
        adAccounts = adAccounts.concat(fetchedAdAccounts);
        if (response.paging && response.paging.next) {
          return this.fetchAllAdAccounts(response.paging.next, adAccounts);
        } else {
          return adAccounts;
        }
      } catch (error) {
        console.error("Error fetching Facebook Ad Accounts:", error);
        this.toaster.error("Error fetching Facebook Ad Accounts", "Error");
        throw error;
      }
    });
  }
  getAdAccounts(edit) {
    return __async(this, null, function* () {
      this.isLoading = true;
      const cachedData = localStorage.getItem("adAccounts");
      if (cachedData) {
        this.adAccounts = JSON.parse(cachedData);
        this.adAccountsSubject.next(this.adAccounts);
        this.adAccounts$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, "facebookAdAccount", "name", localStorage.getItem("adAccounts"));
        this.isLoading = false;
        return;
      }
      if (!edit) {
        this.formGroup.patchValue({
          facebookCampaign: [],
          facebookAdset: [],
          facebookStartDate: null,
          facebookEndDate: null,
          facebookBudget: null
        });
        this.campaigns = [];
        this.adsets = [];
      }
      const fields = "account_id,id,name, business";
      const url = `https://graph.facebook.com/v19.0/me/adaccounts?fields=${fields}&access_token=${localStorage.getItem("facebookAccessToken")}`;
      try {
        const allAdAccounts = yield this.fetchAllAdAccounts(url);
        const sortedAdAccounts = allAdAccounts.sort((a, b) => a.name.localeCompare(b.name));
        this.adAccounts = sortedAdAccounts;
        this.adAccountsSubject.next(sortedAdAccounts);
        localStorage.setItem("adAccounts", JSON.stringify(allAdAccounts));
        this.isLoading = false;
        this.adAccounts$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, "facebookAdAccount", "name", localStorage.getItem("adAccounts"));
      } catch (error) {
        console.error("Error fetching all Facebook Ad Accounts:", error);
        this.isLoading = false;
      }
    });
  }
  fetchAllCampaigns(_0) {
    return __async(this, arguments, function* (url, campaigns = []) {
      try {
        const response = yield firstValueFrom3(this.http.get(url));
        const fetchedCampaigns = response.data;
        campaigns = campaigns.concat(fetchedCampaigns);
        if (response.paging && response.paging.next) {
          return this.fetchAllCampaigns(response.paging.next, campaigns);
        } else {
          return campaigns;
        }
      } catch (error) {
        console.error("Error fetching Facebook Campaigns:", error);
        this.toaster.error("Error fetching Facebook Campaigns", "Error");
        throw error;
      }
    });
  }
  fetchAllAdsets(_0) {
    return __async(this, arguments, function* (url, adsets = []) {
      try {
        const response = yield firstValueFrom3(this.http.get(url));
        const fetchedAdsets = response.data;
        adsets = adsets.concat(fetchedAdsets);
        if (response.paging && response.paging.next) {
          return this.fetchAllAdsets(response.paging.next, adsets);
        } else {
          return adsets;
        }
      } catch (error) {
        console.error("Error fetching Facebook Adsets:", error);
        this.toaster.error("Error fetching Facebook Adsets", "Error");
        throw error;
      }
    });
  }
  getAdsets(adsetId) {
    return __async(this, null, function* () {
      const fields = "id,name,campaign_id";
      const url = `https://graph.facebook.com/v19.0/${adsetId}/adsets?fields=${fields}&access_token=${localStorage.getItem("facebookAccessToken")}`;
      try {
        const allAdsets = yield this.fetchAllAdsets(url);
        const sortedAdsets = allAdsets.sort((a, b) => a.name.localeCompare(b.name));
        this.originalAdsets$ = of4(sortedAdsets);
        yield this.filterAdsetsByCampaigns();
        if (this.isEditMode) {
          this.updateAdsetSelectionInEditMode();
        }
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching all Facebook Adsets:", error);
      }
    });
  }
  updateAdsetSelectionInEditMode() {
    this.adsets$.subscribe((adsets) => {
      const uniqueAdsets = /* @__PURE__ */ new Set();
      const selectedAdsets = this.data?.facebookAdset || [];
      this.adsets = adsets.filter((adset) => {
        if (!uniqueAdsets.has(adset.id) && selectedAdsets.some((selectedAdset) => selectedAdset.id === adset.id)) {
          uniqueAdsets.add(adset.id);
          adset.selected = true;
          this.selectionAdset.select(adset);
          return true;
        }
        return false;
      });
    });
  }
  filterAdsetsByCampaigns() {
    return __async(this, null, function* () {
      const selectedCampaignIds = this.campaigns.filter((c) => c.selected).map((campaign) => campaign.id);
      this.originalAdsets$.subscribe((originalAdsets) => {
        const filteredAdsets = originalAdsets.filter((adset) => selectedCampaignIds.includes(adset.campaign_id));
        const sortedAdsets = filteredAdsets.sort((a, b) => a.name.localeCompare(b.name));
        this.adsets$ = of4(sortedAdsets);
        this.adsets.forEach((adset) => {
          if (!selectedCampaignIds.includes(adset.campaign_id)) {
            this.selectionAdset.deselect(adset);
            adset.selected = false;
          }
        });
        this.adsets = this.adsets.filter((adset) => selectedCampaignIds.includes(adset.campaign_id));
      });
    });
  }
  getAdAccountCampaigns(event, edit) {
    return __async(this, null, function* () {
      this.isLoading = true;
      const fields = "id,name,status";
      let adAccount = null;
      if (event) {
        adAccount = event.option.value;
      } else {
        adAccount = this.data?.facebookAdAccount;
      }
      if (!adAccount) {
        this.isLoading = false;
        return;
      }
      if (!edit) {
        this.formGroup.patchValue({
          facebookCampaign: [],
          facebookAdset: [],
          facebookStartDate: null,
          facebookEndDate: null,
          facebookBudget: null
        });
        this.campaigns = [];
        this.adsets = [];
      } else {
        this.campaigns = this.data?.facebookCampaign;
        this.adsets = this.data?.facebookAdset;
      }
      const url = `https://graph.facebook.com/v19.0/${adAccount.id}/campaigns?fields=${fields}&access_token=${localStorage.getItem("facebookAccessToken")}`;
      try {
        const allCampaigns = yield this.fetchAllCampaigns(url);
        const sortedCampaigns = allCampaigns.sort((a, b) => a.name.localeCompare(b.name));
        if (edit) {
          const campaigns = sortedCampaigns.map((campaign) => {
            const isSelected = this.campaigns.some((selectedCampaign) => selectedCampaign.id === campaign.id);
            return __spreadProps(__spreadValues({}, campaign), {
              selected: isSelected
            });
          });
          this.campaigns$ = of4(campaigns);
          this.originalCampaigns$ = of4(campaigns);
        } else {
          this.campaigns$ = of4(sortedCampaigns);
          this.originalCampaigns$ = of4(sortedCampaigns);
          this.campaigns$ = this.platformsCommon.setupFiltering(this.formGroup, "facebookCampaign", this.originalCampaigns$, "name");
        }
        yield this.getAdsets(adAccount.id);
      } catch (error) {
        this.isLoading = false;
        console.error("Error fetching all Facebook Campaigns:", error);
      }
    });
  }
  get form() {
    return this.formGroup ? this.formGroup.controls : {};
  }
  displayFn(facebookAdAccount) {
    return facebookAdAccount && facebookAdAccount.name ? facebookAdAccount.name : "";
  }
  combineAndTruncateName(campaign, num) {
    const combinedName = `${campaign.name} | ${campaign.id}`;
    return this.platformsCommon.truncateName(combinedName, num);
  }
  refreshData() {
    localStorage.removeItem("adAccounts");
    this.formGroup.patchValue({
      facebookAdAccount: null,
      facebookStartDate: null,
      facebookEndDate: null,
      facebookBudget: null,
      facebookCampaign: [],
      facebookAdset: []
    });
    this.originalCampaigns$ = of4([]);
    this.campaigns$ = of4([]);
    this.campaigns = [];
    this.adsets = [];
    this.adsets$ = of4([]);
    this.selection.clear();
    this.selectionAdset.clear();
  }
  getFormData() {
    if (this.formGroup.valid) {
      const user = getAuth4().currentUser;
      if (user) {
        const formData = __spreadProps(__spreadValues({}, this.formGroup.value), {
          facebookStartDate: this.platformsCommon.formatDate(this.formGroup.value.facebookStartDate),
          facebookEndDate: this.platformsCommon.formatDate(this.formGroup.value.facebookEndDate),
          userId: user.uid
        });
        return formData;
      } else {
        throw new Error("User not logged in");
      }
    } else {
      this.platformsCommon.validateAllFormFields(this.formGroup);
      return null;
    }
  }
  changePlatform(newPlatform) {
    this.platformChange.emit(newPlatform);
  }
};
_FacebookFormComponent.\u0275fac = function FacebookFormComponent_Factory(t) {
  return new (t || _FacebookFormComponent)(i05.\u0275\u0275directiveInject(i17.FormBuilder), i05.\u0275\u0275directiveInject(AuthService), i05.\u0275\u0275directiveInject(ExternalPlatformsService), i05.\u0275\u0275directiveInject(MAT_DIALOG_DATA2), i05.\u0275\u0275directiveInject(i42.HttpClient), i05.\u0275\u0275directiveInject(CommonService), i05.\u0275\u0275directiveInject(i05.ChangeDetectorRef));
};
_FacebookFormComponent.\u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _FacebookFormComponent, selectors: [["app-facebook-form"]], viewQuery: function FacebookFormComponent_Query(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275viewQuery(_c02, 5);
    i05.\u0275\u0275viewQuery(_c12, 5);
  }
  if (rf & 2) {
    let _t;
    i05.\u0275\u0275queryRefresh(_t = i05.\u0275\u0275loadQuery()) && (ctx.campaignInput = _t.first);
    i05.\u0275\u0275queryRefresh(_t = i05.\u0275\u0275loadQuery()) && (ctx.adsetInput = _t.first);
  }
}, inputs: { platformIndex: "platformIndex" }, outputs: { platformChange: "platformChange" }, standalone: true, features: [i05.\u0275\u0275StandaloneFeature], decls: 86, vars: 35, consts: [["adAccountsAuto", "matAutocomplete"], ["chipGrid", ""], ["campaignInput", ""], ["campaignsAuto", "matAutocomplete"], ["chipGridAdset", ""], ["adsetInput", ""], ["adsetsAuto", "matAutocomplete"], ["startPicker", ""], ["endPicker", ""], ["class", "loader-overlay", 4, "ngIf"], [1, "form", 3, "formGroup"], [1, "form-row"], [1, "form-element"], ["formControlName", "facebookPlatform", 3, "selectionChange"], ["value", "dv360"], ["value", "facebook", "disabled", ""], ["value", "googleAds"], ["value", "bing"], [4, "ngIf"], ["matInput", "", "formControlName", "facebookLabel"], ["type", "text", "placeholder", "Select your ad account", "formControlName", "facebookAdAccount", "aria-label", "ad account", "matInput", "", 3, "matAutocomplete"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Campaign Selection"], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Select your campaigns", "formControlName", "facebookCampaign", 3, "matChipInputTokenEnd", "matChipInputFor", "matAutocomplete", "matChipInputSeparatorKeyCodes"], [3, "optionSelected"], ["aria-label", "Adset Selection"], ["placeholder", "Select your adsets", "formControlName", "facebookAdset", 3, "matChipInputTokenEnd", "matChipInputFor", "matAutocomplete", "matChipInputSeparatorKeyCodes"], ["matInput", "", "formControlName", "facebookBudget"], ["matInput", "", "formControlName", "facebookStartDate", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["matInput", "", "formControlName", "facebookEndDate", 3, "matDatepicker"], [1, "loader-overlay"], [3, "value"], [3, "removed"], ["matChipRemove", "", 1, "mat-chip-remove"], [3, "click", "checked"], [1, "mat-error"]], template: function FacebookFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i05.\u0275\u0275getCurrentView();
    i05.\u0275\u0275template(0, FacebookFormComponent_div_0_Template, 2, 0, "div", 9);
    i05.\u0275\u0275elementStart(1, "form", 10)(2, "div", 11)(3, "mat-form-field", 12)(4, "mat-label");
    i05.\u0275\u0275text(5, "Platform");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(6, "mat-select", 13);
    i05.\u0275\u0275listener("selectionChange", function FacebookFormComponent_Template_mat_select_selectionChange_6_listener($event) {
      i05.\u0275\u0275restoreView(_r1);
      return i05.\u0275\u0275resetView(ctx.changePlatform($event.value));
    });
    i05.\u0275\u0275elementStart(7, "mat-option", 14);
    i05.\u0275\u0275text(8, "Display & Video 360");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(9, "mat-option", 15);
    i05.\u0275\u0275text(10, "Facebook");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(11, "mat-option", 16);
    i05.\u0275\u0275text(12, "Google Ads");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(13, "mat-option", 17);
    i05.\u0275\u0275text(14, "Bing");
    i05.\u0275\u0275elementEnd()();
    i05.\u0275\u0275template(15, FacebookFormComponent_mat_error_15_Template, 2, 0, "mat-error", 18);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(16, "mat-form-field", 12)(17, "mat-label");
    i05.\u0275\u0275text(18, "Label");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275element(19, "input", 19);
    i05.\u0275\u0275elementEnd()();
    i05.\u0275\u0275elementStart(20, "div", 11)(21, "mat-form-field", 12)(22, "mat-label");
    i05.\u0275\u0275text(23, "Ad account");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275element(24, "input", 20);
    i05.\u0275\u0275template(25, FacebookFormComponent_mat_error_25_Template, 2, 0, "mat-error", 18);
    i05.\u0275\u0275elementStart(26, "mat-autocomplete", 21, 0);
    i05.\u0275\u0275listener("optionSelected", function FacebookFormComponent_Template_mat_autocomplete_optionSelected_26_listener($event) {
      i05.\u0275\u0275restoreView(_r1);
      return i05.\u0275\u0275resetView(ctx.getAdAccountCampaigns($event));
    });
    i05.\u0275\u0275template(28, FacebookFormComponent_mat_option_28_Template, 4, 3, "mat-option", 22);
    i05.\u0275\u0275pipe(29, "async");
    i05.\u0275\u0275elementEnd()();
    i05.\u0275\u0275elementStart(30, "mat-form-field", 12)(31, "mat-label");
    i05.\u0275\u0275text(32, "Campaign*");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(33, "mat-chip-grid", 23, 1);
    i05.\u0275\u0275template(35, FacebookFormComponent_mat_chip_row_35_Template, 6, 2, "mat-chip-row", 24);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(36, "input", 25, 2);
    i05.\u0275\u0275listener("matChipInputTokenEnd", function FacebookFormComponent_Template_input_matChipInputTokenEnd_36_listener($event) {
      i05.\u0275\u0275restoreView(_r1);
      return i05.\u0275\u0275resetView(ctx.platformsCommon.add($event, ctx.campaigns, ctx.formGroup, "facebookCampaign"));
    });
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(38, "mat-autocomplete", 26, 3);
    i05.\u0275\u0275listener("optionSelected", function FacebookFormComponent_Template_mat_autocomplete_optionSelected_38_listener($event) {
      i05.\u0275\u0275restoreView(_r1);
      const campaignInput_r6 = i05.\u0275\u0275reference(37);
      return i05.\u0275\u0275resetView(ctx.selectCampaign($event, ctx.campaigns, ctx.formGroup, ctx.selection, ctx.announcer, campaignInput_r6));
    });
    i05.\u0275\u0275template(40, FacebookFormComponent_mat_option_40_Template, 3, 4, "mat-option", 22);
    i05.\u0275\u0275pipe(41, "async");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275template(42, FacebookFormComponent_mat_hint_42_Template, 3, 0, "mat-hint", 18);
    i05.\u0275\u0275elementEnd()();
    i05.\u0275\u0275elementStart(43, "div", 11)(44, "mat-form-field", 12)(45, "mat-label");
    i05.\u0275\u0275text(46, "Adsets");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(47, "mat-chip-grid", 27, 4);
    i05.\u0275\u0275template(49, FacebookFormComponent_mat_chip_row_49_Template, 6, 2, "mat-chip-row", 24);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(50, "input", 28, 5);
    i05.\u0275\u0275listener("matChipInputTokenEnd", function FacebookFormComponent_Template_input_matChipInputTokenEnd_50_listener($event) {
      i05.\u0275\u0275restoreView(_r1);
      return i05.\u0275\u0275resetView(ctx.platformsCommon.add($event, ctx.adsets, ctx.formGroup, "facebookAdset"));
    });
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(52, "mat-autocomplete", 26, 6);
    i05.\u0275\u0275listener("optionSelected", function FacebookFormComponent_Template_mat_autocomplete_optionSelected_52_listener($event) {
      i05.\u0275\u0275restoreView(_r1);
      const adsetInput_r11 = i05.\u0275\u0275reference(51);
      return i05.\u0275\u0275resetView(ctx.selectAdset($event, ctx.adsets, ctx.formGroup, ctx.selectionAdset, ctx.announcerAdset, adsetInput_r11));
    });
    i05.\u0275\u0275template(54, FacebookFormComponent_mat_option_54_Template, 3, 4, "mat-option", 22);
    i05.\u0275\u0275pipe(55, "async");
    i05.\u0275\u0275elementEnd()();
    i05.\u0275\u0275elementStart(56, "mat-form-field", 12)(57, "mat-label");
    i05.\u0275\u0275text(58, "Budget");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275element(59, "input", 29);
    i05.\u0275\u0275template(60, FacebookFormComponent_mat_error_60_Template, 2, 0, "mat-error", 18)(61, FacebookFormComponent_mat_error_61_Template, 2, 0, "mat-error", 18);
    i05.\u0275\u0275elementEnd()();
    i05.\u0275\u0275elementStart(62, "div", 11)(63, "mat-form-field", 12)(64, "mat-label");
    i05.\u0275\u0275text(65, "Start Date");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275element(66, "input", 30);
    i05.\u0275\u0275elementStart(67, "mat-hint");
    i05.\u0275\u0275text(68, "MM/DD/YYYY");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275element(69, "mat-datepicker-toggle", 31)(70, "mat-datepicker", null, 7);
    i05.\u0275\u0275template(72, FacebookFormComponent_mat_error_72_Template, 2, 0, "mat-error", 18)(73, FacebookFormComponent_mat_error_73_Template, 2, 0, "mat-error", 18);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(74, "mat-form-field", 12)(75, "mat-label");
    i05.\u0275\u0275text(76, "End Date");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275element(77, "input", 32);
    i05.\u0275\u0275elementStart(78, "mat-hint");
    i05.\u0275\u0275text(79, "MM/DD/YYYY");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275element(80, "mat-datepicker-toggle", 31)(81, "mat-datepicker", null, 8);
    i05.\u0275\u0275template(83, FacebookFormComponent_mat_error_83_Template, 2, 0, "mat-error", 18)(84, FacebookFormComponent_mat_error_84_Template, 2, 0, "mat-error", 18)(85, FacebookFormComponent_mat_error_85_Template, 2, 0, "mat-error", 18);
    i05.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const adAccountsAuto_r14 = i05.\u0275\u0275reference(27);
    const chipGrid_r15 = i05.\u0275\u0275reference(34);
    const campaignsAuto_r16 = i05.\u0275\u0275reference(39);
    const chipGridAdset_r17 = i05.\u0275\u0275reference(48);
    const adsetsAuto_r18 = i05.\u0275\u0275reference(53);
    const startPicker_r19 = i05.\u0275\u0275reference(71);
    const endPicker_r20 = i05.\u0275\u0275reference(82);
    i05.\u0275\u0275property("ngIf", ctx.isLoading);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("formGroup", ctx.formGroup);
    i05.\u0275\u0275advance(14);
    i05.\u0275\u0275property("ngIf", (ctx.submitted || ctx.form["facebookPlatform"].touched) && ctx.form["facebookPlatform"].invalid);
    i05.\u0275\u0275advance(9);
    i05.\u0275\u0275property("matAutocomplete", adAccountsAuto_r14);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("ngIf", (ctx.submitted || ctx.form["facebookAdAccount"].touched) && ctx.form["facebookAdAccount"].invalid);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("displayWith", ctx.displayFn);
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275property("ngForOf", i05.\u0275\u0275pipeBind1(29, 29, ctx.adAccounts$));
    i05.\u0275\u0275advance(7);
    i05.\u0275\u0275property("ngForOf", ctx.campaigns);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("matChipInputFor", chipGrid_r15)("matAutocomplete", campaignsAuto_r16)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
    i05.\u0275\u0275advance(4);
    i05.\u0275\u0275property("ngForOf", i05.\u0275\u0275pipeBind1(41, 31, ctx.campaigns$));
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275property("ngIf", (ctx.form["facebookCampaign"].errors == null ? null : ctx.form["facebookCampaign"].errors["required"]) && (ctx.submitted || ctx.form["facebookCampaign"].touched));
    i05.\u0275\u0275advance(7);
    i05.\u0275\u0275property("ngForOf", ctx.adsets);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("matChipInputFor", chipGridAdset_r17)("matAutocomplete", adsetsAuto_r18)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
    i05.\u0275\u0275advance(4);
    i05.\u0275\u0275property("ngForOf", i05.\u0275\u0275pipeBind1(55, 33, ctx.adsets$));
    i05.\u0275\u0275advance(6);
    i05.\u0275\u0275property("ngIf", (ctx.form["facebookBudget"].errors == null ? null : ctx.form["facebookBudget"].errors["required"]) && (ctx.submitted || ctx.form["facebookBudget"].touched));
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("ngIf", (ctx.form["facebookBudget"].errors == null ? null : ctx.form["facebookBudget"].errors["pattern"]) && (ctx.submitted || ctx.form["facebookBudget"].touched));
    i05.\u0275\u0275advance(5);
    i05.\u0275\u0275property("matDatepicker", startPicker_r19);
    i05.\u0275\u0275advance(3);
    i05.\u0275\u0275property("for", startPicker_r19);
    i05.\u0275\u0275advance(3);
    i05.\u0275\u0275property("ngIf", ctx.form["facebookStartDate"].errors == null ? null : ctx.form["facebookStartDate"].errors["required"]);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("ngIf", ctx.form["facebookStartDate"].errors == null ? null : ctx.form["facebookStartDate"].errors["invalidDate"]);
    i05.\u0275\u0275advance(4);
    i05.\u0275\u0275property("matDatepicker", endPicker_r20);
    i05.\u0275\u0275advance(3);
    i05.\u0275\u0275property("for", endPicker_r20);
    i05.\u0275\u0275advance(3);
    i05.\u0275\u0275property("ngIf", ctx.form["facebookEndDate"].errors == null ? null : ctx.form["facebookEndDate"].errors["required"]);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("ngIf", ctx.form["facebookEndDate"].errors == null ? null : ctx.form["facebookEndDate"].errors["invalidDate"]);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("ngIf", ctx.form["facebookEndDate"].errors == null ? null : ctx.form["facebookEndDate"].errors["dateMismatch"]);
  }
}, dependencies: [CommonModule2, i62.NgForOf, i62.NgIf, i62.AsyncPipe, MatAutocompleteModule2, i72.MatAutocomplete, i82.MatOption, i72.MatAutocompleteTrigger, MatInputModule2, i92.MatInput, i102.MatFormField, i102.MatLabel, i102.MatHint, i102.MatError, i102.MatSuffix, MatDatepickerModule2, i112.MatDatepicker, i112.MatDatepickerInput, i112.MatDatepickerToggle, MatSelectModule2, i123.MatSelect, MatProgressSpinnerModule2, i133.MatProgressSpinner, MatIconModule2, i142.MatIcon, MatCheckboxModule2, i152.MatCheckbox, MatChipsModule2, i162.MatChipGrid, i162.MatChipInput, i162.MatChipRemove, i162.MatChipRow, FormsModule2, i17.\u0275NgNoValidate, i17.DefaultValueAccessor, i17.NgControlStatus, i17.NgControlStatusGroup, ReactiveFormsModule2, i17.FormGroupDirective, i17.FormControlName], styles: ["\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 3%;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n}\n.form-element[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.budget-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.budget-row[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n  flex: 0 1 49%;\n}\n.button[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.loader-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.mat-error[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=facebook-form.component.css.map */"] });
var FacebookFormComponent = _FacebookFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(FacebookFormComponent, { className: "FacebookFormComponent" });
})();

// src/app/components/form/platforms/google-ads-form/google-ads-form.component.ts
import { Component as Component3, Inject as Inject3, ViewChild as ViewChild3, inject as inject4, Output as Output3, EventEmitter as EventEmitter3, Input as Input3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { HttpHeaders } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common_http.js?v=478e822e";
import { Validators as Validators3, FormsModule as FormsModule3, ReactiveFormsModule as ReactiveFormsModule3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import { COMMA as COMMA3, ENTER as ENTER3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_cdk_keycodes.js?v=478e822e";
import { LiveAnnouncer as LiveAnnouncer3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_cdk_a11y.js?v=478e822e";
import { SelectionModel as SelectionModel3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_cdk_collections.js?v=478e822e";
import { MatAutocompleteModule as MatAutocompleteModule3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_autocomplete.js?v=478e822e";
import { MatInputModule as MatInputModule3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import { MatDatepickerModule as MatDatepickerModule3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_datepicker.js?v=478e822e";
import { MatSelectModule as MatSelectModule3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import { MatCheckboxModule as MatCheckboxModule3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_checkbox.js?v=478e822e";
import { MatIconModule as MatIconModule3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import { MatChipsModule as MatChipsModule3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_chips.js?v=478e822e";
import { MAT_DIALOG_DATA as MAT_DIALOG_DATA3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import { MatProgressSpinnerModule as MatProgressSpinnerModule3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_progress-spinner.js?v=478e822e";
import { of as of5, firstValueFrom as firstValueFrom4, BehaviorSubject as BehaviorSubject3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import { ToastrService as ToastrService4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import { getAuth as getAuth5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_auth.js?v=478e822e";
import * as i06 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i18 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import * as i43 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common_http.js?v=478e822e";
import * as i63 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i73 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_autocomplete.js?v=478e822e";
import * as i83 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_core.js?v=478e822e";
import * as i93 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import * as i103 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import * as i113 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_datepicker.js?v=478e822e";
import * as i124 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import * as i134 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import * as i143 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_checkbox.js?v=478e822e";
import * as i153 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_chips.js?v=478e822e";
import * as i163 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_progress-spinner.js?v=478e822e";
var _c03 = ["campaignInput"];
function GoogleAdsFormComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "div", 28);
    i06.\u0275\u0275element(1, "mat-spinner");
    i06.\u0275\u0275elementEnd();
  }
}
function GoogleAdsFormComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "mat-error");
    i06.\u0275\u0275text(1, " The field is required ");
    i06.\u0275\u0275elementEnd();
  }
}
function GoogleAdsFormComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "mat-error");
    i06.\u0275\u0275text(1, " The field is required ");
    i06.\u0275\u0275elementEnd();
  }
}
function GoogleAdsFormComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "mat-option", 29)(1, "span");
    i06.\u0275\u0275text(2);
    i06.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const adAccount_r2 = ctx.$implicit;
    i06.\u0275\u0275property("value", adAccount_r2);
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275textInterpolate(adAccount_r2.descriptiveName);
  }
}
function GoogleAdsFormComponent_mat_chip_row_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = i06.\u0275\u0275getCurrentView();
    i06.\u0275\u0275elementStart(0, "mat-chip-row", 30);
    i06.\u0275\u0275listener("removed", function GoogleAdsFormComponent_mat_chip_row_36_Template_mat_chip_row_removed_0_listener() {
      const campaign_r4 = i06.\u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = i06.\u0275\u0275nextContext();
      return i06.\u0275\u0275resetView(ctx_r4.platformsCommon.remove(campaign_r4, ctx_r4.campaigns, ctx_r4.campaigns$, "id", ctx_r4.selection, ctx_r4.announcer));
    });
    i06.\u0275\u0275elementStart(1, "span");
    i06.\u0275\u0275text(2);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(3, "button", 31)(4, "mat-icon");
    i06.\u0275\u0275text(5, "cancel");
    i06.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const campaign_r4 = ctx.$implicit;
    const ctx_r4 = i06.\u0275\u0275nextContext();
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275textInterpolate(ctx_r4.combineAndTruncateName(campaign_r4, 25));
    i06.\u0275\u0275advance();
    i06.\u0275\u0275attribute("aria-label", "remove " + campaign_r4.displayName);
  }
}
function GoogleAdsFormComponent_mat_option_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = i06.\u0275\u0275getCurrentView();
    i06.\u0275\u0275elementStart(0, "mat-option", 29)(1, "mat-checkbox", 32);
    i06.\u0275\u0275listener("click", function GoogleAdsFormComponent_mat_option_41_Template_mat_checkbox_click_1_listener($event) {
      const campaign_r8 = i06.\u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = i06.\u0275\u0275nextContext();
      const campaignInput_r6 = i06.\u0275\u0275reference(38);
      $event.stopPropagation();
      return i06.\u0275\u0275resetView(ctx_r4.platformsCommon.toggleSelection(ctx_r4.campaigns, campaign_r8, "googleAdsCampaign", "id", ctx_r4.formGroup, ctx_r4.selection, campaignInput_r6));
    });
    i06.\u0275\u0275text(2);
    i06.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const campaign_r8 = ctx.$implicit;
    i06.\u0275\u0275property("value", campaign_r8);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("checked", campaign_r8.selected);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275textInterpolate2(" ", campaign_r8.name, " | ", campaign_r8.id, " ");
  }
}
function GoogleAdsFormComponent_mat_hint_43_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "mat-hint")(1, "span", 33);
    i06.\u0275\u0275text(2, "At least one campaign must be selected");
    i06.\u0275\u0275elementEnd()();
  }
}
function GoogleAdsFormComponent_mat_error_53_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "mat-error");
    i06.\u0275\u0275text(1, " This field is required. ");
    i06.\u0275\u0275elementEnd();
  }
}
function GoogleAdsFormComponent_mat_error_54_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "mat-error");
    i06.\u0275\u0275text(1, " Please enter a valid date. ");
    i06.\u0275\u0275elementEnd();
  }
}
function GoogleAdsFormComponent_mat_error_65_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "mat-error");
    i06.\u0275\u0275text(1, " This field is required. ");
    i06.\u0275\u0275elementEnd();
  }
}
function GoogleAdsFormComponent_mat_error_66_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "mat-error");
    i06.\u0275\u0275text(1, " Please enter a valid date. ");
    i06.\u0275\u0275elementEnd();
  }
}
function GoogleAdsFormComponent_mat_error_67_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "mat-error");
    i06.\u0275\u0275text(1, " End date must be after or equal to start date. ");
    i06.\u0275\u0275elementEnd();
  }
}
function GoogleAdsFormComponent_mat_error_72_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "mat-error");
    i06.\u0275\u0275text(1, " The field is required ");
    i06.\u0275\u0275elementEnd();
  }
}
function GoogleAdsFormComponent_mat_error_73_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "mat-error");
    i06.\u0275\u0275text(1, " Please enter a valid number ");
    i06.\u0275\u0275elementEnd();
  }
}
var _GoogleAdsFormComponent = class _GoogleAdsFormComponent {
  constructor(formBuilder, auth, externalPlatforms, data, http, platformsCommon, cdRef) {
    this.formBuilder = formBuilder;
    this.auth = auth;
    this.externalPlatforms = externalPlatforms;
    this.data = data;
    this.http = http;
    this.platformsCommon = platformsCommon;
    this.cdRef = cdRef;
    this.platformChange = new EventEmitter3();
    this.platformIndex = 0;
    this.submitted = false;
    this.isEditMode = false;
    this.documentId = null;
    this.toaster = inject4(ToastrService4);
    this.isLoading = false;
    this.adAccounts = [];
    this.adAccountsSubject = new BehaviorSubject3([]);
    this.adAccounts$ = this.adAccountsSubject.asObservable();
    this.campaigns = [];
    this.separatorKeysCodes = [ENTER3, COMMA3];
    this.selection = new SelectionModel3(true, []);
    this.announcer = inject4(LiveAnnouncer3);
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.documentId = data.id;
    }
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (this.isEditMode && this.data.platforms[this.platformIndex]) {
        this.data = this.data.platforms[this.platformIndex].formData;
      }
      this.createForm();
      yield this.getAdAccounts();
    });
  }
  createForm() {
    return __async(this, null, function* () {
      this.formGroup = this.formBuilder.group({
        googleAdsLabel: [this.data?.googleAdsLabel || null],
        googleAdsAccount: [this.data?.googleAdsAccount || null, [Validators3.required]],
        googleAdsCampaign: [this.data?.googleAdsCampaign || [], [Validators3.required, this.platformsCommon.campaignSelectionValidator()]],
        googleAdsPlatform: ["googleAds", [Validators3.required]],
        googleAdsStartDate: [this.data?.googleAdsStartDate ? new Date(this.data.googleAdsStartDate) : null, [Validators3.required, this.platformsCommon.isValidDate()]],
        googleAdsEndDate: [this.data?.googleAdsEndDate ? new Date(this.data.googleAdsEndDate) : null, [Validators3.required, this.platformsCommon.isValidDate()]],
        googleAdsBudget: [this.data?.googleAdsBudget || null, [Validators3.required, Validators3.pattern(/^\d+\.?\d*$/)]]
      });
      const startDateControl = this.formGroup.get("googleAdsStartDate");
      const endDateControl = this.formGroup.get("googleAdsEndDate");
      if (startDateControl && endDateControl) {
        endDateControl.setValidators([
          ...endDateControl.validator ? [endDateControl.validator] : [],
          this.platformsCommon.startDateBeforeEndDate(startDateControl)
        ]);
        endDateControl.updateValueAndValidity();
      }
      if (this.isEditMode) {
        yield this.getAdAccounts();
        this.getAdAccountCampaigns(2, void 0, true);
      }
      this.cdRef.detectChanges();
    });
  }
  getAdAccounts(retryCount = 2) {
    return __async(this, null, function* () {
      this.isLoading = true;
      const cachedData = localStorage.getItem("googleAdsAccounts");
      if (cachedData) {
        this.adAccounts = JSON.parse(cachedData);
        this.adAccountsSubject.next(this.adAccounts);
        this.adAccounts$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, "googleAdsAccount", "descriptiveName", localStorage.getItem("googleAdsAccounts"));
        this.isLoading = false;
        return;
      }
      const headers = new HttpHeaders({
        "Authorization": `Bearer ${localStorage.getItem("googleAdsAccessToken")}`,
        "Content-Type": "application/json",
        "developer-token": "mkH52QA2KonyxSyJy8TFUw"
      });
      try {
        const googleAdsUrl = `https://googleads.googleapis.com/v16/customers:listAccessibleCustomers`;
        const response = yield firstValueFrom4(this.http.get(googleAdsUrl, { headers }));
        const customerIds = response.resourceNames.map((name) => name.split("/")[1]);
        const customerDetails = yield this.fetchCustomerDetails(customerIds, headers);
        const successfulResponses = customerDetails.filter((detail) => detail.success);
        if (successfulResponses.length > 0) {
          let adAccountMap = /* @__PURE__ */ new Map();
          successfulResponses.flatMap((detail) => detail.data[0].results.map((result) => result.customerClient)).forEach((account) => {
            adAccountMap.set(account.id, account);
          });
          let uniqueAdAccounts = Array.from(adAccountMap.values());
          uniqueAdAccounts = uniqueAdAccounts.filter((account) => account.descriptiveName);
          const sortedAdAccounts = uniqueAdAccounts.sort((a, b) => a.descriptiveName.localeCompare(b.descriptiveName));
          this.adAccounts = sortedAdAccounts.filter((account) => account.status === "ENABLED" && account.manager === false);
          this.adAccountsSubject.next(this.adAccounts);
          localStorage.setItem("googleAdsAccounts", JSON.stringify(this.adAccounts));
          this.adAccounts$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, "googleAdsAccount", "descriptiveName", localStorage.getItem("googleAdsAccounts"));
        }
        this.isLoading = false;
      } catch (error) {
        if (retryCount > 0) {
          yield this.externalPlatforms.handleGoogleError(error, "googleAds");
          return this.getAdAccounts(retryCount - 1);
        } else {
          console.error(error);
          this.toaster.error("An error occurred while fetching Google Ads accounts", "Error");
          this.isLoading = false;
        }
      }
    });
  }
  fetchCustomerDetails(customerIds, headers) {
    return __async(this, null, function* () {
      const query = `SELECT customer_client.client_customer, customer_client.level, 
                  customer_client.manager, customer_client.descriptive_name, 
                  customer_client.currency_code, customer_client.time_zone, 
                  customer_client.id, customer_client.status
                  FROM customer_client`;
      const body = { "query": query };
      const detailsPromises = customerIds.map((id) => __async(this, null, function* () {
        const url = `https://googleads.googleapis.com/v16/customers/${id}/googleAds:searchStream`;
        try {
          const response = yield firstValueFrom4(this.http.post(url, body, { headers }));
          return { success: true, data: response };
        } catch (error) {
          return { success: false, error, id };
        }
      }));
      try {
        const results = yield Promise.all(detailsPromises);
        return results;
      } catch (error) {
        console.error("An unexpected error occurred:", error);
        return null;
      }
    });
  }
  getAdAccountCampaigns(retryCount = 2, event, edit) {
    return __async(this, null, function* () {
      this.isLoading = true;
      let adAccount = null;
      if (event) {
        adAccount = event.option.value;
      } else {
        adAccount = this.data?.googleAdsAccount;
      }
      if (!adAccount) {
        this.isLoading = false;
        return;
      }
      adAccount = adAccount.id;
      if (!edit) {
        this.formGroup.patchValue({
          googleAdsCampaign: [],
          googleAdsStartDate: null,
          googleAdsEndDate: null,
          googleAdsBudget: null
        });
        this.campaigns = [];
      } else {
        this.campaigns = this.data?.googleAdsCampaign;
      }
      const headers = new HttpHeaders({
        "Authorization": `Bearer ${localStorage.getItem("googleAdsAccessToken")}`,
        "Content-Type": "application/json",
        "developer-token": "mkH52QA2KonyxSyJy8TFUw",
        "login-customer-id": "2681551676"
      });
      const url = `https://googleads.googleapis.com/v16/customers/${adAccount}/googleAds:searchStream`;
      const body = { "query": "SELECT campaign.id, campaign.name, campaign.status FROM campaign ORDER BY campaign.id" };
      try {
        let allCampaigns = yield firstValueFrom4(this.http.post(url, body, { headers }));
        if (allCampaigns.length > 0) {
          allCampaigns = allCampaigns[0].results.map((result) => result.campaign);
        }
        const sortedCampaigns = allCampaigns.sort((a, b) => a.name.localeCompare(b.name));
        this.campaigns$ = of5(sortedCampaigns);
        this.originalCampaigns$ = of5(sortedCampaigns);
        this.campaigns$ = this.platformsCommon.setupFiltering(this.formGroup, "googleAdsCampaign", this.originalCampaigns$, "name");
        this.isLoading = false;
      } catch (error) {
        if (retryCount > 0) {
          yield this.externalPlatforms.handleGoogleError(error, "googleAds");
          return this.getAdAccountCampaigns(retryCount - 1, event, edit);
        } else {
          console.error(error);
          this.toaster.error("An error occurred while fetching Google Ads campaigns", "Error");
          this.isLoading = false;
        }
      }
    });
  }
  get form() {
    return this.formGroup ? this.formGroup.controls : {};
  }
  displayFn(account) {
    return account && account && account.descriptiveName ? account.descriptiveName : "";
  }
  combineAndTruncateName(campaign, num) {
    const combinedName = `${campaign.name} | ${campaign.id}`;
    return this.platformsCommon.truncateName(combinedName, num);
  }
  refreshData() {
    localStorage.removeItem("adAccounts");
    this.formGroup.patchValue({
      googleAdsAccount: null,
      googleAdsStartDate: null,
      googleAdsEndDate: null,
      googleAdsBudget: null,
      googleAdsCampaign: []
    });
    this.originalCampaigns$ = of5([]);
    this.campaigns$ = of5([]);
    this.campaigns = [];
    this.selection.clear();
  }
  getFormData() {
    if (this.formGroup.valid) {
      const user = getAuth5().currentUser;
      if (user) {
        const formData = __spreadProps(__spreadValues({}, this.formGroup.value), {
          googleAdsStartDate: this.platformsCommon.formatDate(this.formGroup.value.googleAdsStartDate),
          googleAdsEndDate: this.platformsCommon.formatDate(this.formGroup.value.googleAdsEndDate),
          userId: user.uid
        });
        return formData;
      } else {
        throw new Error("User not logged in");
      }
    } else {
      this.platformsCommon.validateAllFormFields(this.formGroup);
      return null;
    }
  }
  changePlatform(newPlatform) {
    this.platformChange.emit(newPlatform);
  }
};
_GoogleAdsFormComponent.\u0275fac = function GoogleAdsFormComponent_Factory(t) {
  return new (t || _GoogleAdsFormComponent)(i06.\u0275\u0275directiveInject(i18.FormBuilder), i06.\u0275\u0275directiveInject(AuthService), i06.\u0275\u0275directiveInject(ExternalPlatformsService), i06.\u0275\u0275directiveInject(MAT_DIALOG_DATA3), i06.\u0275\u0275directiveInject(i43.HttpClient), i06.\u0275\u0275directiveInject(CommonService), i06.\u0275\u0275directiveInject(i06.ChangeDetectorRef));
};
_GoogleAdsFormComponent.\u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _GoogleAdsFormComponent, selectors: [["app-google-ads-form"]], viewQuery: function GoogleAdsFormComponent_Query(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275viewQuery(_c03, 5);
  }
  if (rf & 2) {
    let _t;
    i06.\u0275\u0275queryRefresh(_t = i06.\u0275\u0275loadQuery()) && (ctx.campaignInput = _t.first);
  }
}, inputs: { platformIndex: "platformIndex" }, outputs: { platformChange: "platformChange" }, standalone: true, features: [i06.\u0275\u0275StandaloneFeature], decls: 74, vars: 28, consts: [["adAccountsAuto", "matAutocomplete"], ["chipGrid", ""], ["campaignInput", ""], ["campaignsAuto", "matAutocomplete"], ["startPicker", ""], ["endPicker", ""], ["class", "loader-overlay", 4, "ngIf"], [1, "form", 3, "formGroup"], [1, "form-row"], [1, "form-element"], ["formControlName", "googleAdsPlatform", 3, "selectionChange"], ["value", "dv360"], ["value", "facebook"], ["value", "googleAds", "disabled", ""], ["value", "bing"], [4, "ngIf"], ["matInput", "", "formControlName", "googleAdsLabel"], ["type", "text", "placeholder", "Select your ad account", "formControlName", "googleAdsAccount", "aria-label", "ad account", "matInput", "", 3, "matAutocomplete"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Campaign Selection"], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Select your campaigns", "formControlName", "googleAdsCampaign", 3, "matChipInputTokenEnd", "matChipInputFor", "matAutocomplete", "matChipInputSeparatorKeyCodes"], [3, "optionSelected"], ["matInput", "", "formControlName", "googleAdsStartDate", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["matInput", "", "formControlName", "googleAdsEndDate", 3, "matDatepicker"], ["matInput", "", "formControlName", "googleAdsBudget"], [1, "loader-overlay"], [3, "value"], [3, "removed"], ["matChipRemove", "", 1, "mat-chip-remove"], [3, "click", "checked"], [1, "mat-error"]], template: function GoogleAdsFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i06.\u0275\u0275getCurrentView();
    i06.\u0275\u0275template(0, GoogleAdsFormComponent_div_0_Template, 2, 0, "div", 6);
    i06.\u0275\u0275elementStart(1, "form", 7)(2, "div", 8)(3, "mat-form-field", 9)(4, "mat-label");
    i06.\u0275\u0275text(5, "Platform");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(6, "mat-select", 10);
    i06.\u0275\u0275listener("selectionChange", function GoogleAdsFormComponent_Template_mat_select_selectionChange_6_listener($event) {
      i06.\u0275\u0275restoreView(_r1);
      return i06.\u0275\u0275resetView(ctx.changePlatform($event.value));
    });
    i06.\u0275\u0275elementStart(7, "mat-option", 11);
    i06.\u0275\u0275text(8, "Display & Video 360");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(9, "mat-option", 12);
    i06.\u0275\u0275text(10, "Facebook");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(11, "mat-option", 13);
    i06.\u0275\u0275text(12, "Google Ads");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(13, "mat-option", 14);
    i06.\u0275\u0275text(14, "Bing");
    i06.\u0275\u0275elementEnd()();
    i06.\u0275\u0275template(15, GoogleAdsFormComponent_mat_error_15_Template, 2, 0, "mat-error", 15);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(16, "mat-form-field", 9)(17, "mat-label");
    i06.\u0275\u0275text(18, "Label");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275element(19, "input", 16);
    i06.\u0275\u0275elementEnd()();
    i06.\u0275\u0275elementStart(20, "div", 8)(21, "mat-form-field", 9)(22, "mat-label");
    i06.\u0275\u0275text(23, "Ad account");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275element(24, "input", 17);
    i06.\u0275\u0275template(25, GoogleAdsFormComponent_mat_error_25_Template, 2, 0, "mat-error", 15);
    i06.\u0275\u0275elementStart(26, "mat-autocomplete", 18, 0);
    i06.\u0275\u0275listener("optionSelected", function GoogleAdsFormComponent_Template_mat_autocomplete_optionSelected_26_listener($event) {
      i06.\u0275\u0275restoreView(_r1);
      return i06.\u0275\u0275resetView(ctx.getAdAccountCampaigns(2, $event));
    });
    i06.\u0275\u0275template(28, GoogleAdsFormComponent_mat_option_28_Template, 3, 2, "mat-option", 19);
    i06.\u0275\u0275pipe(29, "async");
    i06.\u0275\u0275elementEnd()()();
    i06.\u0275\u0275elementStart(30, "div", 8)(31, "mat-form-field", 9)(32, "mat-label");
    i06.\u0275\u0275text(33, "Campaign*");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(34, "mat-chip-grid", 20, 1);
    i06.\u0275\u0275template(36, GoogleAdsFormComponent_mat_chip_row_36_Template, 6, 2, "mat-chip-row", 21);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(37, "input", 22, 2);
    i06.\u0275\u0275listener("matChipInputTokenEnd", function GoogleAdsFormComponent_Template_input_matChipInputTokenEnd_37_listener($event) {
      i06.\u0275\u0275restoreView(_r1);
      return i06.\u0275\u0275resetView(ctx.platformsCommon.add($event, ctx.campaigns, ctx.formGroup, "googleAdsCampaign"));
    });
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(39, "mat-autocomplete", 23, 3);
    i06.\u0275\u0275listener("optionSelected", function GoogleAdsFormComponent_Template_mat_autocomplete_optionSelected_39_listener($event) {
      i06.\u0275\u0275restoreView(_r1);
      const campaignInput_r6 = i06.\u0275\u0275reference(38);
      return i06.\u0275\u0275resetView(ctx.platformsCommon.selected($event, ctx.campaigns, ctx.formGroup, "googleAdsCampaign", ctx.selection, ctx.announcer, campaignInput_r6));
    });
    i06.\u0275\u0275template(41, GoogleAdsFormComponent_mat_option_41_Template, 3, 4, "mat-option", 19);
    i06.\u0275\u0275pipe(42, "async");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275template(43, GoogleAdsFormComponent_mat_hint_43_Template, 3, 0, "mat-hint", 15);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(44, "mat-form-field", 9)(45, "mat-label");
    i06.\u0275\u0275text(46, "Start Date");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275element(47, "input", 24);
    i06.\u0275\u0275elementStart(48, "mat-hint");
    i06.\u0275\u0275text(49, "MM/DD/YYYY");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275element(50, "mat-datepicker-toggle", 25)(51, "mat-datepicker", null, 4);
    i06.\u0275\u0275template(53, GoogleAdsFormComponent_mat_error_53_Template, 2, 0, "mat-error", 15)(54, GoogleAdsFormComponent_mat_error_54_Template, 2, 0, "mat-error", 15);
    i06.\u0275\u0275elementEnd()();
    i06.\u0275\u0275elementStart(55, "div", 8)(56, "mat-form-field", 9)(57, "mat-label");
    i06.\u0275\u0275text(58, "End Date");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275element(59, "input", 26);
    i06.\u0275\u0275elementStart(60, "mat-hint");
    i06.\u0275\u0275text(61, "MM/DD/YYYY");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275element(62, "mat-datepicker-toggle", 25)(63, "mat-datepicker", null, 5);
    i06.\u0275\u0275template(65, GoogleAdsFormComponent_mat_error_65_Template, 2, 0, "mat-error", 15)(66, GoogleAdsFormComponent_mat_error_66_Template, 2, 0, "mat-error", 15)(67, GoogleAdsFormComponent_mat_error_67_Template, 2, 0, "mat-error", 15);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(68, "mat-form-field", 9)(69, "mat-label");
    i06.\u0275\u0275text(70, "Budget");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275element(71, "input", 27);
    i06.\u0275\u0275template(72, GoogleAdsFormComponent_mat_error_72_Template, 2, 0, "mat-error", 15)(73, GoogleAdsFormComponent_mat_error_73_Template, 2, 0, "mat-error", 15);
    i06.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const adAccountsAuto_r9 = i06.\u0275\u0275reference(27);
    const chipGrid_r10 = i06.\u0275\u0275reference(35);
    const campaignsAuto_r11 = i06.\u0275\u0275reference(40);
    const startPicker_r12 = i06.\u0275\u0275reference(52);
    const endPicker_r13 = i06.\u0275\u0275reference(64);
    i06.\u0275\u0275property("ngIf", ctx.isLoading);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("formGroup", ctx.formGroup);
    i06.\u0275\u0275advance(14);
    i06.\u0275\u0275property("ngIf", (ctx.submitted || ctx.form["googleAdsPlatform"].touched) && ctx.form["googleAdsPlatform"].invalid);
    i06.\u0275\u0275advance(9);
    i06.\u0275\u0275property("matAutocomplete", adAccountsAuto_r9);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("ngIf", (ctx.submitted || ctx.form["googleAdsAccount"].touched) && ctx.form["googleAdsAccount"].invalid);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("displayWith", ctx.displayFn);
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275property("ngForOf", i06.\u0275\u0275pipeBind1(29, 24, ctx.adAccounts$));
    i06.\u0275\u0275advance(8);
    i06.\u0275\u0275property("ngForOf", ctx.campaigns);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("matChipInputFor", chipGrid_r10)("matAutocomplete", campaignsAuto_r11)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
    i06.\u0275\u0275advance(4);
    i06.\u0275\u0275property("ngForOf", i06.\u0275\u0275pipeBind1(42, 26, ctx.campaigns$));
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275property("ngIf", (ctx.form["googleAdsCampaign"].errors == null ? null : ctx.form["googleAdsCampaign"].errors["required"]) && (ctx.submitted || ctx.form["googleAdsCampaign"].touched));
    i06.\u0275\u0275advance(4);
    i06.\u0275\u0275property("matDatepicker", startPicker_r12);
    i06.\u0275\u0275advance(3);
    i06.\u0275\u0275property("for", startPicker_r12);
    i06.\u0275\u0275advance(3);
    i06.\u0275\u0275property("ngIf", ctx.form["googleAdsStartDate"].errors == null ? null : ctx.form["googleAdsStartDate"].errors["required"]);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("ngIf", ctx.form["googleAdsStartDate"].errors == null ? null : ctx.form["googleAdsStartDate"].errors["invalidDate"]);
    i06.\u0275\u0275advance(5);
    i06.\u0275\u0275property("matDatepicker", endPicker_r13);
    i06.\u0275\u0275advance(3);
    i06.\u0275\u0275property("for", endPicker_r13);
    i06.\u0275\u0275advance(3);
    i06.\u0275\u0275property("ngIf", ctx.form["googleAdsEndDate"].errors == null ? null : ctx.form["googleAdsEndDate"].errors["required"]);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("ngIf", ctx.form["googleAdsEndDate"].errors == null ? null : ctx.form["googleAdsEndDate"].errors["invalidDate"]);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("ngIf", ctx.form["googleAdsEndDate"].errors == null ? null : ctx.form["googleAdsEndDate"].errors["dateMismatch"]);
    i06.\u0275\u0275advance(5);
    i06.\u0275\u0275property("ngIf", (ctx.form["googleAdsBudget"].errors == null ? null : ctx.form["googleAdsBudget"].errors["required"]) && (ctx.submitted || ctx.form["googleAdsBudget"].touched));
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("ngIf", (ctx.form["googleAdsBudget"].errors == null ? null : ctx.form["googleAdsBudget"].errors["pattern"]) && (ctx.submitted || ctx.form["googleAdsBudget"].touched));
  }
}, dependencies: [CommonModule3, i63.NgForOf, i63.NgIf, i63.AsyncPipe, MatAutocompleteModule3, i73.MatAutocomplete, i83.MatOption, i73.MatAutocompleteTrigger, MatInputModule3, i93.MatInput, i103.MatFormField, i103.MatLabel, i103.MatHint, i103.MatError, i103.MatSuffix, MatDatepickerModule3, i113.MatDatepicker, i113.MatDatepickerInput, i113.MatDatepickerToggle, MatSelectModule3, i124.MatSelect, MatIconModule3, i134.MatIcon, MatCheckboxModule3, i143.MatCheckbox, MatChipsModule3, i153.MatChipGrid, i153.MatChipInput, i153.MatChipRemove, i153.MatChipRow, MatProgressSpinnerModule3, i163.MatProgressSpinner, FormsModule3, i18.\u0275NgNoValidate, i18.DefaultValueAccessor, i18.NgControlStatus, i18.NgControlStatusGroup, ReactiveFormsModule3, i18.FormGroupDirective, i18.FormControlName], styles: ["\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 3%;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n}\n.form-element[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.budget-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.budget-row[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n  flex: 0 1 49%;\n}\n.button[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.loader-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.mat-error[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=google-ads-form.component.css.map */"] });
var GoogleAdsFormComponent = _GoogleAdsFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(GoogleAdsFormComponent, { className: "GoogleAdsFormComponent" });
})();

// src/app/components/form/platforms/bing-form/bing-form.component.ts
import { Component as Component4, Inject as Inject4, ViewChild as ViewChild4, inject as inject5, Output as Output4, EventEmitter as EventEmitter4, Input as Input4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { Validators as Validators4, FormsModule as FormsModule4, ReactiveFormsModule as ReactiveFormsModule4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import { COMMA as COMMA4, ENTER as ENTER4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_cdk_keycodes.js?v=478e822e";
import { LiveAnnouncer as LiveAnnouncer4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_cdk_a11y.js?v=478e822e";
import { SelectionModel as SelectionModel4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_cdk_collections.js?v=478e822e";
import { MatAutocompleteModule as MatAutocompleteModule4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_autocomplete.js?v=478e822e";
import { MatInputModule as MatInputModule4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import { MatDatepickerModule as MatDatepickerModule4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_datepicker.js?v=478e822e";
import { MatSelectModule as MatSelectModule4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import { MatCheckboxModule as MatCheckboxModule4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_checkbox.js?v=478e822e";
import { MatIconModule as MatIconModule4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import { MatChipsModule as MatChipsModule4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_chips.js?v=478e822e";
import { MAT_DIALOG_DATA as MAT_DIALOG_DATA4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import { MatProgressSpinnerModule as MatProgressSpinnerModule4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_progress-spinner.js?v=478e822e";
import { of as of6, firstValueFrom as firstValueFrom5, BehaviorSubject as BehaviorSubject4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import { ToastrService as ToastrService5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import { getAuth as getAuth6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_auth.js?v=478e822e";
import * as i07 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i19 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import * as i44 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common_http.js?v=478e822e";
import * as i64 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_functions.js?v=478e822e";
import * as i74 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i84 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_autocomplete.js?v=478e822e";
import * as i94 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_core.js?v=478e822e";
import * as i104 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import * as i114 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import * as i125 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_datepicker.js?v=478e822e";
import * as i135 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import * as i144 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import * as i154 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_checkbox.js?v=478e822e";
import * as i164 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_chips.js?v=478e822e";
import * as i172 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_progress-spinner.js?v=478e822e";
var _c04 = ["campaignInput"];
function BingFormComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "div", 30);
    i07.\u0275\u0275element(1, "mat-spinner");
    i07.\u0275\u0275elementEnd();
  }
}
function BingFormComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-error");
    i07.\u0275\u0275text(1, " The field is required ");
    i07.\u0275\u0275elementEnd();
  }
}
function BingFormComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-error");
    i07.\u0275\u0275text(1, " The field is required ");
    i07.\u0275\u0275elementEnd();
  }
}
function BingFormComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-option", 31)(1, "span");
    i07.\u0275\u0275text(2);
    i07.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const customer_r2 = ctx.$implicit;
    i07.\u0275\u0275property("value", customer_r2);
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275textInterpolate(customer_r2.name);
  }
}
function BingFormComponent_mat_error_34_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-error");
    i07.\u0275\u0275text(1, " The field is required ");
    i07.\u0275\u0275elementEnd();
  }
}
function BingFormComponent_mat_option_37_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-option", 31)(1, "span");
    i07.\u0275\u0275text(2);
    i07.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const adAccount_r3 = ctx.$implicit;
    i07.\u0275\u0275property("value", adAccount_r3);
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275textInterpolate(adAccount_r3.name);
  }
}
function BingFormComponent_mat_chip_row_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i07.\u0275\u0275getCurrentView();
    i07.\u0275\u0275elementStart(0, "mat-chip-row", 32);
    i07.\u0275\u0275listener("removed", function BingFormComponent_mat_chip_row_45_Template_mat_chip_row_removed_0_listener() {
      const campaign_r5 = i07.\u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = i07.\u0275\u0275nextContext();
      return i07.\u0275\u0275resetView(ctx_r5.platformsCommon.remove(campaign_r5, ctx_r5.campaigns, ctx_r5.campaigns$, "id", ctx_r5.selection, ctx_r5.announcer));
    });
    i07.\u0275\u0275elementStart(1, "span");
    i07.\u0275\u0275text(2);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(3, "button", 33)(4, "mat-icon");
    i07.\u0275\u0275text(5, "cancel");
    i07.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const campaign_r5 = ctx.$implicit;
    const ctx_r5 = i07.\u0275\u0275nextContext();
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275textInterpolate(ctx_r5.combineAndTruncateName(campaign_r5, 25));
    i07.\u0275\u0275advance();
    i07.\u0275\u0275attribute("aria-label", "remove " + campaign_r5.displayName);
  }
}
function BingFormComponent_mat_option_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = i07.\u0275\u0275getCurrentView();
    i07.\u0275\u0275elementStart(0, "mat-option", 31)(1, "mat-checkbox", 34);
    i07.\u0275\u0275listener("click", function BingFormComponent_mat_option_50_Template_mat_checkbox_click_1_listener($event) {
      const campaign_r9 = i07.\u0275\u0275restoreView(_r8).$implicit;
      const ctx_r5 = i07.\u0275\u0275nextContext();
      const campaignInput_r7 = i07.\u0275\u0275reference(47);
      $event.stopPropagation();
      return i07.\u0275\u0275resetView(ctx_r5.platformsCommon.toggleSelection(ctx_r5.campaigns, campaign_r9, "bingCampaign", "id", ctx_r5.formGroup, ctx_r5.selection, campaignInput_r7));
    });
    i07.\u0275\u0275text(2);
    i07.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const campaign_r9 = ctx.$implicit;
    i07.\u0275\u0275property("value", campaign_r9);
    i07.\u0275\u0275advance();
    i07.\u0275\u0275property("checked", campaign_r9.selected);
    i07.\u0275\u0275advance();
    i07.\u0275\u0275textInterpolate2(" ", campaign_r9.name, " | ", campaign_r9.id, " ");
  }
}
function BingFormComponent_mat_hint_52_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-hint")(1, "span", 35);
    i07.\u0275\u0275text(2, "At least one campaign must be selected");
    i07.\u0275\u0275elementEnd()();
  }
}
function BingFormComponent_mat_error_62_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-error");
    i07.\u0275\u0275text(1, " This field is required. ");
    i07.\u0275\u0275elementEnd();
  }
}
function BingFormComponent_mat_error_63_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-error");
    i07.\u0275\u0275text(1, " Please enter a valid date. ");
    i07.\u0275\u0275elementEnd();
  }
}
function BingFormComponent_mat_error_74_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-error");
    i07.\u0275\u0275text(1, " This field is required. ");
    i07.\u0275\u0275elementEnd();
  }
}
function BingFormComponent_mat_error_75_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-error");
    i07.\u0275\u0275text(1, " Please enter a valid date. ");
    i07.\u0275\u0275elementEnd();
  }
}
function BingFormComponent_mat_error_76_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-error");
    i07.\u0275\u0275text(1, " End date must be after or equal to start date. ");
    i07.\u0275\u0275elementEnd();
  }
}
function BingFormComponent_mat_error_81_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-error");
    i07.\u0275\u0275text(1, " The field is required ");
    i07.\u0275\u0275elementEnd();
  }
}
function BingFormComponent_mat_error_82_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "mat-error");
    i07.\u0275\u0275text(1, " Please enter a valid number ");
    i07.\u0275\u0275elementEnd();
  }
}
var _BingFormComponent = class _BingFormComponent {
  constructor(formBuilder, auth, externalPlatforms, data, http, platformsCommon, cdRef, fns) {
    this.formBuilder = formBuilder;
    this.auth = auth;
    this.externalPlatforms = externalPlatforms;
    this.data = data;
    this.http = http;
    this.platformsCommon = platformsCommon;
    this.cdRef = cdRef;
    this.fns = fns;
    this.platformChange = new EventEmitter4();
    this.platformIndex = 0;
    this.submitted = false;
    this.isEditMode = false;
    this.documentId = null;
    this.toaster = inject5(ToastrService5);
    this.isLoading = false;
    this.adAccounts = [];
    this.adAccountsSubject = new BehaviorSubject4([]);
    this.adAccounts$ = this.adAccountsSubject.asObservable();
    this.customers = [];
    this.customersSubject = new BehaviorSubject4([]);
    this.customers$ = this.customersSubject.asObservable();
    this.campaigns = [];
    this.separatorKeysCodes = [ENTER4, COMMA4];
    this.selection = new SelectionModel4(true, []);
    this.announcer = inject5(LiveAnnouncer4);
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.documentId = data.id;
    }
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (this.isEditMode && this.data.platforms[this.platformIndex]) {
        this.data = this.data.platforms[this.platformIndex].formData;
      }
      this.createForm();
      yield this.getCustomers();
    });
  }
  createForm() {
    return __async(this, null, function* () {
      this.formGroup = this.formBuilder.group({
        bingLabel: [this.data?.bingLabel || null],
        bingCustomer: [this.data?.bingCustomer || null, [Validators4.required]],
        bingAccount: [this.data?.bingAccount || null, [Validators4.required]],
        bingCampaign: [this.data?.bingCampaign || [], [Validators4.required, this.platformsCommon.campaignSelectionValidator()]],
        bingPlatform: ["bing", [Validators4.required]],
        bingStartDate: [this.data?.bingStartDate ? new Date(this.data.bingStartDate) : null, [Validators4.required, this.platformsCommon.isValidDate()]],
        bingEndDate: [this.data?.bingEndDate ? new Date(this.data.bingEndDate) : null, [Validators4.required, this.platformsCommon.isValidDate()]],
        bingBudget: [this.data?.bingBudget || null, [Validators4.required, Validators4.pattern(/^\d+\.?\d*$/)]]
      });
      const startDateControl = this.formGroup.get("bingStartDate");
      const endDateControl = this.formGroup.get("bingEndDate");
      if (startDateControl && endDateControl) {
        endDateControl.setValidators([
          ...endDateControl.validator ? [endDateControl.validator] : [],
          this.platformsCommon.startDateBeforeEndDate(startDateControl)
        ]);
        endDateControl.updateValueAndValidity();
      }
      if (this.isEditMode) {
        yield this.getCustomers();
        this.getAdAccountCampaigns(2, void 0, true);
      }
      this.cdRef.detectChanges();
    });
  }
  extractCustomers(data) {
    let customersInfo;
    try {
      customersInfo = data["s:Envelope"]["s:Body"][0]["GetCustomersInfoResponse"][0]["CustomersInfo"][0]["a:CustomerInfo"];
    } catch (error) {
      throw new Error(data.result["s:Envelope"]["s:Body"][0]["s:Fault"][0].detail[0].AdApiFaultDetail[0].Errors[0].AdApiError[0].Message[0]);
    }
    const customersList = customersInfo.map((customer) => ({
      id: customer["a:Id"][0],
      name: customer["a:Name"][0]
    }));
    customersList.sort((a, b) => a.name.localeCompare(b.name));
    return customersList;
  }
  extractAccounts(data) {
    const accountsInfo = data["s:Envelope"]["s:Body"][0]["GetAccountsInfoResponse"][0]["AccountsInfo"][0]["a:AccountInfo"];
    const accountsList = accountsInfo.map((account) => ({
      id: account["a:Id"][0],
      name: account["a:Name"][0],
      number: account["a:Number"][0],
      accountLifeCycleStatus: account["a:AccountLifeCycleStatus"][0],
      pauseReason: account["a:PauseReason"][0]["$"]["i:nil"] === "true" ? null : account["a:PauseReason"][0]["_"]
    }));
    accountsList.sort((a, b) => a.name.localeCompare(b.name));
    return accountsList;
  }
  extractCampaigns(data) {
    const campaignsInfo = data["s:Envelope"]["s:Body"][0]["GetCampaignsByAccountIdResponse"][0]["Campaigns"][0]["Campaign"];
    const campaignsData = campaignsInfo.map((campaign) => ({
      id: campaign["Id"][0],
      name: campaign["Name"][0],
      status: campaign["Status"][0],
      budgetType: campaign["BudgetType"][0],
      dailyBudget: campaign["DailyBudget"][0],
      timeZone: campaign["TimeZone"][0],
      campaignType: campaign["CampaignType"][0],
      languages: campaign["Languages"] && campaign["Languages"][0]["a:string"] ? campaign["Languages"][0]["a:string"] : [],
      customParameters: campaign["UrlCustomParameters"] ? this.extractCustomParameters(campaign["UrlCustomParameters"][0]) : []
    }));
    campaignsData.sort((a, b) => a.name.localeCompare(b.name));
    return campaignsData;
  }
  extractCustomParameters(customParams) {
    if (customParams && customParams.Parameters && customParams.Parameters[0] && customParams.Parameters[0].CustomParameter) {
      return customParams.Parameters[0].CustomParameter.map((param) => ({
        key: param.Key[0],
        value: param.Value[0]
      }));
    }
    return [];
  }
  getCustomers(retryCount = 2) {
    return __async(this, null, function* () {
      this.isLoading = true;
      const cachedData = localStorage.getItem("customers");
      if (cachedData) {
        this.customers = JSON.parse(cachedData);
        this.customersSubject.next(this.customers);
        this.customers$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, "bingCustomer", "name", localStorage.getItem("customers"));
        this.isLoading = false;
        return;
      }
      try {
        const callable = this.fns.httpsCallable("getBingCustomers");
        const result = yield firstValueFrom5(callable({ accessToken: localStorage.getItem("microsoftAccessToken") }));
        this.customers = this.extractCustomers(result);
        this.customersSubject.next(this.customers);
        this.originalCustomers$ = of6(this.customers);
        localStorage.setItem("customers", JSON.stringify(this.customers));
        this.customers$ = this.platformsCommon.setupFilteringWithRetry(this.formGroup, "bingCustomer", "name", localStorage.getItem("customers"));
        this.isLoading = false;
      } catch (error) {
        if (retryCount > 0) {
          yield this.externalPlatforms.handleMicrosoftError();
          return this.getCustomers(retryCount - 1);
        } else {
          console.error(error);
          this.toaster.error(error, "Error");
          this.isLoading = false;
        }
      }
    });
  }
  getAdAccounts(retryCount = 2, event) {
    return __async(this, null, function* () {
      this.isLoading = true;
      let customer = null;
      if (event) {
        customer = event.option.value;
      } else {
        customer = this.data?.bingCustomer;
      }
      this.formGroup.patchValue({
        bingAccount: null,
        bingStartDate: null,
        bingEndDate: null,
        bingCampaign: []
      });
      this.campaigns = [];
      try {
        const callable = this.fns.httpsCallable("getBingAccounts");
        const result = yield firstValueFrom5(callable({ accessToken: localStorage.getItem("microsoftAccessToken"), customerId: customer.id }));
        this.adAccounts = this.extractAccounts(result);
        this.adAccountsSubject.next(this.adAccounts);
        this.originalAdAccounts$ = of6(this.adAccounts);
        this.adAccounts$ = this.platformsCommon.setupFiltering(this.formGroup, "bingAccount", this.originalAdAccounts$, "name");
        this.isLoading = false;
      } catch (error) {
        if (retryCount > 0) {
          yield this.externalPlatforms.handleMicrosoftError();
          return this.getAdAccounts(retryCount - 1, event);
        } else {
          console.error(error);
          this.toaster.error("An error occurred while fetching Bing accounts", "Error");
          this.isLoading = false;
        }
      }
    });
  }
  getAdAccountCampaigns(retryCount = 2, event, edit) {
    return __async(this, null, function* () {
      this.isLoading = true;
      let adAccount = null;
      if (event) {
        adAccount = event.option.value;
      } else {
        adAccount = this.data?.bingAccount;
      }
      if (!adAccount) {
        this.isLoading = false;
        return;
      }
      adAccount = adAccount.id;
      if (!edit) {
        this.formGroup.patchValue({
          bingCampaign: [],
          bingStartDate: null,
          bingEndDate: null,
          bingBudget: null
        });
        this.campaigns = [];
      } else {
        this.campaigns = this.data?.bingCampaign;
      }
      try {
        const customerId = this.formGroup.value.bingCustomer.id;
        const callable = this.fns.httpsCallable("getBingCampaigns");
        const result = yield firstValueFrom5(callable({ accessToken: localStorage.getItem("microsoftAccessToken"), customerId, accountId: adAccount }));
        const sortedCampaigns = this.extractCampaigns(result);
        this.campaigns$ = of6(sortedCampaigns);
        this.originalCampaigns$ = of6(sortedCampaigns);
        this.campaigns$ = this.platformsCommon.setupFiltering(this.formGroup, "bingCampaign", this.originalCampaigns$, "name");
        this.isLoading = false;
      } catch (error) {
        if (retryCount > 0) {
          yield this.externalPlatforms.handleMicrosoftError();
          return this.getAdAccountCampaigns(retryCount - 1, event);
        } else {
          console.error(error);
          this.toaster.error("An error occurred while fetching Bing campaigns", "Error");
          this.isLoading = false;
        }
      }
    });
  }
  get form() {
    return this.formGroup ? this.formGroup.controls : {};
  }
  displayFn(account) {
    return account && account && account.name ? account.name : "";
  }
  combineAndTruncateName(campaign, num) {
    const combinedName = `${campaign.name} | ${campaign.id}`;
    return this.platformsCommon.truncateName(combinedName, num);
  }
  refreshData() {
    localStorage.removeItem("customers");
    this.formGroup.patchValue({
      bingLabel: null,
      bingCustomer: null,
      bingAccount: null,
      bingStartDate: null,
      bingEndDate: null,
      bingBudget: null,
      bingCampaign: []
    });
    this.originalCampaigns$ = of6([]);
    this.campaigns$ = of6([]);
    this.campaigns = [];
    this.selection.clear();
  }
  getFormData() {
    if (this.formGroup.valid) {
      const user = getAuth6().currentUser;
      if (user) {
        const formData = __spreadProps(__spreadValues({}, this.formGroup.value), {
          bingStartDate: this.platformsCommon.formatDate(this.formGroup.value.bingStartDate),
          bingEndDate: this.platformsCommon.formatDate(this.formGroup.value.bingEndDate),
          userId: user.uid
        });
        return formData;
      } else {
        throw new Error("User not logged in");
      }
    } else {
      this.platformsCommon.validateAllFormFields(this.formGroup);
      return null;
    }
  }
  changePlatform(newPlatform) {
    this.platformChange.emit(newPlatform);
  }
};
_BingFormComponent.\u0275fac = function BingFormComponent_Factory(t) {
  return new (t || _BingFormComponent)(i07.\u0275\u0275directiveInject(i19.FormBuilder), i07.\u0275\u0275directiveInject(AuthService), i07.\u0275\u0275directiveInject(ExternalPlatformsService), i07.\u0275\u0275directiveInject(MAT_DIALOG_DATA4), i07.\u0275\u0275directiveInject(i44.HttpClient), i07.\u0275\u0275directiveInject(CommonService), i07.\u0275\u0275directiveInject(i07.ChangeDetectorRef), i07.\u0275\u0275directiveInject(i64.AngularFireFunctions));
};
_BingFormComponent.\u0275cmp = /* @__PURE__ */ i07.\u0275\u0275defineComponent({ type: _BingFormComponent, selectors: [["app-bing-form"]], viewQuery: function BingFormComponent_Query(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275viewQuery(_c04, 5);
  }
  if (rf & 2) {
    let _t;
    i07.\u0275\u0275queryRefresh(_t = i07.\u0275\u0275loadQuery()) && (ctx.campaignInput = _t.first);
  }
}, inputs: { platformIndex: "platformIndex" }, outputs: { platformChange: "platformChange" }, standalone: true, features: [i07.\u0275\u0275StandaloneFeature], decls: 83, vars: 34, consts: [["customersAuto", "matAutocomplete"], ["adAccountsAuto", "matAutocomplete"], ["chipGrid", ""], ["campaignInput", ""], ["campaignsAuto", "matAutocomplete"], ["startPicker", ""], ["endPicker", ""], ["class", "loader-overlay", 4, "ngIf"], [1, "form", 3, "formGroup"], [1, "form-row"], [1, "form-element"], ["formControlName", "bingPlatform", 3, "selectionChange"], ["value", "dv360"], ["value", "facebook"], ["value", "googleAds"], ["value", "bing", "disabled", ""], [4, "ngIf"], ["matInput", "", "formControlName", "bingLabel"], ["type", "text", "placeholder", "Select your customer", "formControlName", "bingCustomer", "aria-label", "customer", "matInput", "", 3, "matAutocomplete"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Select your ad account", "formControlName", "bingAccount", "aria-label", "ad account", "matInput", "", 3, "matAutocomplete"], ["aria-label", "Campaign Selection"], [3, "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Select your campaigns", "formControlName", "bingCampaign", 3, "matChipInputTokenEnd", "matChipInputFor", "matAutocomplete", "matChipInputSeparatorKeyCodes"], [3, "optionSelected"], ["matInput", "", "formControlName", "bingStartDate", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["matInput", "", "formControlName", "bingEndDate", 3, "matDatepicker"], ["matInput", "", "formControlName", "bingBudget"], [1, "loader-overlay"], [3, "value"], [3, "removed"], ["matChipRemove", "", 1, "mat-chip-remove"], [3, "click", "checked"], [1, "mat-error"]], template: function BingFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i07.\u0275\u0275getCurrentView();
    i07.\u0275\u0275template(0, BingFormComponent_div_0_Template, 2, 0, "div", 7);
    i07.\u0275\u0275elementStart(1, "form", 8)(2, "div", 9)(3, "mat-form-field", 10)(4, "mat-label");
    i07.\u0275\u0275text(5, "Platform");
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(6, "mat-select", 11);
    i07.\u0275\u0275listener("selectionChange", function BingFormComponent_Template_mat_select_selectionChange_6_listener($event) {
      i07.\u0275\u0275restoreView(_r1);
      return i07.\u0275\u0275resetView(ctx.changePlatform($event.value));
    });
    i07.\u0275\u0275elementStart(7, "mat-option", 12);
    i07.\u0275\u0275text(8, "Display & Video 360");
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(9, "mat-option", 13);
    i07.\u0275\u0275text(10, "Facebook");
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(11, "mat-option", 14);
    i07.\u0275\u0275text(12, "Google Ads");
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(13, "mat-option", 15);
    i07.\u0275\u0275text(14, "Bing");
    i07.\u0275\u0275elementEnd()();
    i07.\u0275\u0275template(15, BingFormComponent_mat_error_15_Template, 2, 0, "mat-error", 16);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(16, "mat-form-field", 10)(17, "mat-label");
    i07.\u0275\u0275text(18, "Label");
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275element(19, "input", 17);
    i07.\u0275\u0275elementEnd()();
    i07.\u0275\u0275elementStart(20, "div", 9)(21, "mat-form-field", 10)(22, "mat-label");
    i07.\u0275\u0275text(23, "Customer");
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275element(24, "input", 18);
    i07.\u0275\u0275template(25, BingFormComponent_mat_error_25_Template, 2, 0, "mat-error", 16);
    i07.\u0275\u0275elementStart(26, "mat-autocomplete", 19, 0);
    i07.\u0275\u0275listener("optionSelected", function BingFormComponent_Template_mat_autocomplete_optionSelected_26_listener($event) {
      i07.\u0275\u0275restoreView(_r1);
      return i07.\u0275\u0275resetView(ctx.getAdAccounts(2, $event));
    });
    i07.\u0275\u0275template(28, BingFormComponent_mat_option_28_Template, 3, 2, "mat-option", 20);
    i07.\u0275\u0275pipe(29, "async");
    i07.\u0275\u0275elementEnd()();
    i07.\u0275\u0275elementStart(30, "mat-form-field", 10)(31, "mat-label");
    i07.\u0275\u0275text(32, "Ad account");
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275element(33, "input", 21);
    i07.\u0275\u0275template(34, BingFormComponent_mat_error_34_Template, 2, 0, "mat-error", 16);
    i07.\u0275\u0275elementStart(35, "mat-autocomplete", 19, 1);
    i07.\u0275\u0275listener("optionSelected", function BingFormComponent_Template_mat_autocomplete_optionSelected_35_listener($event) {
      i07.\u0275\u0275restoreView(_r1);
      return i07.\u0275\u0275resetView(ctx.getAdAccountCampaigns(2, $event));
    });
    i07.\u0275\u0275template(37, BingFormComponent_mat_option_37_Template, 3, 2, "mat-option", 20);
    i07.\u0275\u0275pipe(38, "async");
    i07.\u0275\u0275elementEnd()()();
    i07.\u0275\u0275elementStart(39, "div", 9)(40, "mat-form-field", 10)(41, "mat-label");
    i07.\u0275\u0275text(42, "Campaign*");
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(43, "mat-chip-grid", 22, 2);
    i07.\u0275\u0275template(45, BingFormComponent_mat_chip_row_45_Template, 6, 2, "mat-chip-row", 23);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(46, "input", 24, 3);
    i07.\u0275\u0275listener("matChipInputTokenEnd", function BingFormComponent_Template_input_matChipInputTokenEnd_46_listener($event) {
      i07.\u0275\u0275restoreView(_r1);
      return i07.\u0275\u0275resetView(ctx.platformsCommon.add($event, ctx.campaigns, ctx.formGroup, "bingCampaign"));
    });
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(48, "mat-autocomplete", 25, 4);
    i07.\u0275\u0275listener("optionSelected", function BingFormComponent_Template_mat_autocomplete_optionSelected_48_listener($event) {
      i07.\u0275\u0275restoreView(_r1);
      const campaignInput_r7 = i07.\u0275\u0275reference(47);
      return i07.\u0275\u0275resetView(ctx.platformsCommon.selected($event, ctx.campaigns, ctx.formGroup, "bingCampaign", ctx.selection, ctx.announcer, campaignInput_r7));
    });
    i07.\u0275\u0275template(50, BingFormComponent_mat_option_50_Template, 3, 4, "mat-option", 20);
    i07.\u0275\u0275pipe(51, "async");
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275template(52, BingFormComponent_mat_hint_52_Template, 3, 0, "mat-hint", 16);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(53, "mat-form-field", 10)(54, "mat-label");
    i07.\u0275\u0275text(55, "Start Date");
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275element(56, "input", 26);
    i07.\u0275\u0275elementStart(57, "mat-hint");
    i07.\u0275\u0275text(58, "MM/DD/YYYY");
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275element(59, "mat-datepicker-toggle", 27)(60, "mat-datepicker", null, 5);
    i07.\u0275\u0275template(62, BingFormComponent_mat_error_62_Template, 2, 0, "mat-error", 16)(63, BingFormComponent_mat_error_63_Template, 2, 0, "mat-error", 16);
    i07.\u0275\u0275elementEnd()();
    i07.\u0275\u0275elementStart(64, "div", 9)(65, "mat-form-field", 10)(66, "mat-label");
    i07.\u0275\u0275text(67, "End Date");
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275element(68, "input", 28);
    i07.\u0275\u0275elementStart(69, "mat-hint");
    i07.\u0275\u0275text(70, "MM/DD/YYYY");
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275element(71, "mat-datepicker-toggle", 27)(72, "mat-datepicker", null, 6);
    i07.\u0275\u0275template(74, BingFormComponent_mat_error_74_Template, 2, 0, "mat-error", 16)(75, BingFormComponent_mat_error_75_Template, 2, 0, "mat-error", 16)(76, BingFormComponent_mat_error_76_Template, 2, 0, "mat-error", 16);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(77, "mat-form-field", 10)(78, "mat-label");
    i07.\u0275\u0275text(79, "Budget");
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275element(80, "input", 29);
    i07.\u0275\u0275template(81, BingFormComponent_mat_error_81_Template, 2, 0, "mat-error", 16)(82, BingFormComponent_mat_error_82_Template, 2, 0, "mat-error", 16);
    i07.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const customersAuto_r10 = i07.\u0275\u0275reference(27);
    const adAccountsAuto_r11 = i07.\u0275\u0275reference(36);
    const chipGrid_r12 = i07.\u0275\u0275reference(44);
    const campaignsAuto_r13 = i07.\u0275\u0275reference(49);
    const startPicker_r14 = i07.\u0275\u0275reference(61);
    const endPicker_r15 = i07.\u0275\u0275reference(73);
    i07.\u0275\u0275property("ngIf", ctx.isLoading);
    i07.\u0275\u0275advance();
    i07.\u0275\u0275property("formGroup", ctx.formGroup);
    i07.\u0275\u0275advance(14);
    i07.\u0275\u0275property("ngIf", (ctx.submitted || ctx.form["bingPlatform"].touched) && ctx.form["bingPlatform"].invalid);
    i07.\u0275\u0275advance(9);
    i07.\u0275\u0275property("matAutocomplete", customersAuto_r10);
    i07.\u0275\u0275advance();
    i07.\u0275\u0275property("ngIf", (ctx.submitted || ctx.form["bingCustomer"].touched) && ctx.form["bingCustomer"].invalid);
    i07.\u0275\u0275advance();
    i07.\u0275\u0275property("displayWith", ctx.displayFn);
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275property("ngForOf", i07.\u0275\u0275pipeBind1(29, 28, ctx.customers$));
    i07.\u0275\u0275advance(5);
    i07.\u0275\u0275property("matAutocomplete", adAccountsAuto_r11);
    i07.\u0275\u0275advance();
    i07.\u0275\u0275property("ngIf", (ctx.submitted || ctx.form["bingAccount"].touched) && ctx.form["bingAccount"].invalid);
    i07.\u0275\u0275advance();
    i07.\u0275\u0275property("displayWith", ctx.displayFn);
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275property("ngForOf", i07.\u0275\u0275pipeBind1(38, 30, ctx.adAccounts$));
    i07.\u0275\u0275advance(8);
    i07.\u0275\u0275property("ngForOf", ctx.campaigns);
    i07.\u0275\u0275advance();
    i07.\u0275\u0275property("matChipInputFor", chipGrid_r12)("matAutocomplete", campaignsAuto_r13)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
    i07.\u0275\u0275advance(4);
    i07.\u0275\u0275property("ngForOf", i07.\u0275\u0275pipeBind1(51, 32, ctx.campaigns$));
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275property("ngIf", (ctx.form["bingCampaign"].errors == null ? null : ctx.form["bingCampaign"].errors["required"]) && (ctx.submitted || ctx.form["bingCampaign"].touched));
    i07.\u0275\u0275advance(4);
    i07.\u0275\u0275property("matDatepicker", startPicker_r14);
    i07.\u0275\u0275advance(3);
    i07.\u0275\u0275property("for", startPicker_r14);
    i07.\u0275\u0275advance(3);
    i07.\u0275\u0275property("ngIf", ctx.form["bingStartDate"].errors == null ? null : ctx.form["bingStartDate"].errors["required"]);
    i07.\u0275\u0275advance();
    i07.\u0275\u0275property("ngIf", ctx.form["bingStartDate"].errors == null ? null : ctx.form["bingStartDate"].errors["invalidDate"]);
    i07.\u0275\u0275advance(5);
    i07.\u0275\u0275property("matDatepicker", endPicker_r15);
    i07.\u0275\u0275advance(3);
    i07.\u0275\u0275property("for", endPicker_r15);
    i07.\u0275\u0275advance(3);
    i07.\u0275\u0275property("ngIf", ctx.form["bingEndDate"].errors == null ? null : ctx.form["bingEndDate"].errors["required"]);
    i07.\u0275\u0275advance();
    i07.\u0275\u0275property("ngIf", ctx.form["bingEndDate"].errors == null ? null : ctx.form["bingEndDate"].errors["invalidDate"]);
    i07.\u0275\u0275advance();
    i07.\u0275\u0275property("ngIf", ctx.form["bingEndDate"].errors == null ? null : ctx.form["bingEndDate"].errors["dateMismatch"]);
    i07.\u0275\u0275advance(5);
    i07.\u0275\u0275property("ngIf", (ctx.form["bingBudget"].errors == null ? null : ctx.form["bingBudget"].errors["required"]) && (ctx.submitted || ctx.form["bingBudget"].touched));
    i07.\u0275\u0275advance();
    i07.\u0275\u0275property("ngIf", (ctx.form["bingBudget"].errors == null ? null : ctx.form["bingBudget"].errors["pattern"]) && (ctx.submitted || ctx.form["bingBudget"].touched));
  }
}, dependencies: [CommonModule4, i74.NgForOf, i74.NgIf, i74.AsyncPipe, MatAutocompleteModule4, i84.MatAutocomplete, i94.MatOption, i84.MatAutocompleteTrigger, MatInputModule4, i104.MatInput, i114.MatFormField, i114.MatLabel, i114.MatHint, i114.MatError, i114.MatSuffix, MatDatepickerModule4, i125.MatDatepicker, i125.MatDatepickerInput, i125.MatDatepickerToggle, MatSelectModule4, i135.MatSelect, MatIconModule4, i144.MatIcon, MatCheckboxModule4, i154.MatCheckbox, MatChipsModule4, i164.MatChipGrid, i164.MatChipInput, i164.MatChipRemove, i164.MatChipRow, MatProgressSpinnerModule4, i172.MatProgressSpinner, FormsModule4, i19.\u0275NgNoValidate, i19.DefaultValueAccessor, i19.NgControlStatus, i19.NgControlStatusGroup, ReactiveFormsModule4, i19.FormGroupDirective, i19.FormControlName], styles: ["\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 3%;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n}\n.form-element[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.budget-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.budget-row[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n  flex: 0 1 49%;\n}\n.button[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.loader-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.mat-error[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=bing-form.component.css.map */"] });
var BingFormComponent = _BingFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassDebugInfo(BingFormComponent, { className: "BingFormComponent" });
})();

// src/app/components/form/subaccount/subaccount.component.ts
import { Component as Component5, Inject as Inject5, inject as inject6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { Validators as Validators5, FormsModule as FormsModule5, ReactiveFormsModule as ReactiveFormsModule5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import { MatInputModule as MatInputModule5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import { MatSelectModule as MatSelectModule5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import { MAT_DIALOG_DATA as MAT_DIALOG_DATA5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import { MatButtonModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import { ToastrService as ToastrService6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import * as i08 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i110 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import * as i23 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import * as i32 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
import * as i5 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i65 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import * as i75 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import * as i85 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
function SubaccountComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275elementStart(0, "mat-error");
    i08.\u0275\u0275text(1, " Name is required. ");
    i08.\u0275\u0275elementEnd();
  }
}
var _SubaccountComponent = class _SubaccountComponent {
  constructor(dialogRef, formBuilder, data, db, commonService) {
    this.dialogRef = dialogRef;
    this.formBuilder = formBuilder;
    this.data = data;
    this.db = db;
    this.commonService = commonService;
    this.isEditMode = false;
    this.documentId = null;
    this.toaster = inject6(ToastrService6);
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.originalData = data;
      this.documentId = data.id;
    }
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.createForm();
    });
  }
  createForm() {
    return __async(this, null, function* () {
      this.formGroup = this.formBuilder.group({
        name: [this.data?.name || null, [Validators5.required]]
      });
    });
  }
  saveSubaccount() {
    return __async(this, null, function* () {
      if (this.formGroup.valid) {
        const newName = this.formGroup.get("name")?.value;
        const newSubaccountData = {
          name: newName,
          accountId: this.commonService.selectedAccountId
        };
        const db = this.db.firestore;
        if (this.documentId) {
          return db.runTransaction((transaction) => __async(this, null, function* () {
            const subaccountRef = db.doc(`subaccount/${this.documentId}`);
            const userSearchRef = db.collection("userSearch").where("subaccount.id", "==", this.documentId);
            transaction.update(subaccountRef, newSubaccountData);
            const snapshot = yield userSearchRef.get();
            snapshot.forEach((doc5) => {
              transaction.update(doc5.ref, { "subaccount.name": newName });
            });
            return Promise.resolve();
          })).then(() => {
            this.dialogRef.close(true);
          }).catch((error) => {
            console.error("Failed to update subaccount:", error);
            this.toaster.error("Failed to update subaccount.");
          });
        } else {
          return db.runTransaction((transaction) => __async(this, null, function* () {
            const subaccountRef = db.collection("subaccount").doc();
            this.documentId = subaccountRef.id;
            transaction.set(subaccountRef, newSubaccountData);
            return Promise.resolve(newSubaccountData);
          })).then((newSubaccount) => {
            this.dialogRef.close(__spreadProps(__spreadValues({}, newSubaccount), { id: this.documentId }));
          }).catch((error) => {
            console.error("Failed to create subaccount:", error);
            this.toaster.error("Failed to create subaccount.");
          });
        }
      } else {
        this.toaster.error("Please fill the name.");
        return Promise.reject(new Error("Validation failed, name is required"));
      }
    });
  }
  onCancel() {
    this.dialogRef.close();
  }
};
_SubaccountComponent.\u0275fac = function SubaccountComponent_Factory(t) {
  return new (t || _SubaccountComponent)(i08.\u0275\u0275directiveInject(i110.MatDialogRef), i08.\u0275\u0275directiveInject(i23.FormBuilder), i08.\u0275\u0275directiveInject(MAT_DIALOG_DATA5), i08.\u0275\u0275directiveInject(i32.AngularFirestore), i08.\u0275\u0275directiveInject(CommonService));
};
_SubaccountComponent.\u0275cmp = /* @__PURE__ */ i08.\u0275\u0275defineComponent({ type: _SubaccountComponent, selectors: [["app-subaccount"]], standalone: true, features: [i08.\u0275\u0275StandaloneFeature], decls: 15, vars: 4, consts: [[1, "form", 3, "formGroup"], [1, "form-row"], ["appearance", "outline", 1, "form-element"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], [1, "form-element"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "button", "form-button", 3, "click"], ["mat-raised-button", "", 1, "button", 3, "click"]], template: function SubaccountComponent_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275elementStart(0, "form", 0)(1, "h1");
    i08.\u0275\u0275text(2);
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(3, "div", 1)(4, "mat-form-field", 2)(5, "mat-label");
    i08.\u0275\u0275text(6, "Name");
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275element(7, "input", 3);
    i08.\u0275\u0275template(8, SubaccountComponent_mat_error_8_Template, 2, 0, "mat-error", 4);
    i08.\u0275\u0275elementEnd()();
    i08.\u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
    i08.\u0275\u0275listener("click", function SubaccountComponent_Template_button_click_10_listener() {
      return ctx.saveSubaccount();
    });
    i08.\u0275\u0275text(11);
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275text(12, " \xA0 ");
    i08.\u0275\u0275elementStart(13, "button", 7);
    i08.\u0275\u0275listener("click", function SubaccountComponent_Template_button_click_13_listener() {
      return ctx.onCancel();
    });
    i08.\u0275\u0275text(14, "Cancel");
    i08.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    i08.\u0275\u0275property("formGroup", ctx.formGroup);
    i08.\u0275\u0275advance(2);
    i08.\u0275\u0275textInterpolate(ctx.isEditMode ? "Edit " + ctx.originalData.name : "Create subaccount");
    i08.\u0275\u0275advance(6);
    i08.\u0275\u0275property("ngIf", (tmp_2_0 = ctx.formGroup.get("name")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    i08.\u0275\u0275advance(3);
    i08.\u0275\u0275textInterpolate(ctx.isEditMode ? "Edit" : "Save");
  }
}, dependencies: [
  CommonModule5,
  i5.NgIf,
  ReactiveFormsModule5,
  i23.\u0275NgNoValidate,
  i23.DefaultValueAccessor,
  i23.NgControlStatus,
  i23.NgControlStatusGroup,
  i23.FormGroupDirective,
  i23.FormControlName,
  FormsModule5,
  MatInputModule5,
  i65.MatInput,
  i75.MatFormField,
  i75.MatLabel,
  i75.MatError,
  MatSelectModule5,
  MatButtonModule,
  i85.MatButton
], styles: ["\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 3%;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n}\n.form-element[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.button[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n/*# sourceMappingURL=subaccount.component.css.map */"] });
var SubaccountComponent = _SubaccountComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassDebugInfo(SubaccountComponent, { className: "SubaccountComponent" });
})();

// src/app/components/dialog/dialog.component.ts
import { ToastrService as ToastrService10 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import { of as of8 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import { map as map2, startWith as startWith2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs_operators.js?v=478e822e";
import { MAT_DIALOG_DATA as MAT_DIALOG_DATA6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import { MatButtonModule as MatButtonModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import { MatIconModule as MatIconModule5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import { MatSelectModule as MatSelectModule6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import { MatProgressSpinnerModule as MatProgressSpinnerModule5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_progress-spinner.js?v=478e822e";
import { MatTabsModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_tabs.js?v=478e822e";
import { MatInputModule as MatInputModule6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import { MatAutocompleteModule as MatAutocompleteModule5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_autocomplete.js?v=478e822e";
import * as i014 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i119 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";

// src/app/services/reports/dv360/dv360-report.service.ts
import { Injectable as Injectable4, inject as inject7 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { firstValueFrom as firstValueFrom6, of as of7 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import { catchError as catchError2, tap } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs_operators.js?v=478e822e";
import { getAuth as getAuth7 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_auth.js?v=478e822e";
import { ToastrService as ToastrService7 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import __vite__cjsImport194_momentTimezone from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/moment-timezone.js?v=478e822e"; const moment2 = __vite__cjsImport194_momentTimezone.__esModule ? __vite__cjsImport194_momentTimezone.default : __vite__cjsImport194_momentTimezone;
import * as i09 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i111 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common_http.js?v=478e822e";
import * as i24 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_functions.js?v=478e822e";
import * as i33 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
var _DV360ReportService = class _DV360ReportService {
  constructor(http, fns, db, externalPlatforms, commonService) {
    this.http = http;
    this.fns = fns;
    this.db = db;
    this.externalPlatforms = externalPlatforms;
    this.commonService = commonService;
    this.toaster = inject7(ToastrService7);
    this.queryId = null;
    this.reportId = null;
    this.reportLink = null;
    this.reportJson = [];
  }
  createQuery(campaign, campaignId, retryCount = 2) {
    return __async(this, null, function* () {
      try {
        const body = {
          "metadata": {
            "title": campaign.campaignName + " | " + campaign.dv360StartDate + " - " + campaign.dv360EndDate,
            "dataRange": {
              "range": "CUSTOM_DATES",
              "customStartDate": {
                "year": campaign.dv360StartDate.split("/")[2],
                "month": campaign.dv360StartDate.split("/")[0],
                "day": campaign.dv360StartDate.split("/")[1]
              },
              "customEndDate": {
                "year": campaign.dv360EndDate.split("/")[2],
                "month": campaign.dv360EndDate.split("/")[0],
                "day": campaign.dv360EndDate.split("/")[1]
              }
            },
            "format": "CSV"
          },
          "params": {
            "type": "STANDARD",
            "groupBys": ["FILTER_DATE", "FILTER_ADVERTISER", "FILTER_ADVERTISER_CURRENCY", "FILTER_CM360_PLACEMENT_ID"],
            "metrics": [
              "METRIC_IMPRESSIONS",
              "METRIC_BILLABLE_IMPRESSIONS",
              "METRIC_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS",
              "METRIC_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS",
              "METRIC_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS",
              "METRIC_ACTIVE_VIEW_AVERAGE_VIEWABLE_TIME",
              "METRIC_REVENUE_ADVERTISER",
              "METRIC_CLICKS",
              "METRIC_RICH_MEDIA_VIDEO_PLAYS",
              "METRIC_RICH_MEDIA_VIDEO_PAUSES",
              "METRIC_RICH_MEDIA_VIDEO_MIDPOINTS",
              "METRIC_RICH_MEDIA_VIDEO_COMPLETIONS",
              "METRIC_RICH_MEDIA_VIDEO_SKIPS",
              "METRIC_TOTAL_CONVERSIONS"
            ],
            "filters": [
              { "type": "FILTER_ADVERTISER", "value": campaign.dv360Advertiser.advertiserId },
              { "type": "FILTER_MEDIA_PLAN", "value": campaignId },
              campaign.dv360IO.map((io) => io.insertionOrderId).map((ioId) => ({ "type": "FILTER_INSERTION_ORDER", "value": ioId }))
            ]
          },
          "schedule": {
            "startDate": {
              "year": campaign.dv360StartDate.split("/")[2],
              "month": campaign.dv360StartDate.split("/")[0],
              "day": campaign.dv360StartDate.split("/")[1]
            },
            "endDate": {
              "year": campaign.dv360EndDate.split("/")[2],
              "month": campaign.dv360EndDate.split("/")[0],
              "day": campaign.dv360EndDate.split("/")[1]
            },
            "frequency": "ONE_TIME"
          }
        };
        const headers = { "Authorization": `Bearer ${localStorage.getItem("dv360AccessToken")}` };
        const response$ = this.http.post(`https://doubleclickbidmanager.googleapis.com/v2/queries`, body, { headers });
        const data = yield firstValueFrom6(response$);
        this.queryId = data.queryId;
        if (data && data.key) {
          this.reportId = data.key.reportId;
        }
      } catch (error) {
        if (retryCount > 0) {
          yield this.externalPlatforms.handleGoogleError(error, "dv360");
          this.createQuery(campaign, campaignId, retryCount - 1);
        } else {
          this.toaster.error("An error occurred while processing Display & Video 360 pacing alerts", "Error");
        }
      }
    });
  }
  runQuery(retryCount = 2) {
    return __async(this, null, function* () {
      try {
        const headers = { "Authorization": `Bearer ${localStorage.getItem("dv360AccessToken")}` };
        const response$ = this.http.post(`https://doubleclickbidmanager.googleapis.com/v2/queries/${this.queryId}:run`, {}, { headers });
        const data = yield firstValueFrom6(response$);
        if (data && data.key) {
          this.reportId = data.key.reportId;
        }
      } catch (error) {
        if (retryCount > 0) {
          yield this.externalPlatforms.handleGoogleError(error, "dv360");
          this.runQuery(retryCount - 1);
        } else {
          this.toaster.error("An error occurred while processing Display & Video 360 pacing alerts", "Error");
        }
      }
    });
  }
  getReportLink() {
    return __async(this, null, function* () {
      let status = null;
      while (status !== "DONE") {
        try {
          const headers = { "Authorization": `Bearer ${localStorage.getItem("dv360AccessToken")}` };
          const response$ = this.http.get(`https://doubleclickbidmanager.googleapis.com/v2/queries/${this.queryId}/reports/${this.reportId}`, { headers });
          const data = yield firstValueFrom6(response$);
          status = data.metadata.status.state;
          if (data && data.metadata && data.metadata.googleCloudStoragePath) {
            this.reportLink = data.metadata.googleCloudStoragePath;
            console.log("Report link found:", data.metadata);
          } else {
            console.log("Report link not found in response:", data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  }
  aggregateData(data) {
    const aggregatedData = {};
    data.forEach((item) => {
      const date = item.Date;
      if (!moment2(date, "YYYY/MM/DD", true).isValid()) {
        return;
      }
      if (!aggregatedData[date]) {
        aggregatedData[date] = {
          "Date": date,
          "Advertiser ID": item["Advertiser ID"],
          "Advertiser Currency": item["Advertiser Currency"],
          "CM360 Placement ID": /* @__PURE__ */ new Set(),
          "Impressions": 0,
          "Billable Impressions": 0,
          "Active View: Eligible Impressions": 0,
          "Active View: Measurable Impressions": 0,
          "Active View: Viewable Impressions": 0,
          "Active View: Average Viewable Time (seconds)": 0,
          "Revenue (Adv Currency)": 0,
          "Clicks": 0,
          "Starts (Video)": 0,
          "Pauses (Video)": 0,
          "Midpoint Views (Video)": 0,
          "Complete Views (Video)": 0,
          "Skips (Video)": 0,
          "Total Conversions": 0,
          "viewableTimeCount": 0
        };
      }
      const entry = aggregatedData[date];
      entry["CM360 Placement ID"].add(item["CM360 Placement ID"]);
      entry["Impressions"] += Number(item["Impressions"]) || 0;
      entry["Billable Impressions"] += Number(item["Billable Impressions"]) || 0;
      entry["Active View: Eligible Impressions"] += Number(item["Active View: Eligible Impressions"]) || 0;
      entry["Active View: Measurable Impressions"] += Number(item["Active View: Measurable Impressions"]) || 0;
      entry["Active View: Viewable Impressions"] += Number(item["Active View: Viewable Impressions"]) || 0;
      entry["Revenue (Adv Currency)"] += Number(item["Revenue (Adv Currency)"]) || 0;
      entry["Clicks"] += Number(item["Clicks"]) || 0;
      entry["Starts (Video)"] += Number(item["Starts (Video)"]) || 0;
      entry["Pauses (Video)"] += Number(item["Pauses (Video)"]) || 0;
      entry["Midpoint Views (Video)"] += Number(item["Midpoint Views (Video)"]) || 0;
      entry["Complete Views (Video)"] += Number(item["Complete Views (Video)"]) || 0;
      entry["Skips (Video)"] += Number(item["Skips (Video)"]) || 0;
      entry["Total Conversions"] += Number(item["Total Conversions"]) || 0;
      entry["Active View: Average Viewable Time (seconds)"] += Number(item["Active View: Average Viewable Time (seconds)"]) || 0;
      entry["viewableTimeCount"] += item["Active View: Average Viewable Time (seconds)"] !== null ? 1 : 0;
    });
    Object.values(aggregatedData).forEach((item) => {
      if (item["viewableTimeCount"] > 0) {
        item["Active View: Average Viewable Time (seconds)"] /= item["viewableTimeCount"];
      }
      item["CM360 Placement ID"] = Array.from(item["CM360 Placement ID"]);
      delete item["viewableTimeCount"];
    });
    return Object.values(aggregatedData);
  }
  getReport() {
    return __async(this, null, function* () {
      const proxyUrl = "https://northamerica-northeast1-glassroom-firebase.cloudfunctions.net/downloadCSV";
      const fileUrl = encodeURIComponent(`${this.reportLink}`);
      return new Promise((resolve, reject) => {
        this.http.get(`${proxyUrl}?fileUrl=${fileUrl}`, { responseType: "text" }).pipe(tap((response) => {
          try {
            response = this.csvToJSON(response);
            this.reportJson = this.reportJson.concat(response);
            this.reportJson = this.aggregateData(this.reportJson);
            resolve();
          } catch (error) {
            console.error("Error processing CSV file: ", error);
            reject(error);
          }
        }), catchError2((error) => {
          console.error("Error downloading CSV file: ", error);
          reject(error);
          return of7(null);
        })).subscribe();
      });
    });
  }
  csvToJSON(text, quoteChar = '"', delimiter = ",") {
    var rows = text.split("\n");
    var headers = rows[0].split(",");
    const regex = new RegExp(`\\s*(${quoteChar})?(.*?)\\1\\s*(?:${delimiter}|$)`, "gs");
    const match = (line) => [...line.matchAll(regex)].map((m) => m[2]).slice(0, -1);
    var lines = text.split("\n");
    const heads = headers ?? match(lines.shift());
    lines = lines.slice(1);
    return lines.map((line) => {
      return match(line).reduce((acc, cur, i) => {
        const val = cur.length <= 0 ? null : Number(cur) || cur;
        const key = heads[i] ?? `{i}`;
        return __spreadProps(__spreadValues({}, acc), { [key]: val });
      }, {});
    });
  }
  saveReport(report, campaign, userId) {
    return __async(this, null, function* () {
      let resultatAgregat = {};
      report.forEach((line) => {
        if (!resultatAgregat[line.Date]) {
          resultatAgregat[line.Date] = __spreadProps(__spreadValues({}, line), { Nombre: 1 });
        } else {
          Object.keys(line).forEach((cle) => {
            if (typeof line[cle] === "number") {
              resultatAgregat[line.Date][cle] += line[cle];
            }
          });
          resultatAgregat[line.Date].Nombre += 1;
        }
      });
      let dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;
      let filteredObj = Object.entries(resultatAgregat).filter(([key, _]) => dateRegex.test(key)).reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
      let reportToSave = {
        report: filteredObj,
        date: moment2.tz("America/Montreal").format("YYYY-MM-DD"),
        campaignName: campaign.campaignName,
        campaignId: campaign.id,
        userId
      };
      this.db.collection("dv360Report").add(reportToSave);
    });
  }
  processReport(campaign, index) {
    return __async(this, null, function* () {
      try {
        for (const item of campaign.platforms[index].formData.dv360CampaignId) {
          yield this.createQuery(campaign.platforms[index].formData, item.campaignId);
          yield this.runQuery();
          yield this.getReportLink();
          yield this.getReport();
        }
        const userSearchId = campaign.id;
        const userId = getAuth7().currentUser?.uid;
        yield this.saveReport(this.reportJson, campaign, userId);
        const AllPacingAlerts = this.fns.httpsCallable("AllPacingAlerts");
        if (this.reportJson) {
          const AllPacingAlerts$ = AllPacingAlerts({
            userSearchId,
            reportJson: this.reportJson,
            userId,
            platform: "dv360",
            platformIndex: index,
            accountId: this.commonService.selectedAccountId
          });
          try {
            yield firstValueFrom6(AllPacingAlerts$);
            this.resetReportVariables();
            return true;
          } catch (error) {
            console.error("Error calling Firestore function: ", error);
            this.resetReportVariables();
            return false;
          }
        } else {
          console.error("reportJson is null, skipping Firestore insertion.");
          this.resetReportVariables();
          return false;
        }
      } catch (error) {
        console.error("Error processing DV360 report: ", error);
        this.resetReportVariables();
        return false;
      }
    });
  }
  resetReportVariables() {
    this.reportId = null;
    this.reportLink = null;
    this.queryId = null;
    this.reportJson = [];
  }
};
_DV360ReportService.\u0275fac = function DV360ReportService_Factory(t) {
  return new (t || _DV360ReportService)(i09.\u0275\u0275inject(i111.HttpClient), i09.\u0275\u0275inject(i24.AngularFireFunctions), i09.\u0275\u0275inject(i33.AngularFirestore), i09.\u0275\u0275inject(ExternalPlatformsService), i09.\u0275\u0275inject(CommonService));
};
_DV360ReportService.\u0275prov = /* @__PURE__ */ i09.\u0275\u0275defineInjectable({ token: _DV360ReportService, factory: _DV360ReportService.\u0275fac, providedIn: "root" });
var DV360ReportService = _DV360ReportService;

// src/app/components/dialog/dialog.component.ts
import * as i52 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";

// src/app/services/reports/facebook/facebook-report.service.ts
import { Injectable as Injectable5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { firstValueFrom as firstValueFrom7 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import { getAuth as getAuth8 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_auth.js?v=478e822e";
import __vite__cjsImport203_momentTimezone from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/moment-timezone.js?v=478e822e"; const moment3 = __vite__cjsImport203_momentTimezone.__esModule ? __vite__cjsImport203_momentTimezone.default : __vite__cjsImport203_momentTimezone;
import * as i010 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i115 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_functions.js?v=478e822e";
import * as i25 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
var _FacebookReportService = class _FacebookReportService {
  constructor(fns, db, commonService) {
    this.fns = fns;
    this.db = db;
    this.commonService = commonService;
    this.reportJson = [];
  }
  convertDateFormat(dateString) {
    const parts = dateString.split("/");
    const formattedDate = `${parts[2]}-${parts[0].padStart(2, "0")}-${parts[1].padStart(2, "0")}`;
    return formattedDate;
  }
  getReport(campaign) {
    return __async(this, null, function* () {
      const fields = [
        "date_start",
        "date_stop",
        "account_id",
        "campaign_id",
        "adset_id",
        "outbound_clicks",
        "impressions",
        "spend"
      ].join(",");
      const adAccount = campaign.facebookAdAccount.id;
      const campaignIds = campaign.facebookCampaign.map((c) => c.id);
      const adsetIds = campaign.facebookAdset ? campaign.facebookAdset.map((a) => a.id) : [];
      const accessToken = localStorage.getItem("facebookAccessToken");
      const startDate = this.convertDateFormat(campaign.facebookStartDate);
      const endDate = this.convertDateFormat(campaign.facebookEndDate);
      const filtering = [];
      if (campaignIds.length) {
        filtering.push({ field: "campaign.id", operator: "IN", value: campaignIds });
      }
      if (adsetIds.length) {
        filtering.push({ field: "adset.id", operator: "IN", value: adsetIds });
      }
      const timeRange = `{"since":"${startDate}","until":"${endDate}"}`;
      const url = `https://graph.facebook.com/v19.0/${adAccount}/insights?fields=${fields}&time_range=${timeRange}&access_token=${accessToken}&filtering=${encodeURIComponent(JSON.stringify(filtering))}&time_increment=1`;
      try {
        const response = yield fetch(url);
        const data = yield response.json();
        this.reportJson = data.data;
      } catch (error) {
        console.error("Error fetching campaign metrics:", error);
      }
    });
  }
  transformReport(dataArray) {
    if (!dataArray)
      return null;
    let transformedData = {};
    dataArray.forEach((item) => {
      const formattedDate = item.date_start.replace(/-/g, "/");
      const campaignData = {
        date_stop: item.date_stop,
        account_id: item.account_id,
        outbound_clicks: item.outbound_clicks.map((click) => ({
          action_type: click.action_type,
          value: click.value
        })),
        impressions: item.impressions,
        spend: item.spend
      };
      transformedData[formattedDate] = campaignData;
    });
    return transformedData;
  }
  processReport(campaign, index) {
    return __async(this, null, function* () {
      try {
        const userSearchId = campaign.id;
        const userId = getAuth8().currentUser?.uid;
        yield this.getReport(campaign.platforms[index].formData);
        let reportToSave = {
          report: this.transformReport(this.reportJson),
          date: moment3.tz("America/Montreal").format("YYYY-MM-DD"),
          campaignName: campaign.campaignName,
          campaignId: campaign.id,
          userId
        };
        this.db.collection("facebookReport").add(reportToSave);
        const AllPacingAlerts = this.fns.httpsCallable("AllPacingAlerts");
        const AllPacingAlerts$ = AllPacingAlerts({
          userSearchId,
          reportJson: this.reportJson,
          userId,
          platform: "facebook",
          platformIndex: index,
          accountId: this.commonService.selectedAccountId
        });
        try {
          yield firstValueFrom7(AllPacingAlerts$);
          this.resetReportVariables();
          return true;
        } catch (error) {
          console.error("Error calling Firestore function: ", error);
          this.resetReportVariables();
          return false;
        }
      } catch (error) {
        console.error("Error processing Facebook report: ", error);
        return false;
      }
    });
  }
  resetReportVariables() {
    this.reportJson = [];
  }
};
_FacebookReportService.\u0275fac = function FacebookReportService_Factory(t) {
  return new (t || _FacebookReportService)(i010.\u0275\u0275inject(i115.AngularFireFunctions), i010.\u0275\u0275inject(i25.AngularFirestore), i010.\u0275\u0275inject(CommonService));
};
_FacebookReportService.\u0275prov = /* @__PURE__ */ i010.\u0275\u0275defineInjectable({ token: _FacebookReportService, factory: _FacebookReportService.\u0275fac, providedIn: "root" });
var FacebookReportService = _FacebookReportService;

// src/app/services/reports/google-ads/google-ads-report.service.ts
import { Injectable as Injectable6, inject as inject8 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { HttpHeaders as HttpHeaders2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common_http.js?v=478e822e";
import { firstValueFrom as firstValueFrom8 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import { ToastrService as ToastrService8 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import { getAuth as getAuth9 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_auth.js?v=478e822e";
import __vite__cjsImport212_momentTimezone from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/moment-timezone.js?v=478e822e"; const moment4 = __vite__cjsImport212_momentTimezone.__esModule ? __vite__cjsImport212_momentTimezone.default : __vite__cjsImport212_momentTimezone;
import * as i011 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i116 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_functions.js?v=478e822e";
import * as i26 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
import * as i34 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common_http.js?v=478e822e";
var _GoogleAdsReportService = class _GoogleAdsReportService {
  constructor(fns, db, http, externalPlatforms, commonService) {
    this.fns = fns;
    this.db = db;
    this.http = http;
    this.externalPlatforms = externalPlatforms;
    this.commonService = commonService;
    this.toaster = inject8(ToastrService8);
    this.reportJson = [];
  }
  convertDateFormat(dateStr) {
    const [month, day, year] = dateStr.split("/");
    const formattedDay = day.padStart(2, "0");
    const formattedMonth = month.padStart(2, "0");
    return `${year}-${formattedMonth}-${formattedDay}`;
  }
  getReport(campaign, retryCount = 2) {
    return __async(this, null, function* () {
      try {
        const headers = new HttpHeaders2({
          "Authorization": `Bearer ${localStorage.getItem("googleAdsAccessToken")}`,
          "Content-Type": "application/json",
          "developer-token": "mkH52QA2KonyxSyJy8TFUw",
          "login-customer-id": "2681551676"
        });
        const startDate = this.convertDateFormat(campaign.googleAdsStartDate);
        const endDate = this.convertDateFormat(campaign.googleAdsEndDate);
        const customerId = campaign.googleAdsAccount.id;
        const campaignIds = Array.from(new Set(campaign.googleAdsCampaign.map((c) => c.id)));
        const formattedCampaignIds = `('${campaignIds.join("', '")}')`;
        const url = `https://googleads.googleapis.com/v16/customers/${customerId}/googleAds:searchStream`;
        const body = {
          query: `
          SELECT
            campaign.id,
            campaign.name,
            segments.date,
            metrics.impressions,
            metrics.clicks,
            metrics.cost_micros
          FROM campaign
          WHERE campaign.id IN ${formattedCampaignIds}
          AND segments.date BETWEEN '${startDate}' AND '${endDate}'
          ORDER BY campaign.id`
        };
        const response = yield firstValueFrom8(this.http.post(url, body, { headers }));
        if (response.error) {
          console.error("Error fetching Google Ads report:", response.error);
          return;
        }
        if (response && response.length > 0) {
          this.reportJson = response[0].results;
          this.reportJson = this.aggregateCampaignData(this.reportJson);
        }
      } catch (error) {
        if (retryCount > 0) {
          yield this.externalPlatforms.handleGoogleError(error, "googleAds");
          return this.getReport(campaign, retryCount - 1);
        } else {
          this.toaster.error("Failed to fetch Google Ads report", "Error");
        }
      }
    });
  }
  aggregateCampaignData(data) {
    const aggregatedData = {};
    data.forEach((item) => {
      const date = item.segments.date;
      if (!moment4(date, "YYYY-MM-DD", true).isValid()) {
        return;
      }
      if (!aggregatedData[date]) {
        aggregatedData[date] = {
          "Date": date,
          "Campaign IDs": /* @__PURE__ */ new Set(),
          "Campaign Names": /* @__PURE__ */ new Set(),
          "Clicks": 0,
          "Cost": 0,
          "Impressions": 0
        };
      }
      const entry = aggregatedData[date];
      entry["Campaign IDs"].add(item.campaign.id);
      entry["Campaign Names"].add(item.campaign.name);
      entry.Clicks += parseInt(item.metrics.clicks) || 0;
      entry.Cost += parseFloat(item.metrics.costMicros) / 1e6 || 0;
      entry.Impressions += parseInt(item.metrics.impressions) || 0;
    });
    Object.values(aggregatedData).forEach((item) => {
      item["Campaign IDs"] = Array.from(item["Campaign IDs"]);
      item["Campaign Names"] = Array.from(item["Campaign Names"]);
    });
    return Object.values(aggregatedData);
  }
  processReport(campaign, index) {
    return __async(this, null, function* () {
      try {
        const userSearchId = campaign.id;
        const userId = getAuth9().currentUser?.uid;
        yield this.getReport(campaign.platforms[index].formData);
        let reportToSave = {
          report: this.reportJson,
          date: moment4.tz("America/Montreal").format("YYYY-MM-DD"),
          campaignName: campaign.campaignName,
          campaignId: campaign.id,
          userId,
          platform: "googleAds"
        };
        this.db.collection("googleAdsReport").add(reportToSave);
        const AllPacingAlerts = this.fns.httpsCallable("AllPacingAlerts");
        if (this.reportJson) {
          const AllPacingAlerts$ = AllPacingAlerts({
            userSearchId,
            reportJson: this.reportJson,
            userId,
            platformIndex: index,
            platform: "googleAds",
            accountId: this.commonService.selectedAccountId
          });
          try {
            yield firstValueFrom8(AllPacingAlerts$);
            this.resetReportVariables();
            return true;
          } catch (error) {
            console.error("Error calling Firestore function: ", error);
            this.resetReportVariables();
            return false;
          }
        } else {
          console.error("reportJson is null, skipping Firestore insertion.");
          this.resetReportVariables();
          return false;
        }
      } catch (error) {
        console.error("Error processing Google Ads report: ", error);
        return false;
      }
    });
  }
  resetReportVariables() {
    this.reportJson = [];
  }
};
_GoogleAdsReportService.\u0275fac = function GoogleAdsReportService_Factory(t) {
  return new (t || _GoogleAdsReportService)(i011.\u0275\u0275inject(i116.AngularFireFunctions), i011.\u0275\u0275inject(i26.AngularFirestore), i011.\u0275\u0275inject(i34.HttpClient), i011.\u0275\u0275inject(ExternalPlatformsService), i011.\u0275\u0275inject(CommonService));
};
_GoogleAdsReportService.\u0275prov = /* @__PURE__ */ i011.\u0275\u0275defineInjectable({ token: _GoogleAdsReportService, factory: _GoogleAdsReportService.\u0275fac, providedIn: "root" });
var GoogleAdsReportService = _GoogleAdsReportService;

// src/app/services/reports/bing/bing-report.service.ts
import { Injectable as Injectable7, inject as inject9 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { ToastrService as ToastrService9 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import { getAuth as getAuth10 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_auth.js?v=478e822e";
import __vite__cjsImport220_momentTimezone from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/moment-timezone.js?v=478e822e"; const moment5 = __vite__cjsImport220_momentTimezone.__esModule ? __vite__cjsImport220_momentTimezone.default : __vite__cjsImport220_momentTimezone;
import __vite__cjsImport221_papaparse from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/papaparse.js?v=478e822e"; const Papa = ((m) => m?.__esModule ? m : { ...(typeof m === 'object' && !Array.isArray(m) ? m : {}), default: m })(__vite__cjsImport221_papaparse);
import { firstValueFrom as firstValueFrom9 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import * as i012 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i117 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_functions.js?v=478e822e";
import * as i27 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
var _BingReportService = class _BingReportService {
  constructor(fns, db, externalPlatforms, commonService) {
    this.fns = fns;
    this.db = db;
    this.externalPlatforms = externalPlatforms;
    this.commonService = commonService;
    this.toaster = inject9(ToastrService9);
    this.reportJson = [];
    this.reportId = "";
    this.reportURL = "";
  }
  generateReport(campaign, retryCount = 2) {
    return __async(this, null, function* () {
      try {
        const generateBingReport = this.fns.httpsCallable("generateBingReport");
        const accessToken = localStorage.getItem("microsoftAccessToken");
        const customerId = campaign.bingCustomer.id;
        const accountId = campaign.bingAccount.id;
        const startDate = campaign.bingStartDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$1-$2");
        let endDate = new Date(campaign.bingEndDate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$1-$2"));
        const today = /* @__PURE__ */ new Date();
        today.setHours(0, 0, 0, 0);
        if (endDate > today) {
          endDate = today;
        }
        endDate = endDate.toISOString().split("T")[0];
        const campaignIds = campaign.bingCampaign.map((c) => c.id);
        const result = yield firstValueFrom9(generateBingReport({
          accessToken,
          customerId,
          accountId,
          reportName: `Alert project - ${today.toISOString()} - ${campaign.campaignName}`,
          startDate,
          endDate,
          campaignIds
        }));
        this.reportId = result["s:Envelope"]["s:Body"][0]["SubmitGenerateReportResponse"][0]["ReportRequestId"][0];
      } catch (error) {
        console.error("Error generating Bing report:", error);
        if (retryCount > 0) {
          yield this.externalPlatforms.handleMicrosoftError();
          return this.generateReport(campaign, retryCount - 1);
        } else {
          this.toaster.error("Failed to fetch Bing Ads report", "Error");
        }
      }
    });
  }
  getReportStatus(campaign, retryCount = 4) {
    return __async(this, null, function* () {
      try {
        const getPollReportStatus = this.fns.httpsCallable("getPollReportStatus");
        const accessToken = localStorage.getItem("microsoftAccessToken");
        const customerId = campaign.bingCustomer.id;
        const accountId = campaign.bingAccount.id;
        const result = yield firstValueFrom9(getPollReportStatus({
          accessToken,
          customerId,
          accountId,
          reportRequestId: this.reportId
        }));
        if (result["s:Envelope"]["s:Body"][0]["PollGenerateReportResponse"][0]["ReportRequestStatus"][0]["Status"][0] === "Success") {
          this.reportURL = result["s:Envelope"]["s:Body"][0]["PollGenerateReportResponse"][0]["ReportRequestStatus"][0]["ReportDownloadUrl"][0];
        } else {
          return this.getReportStatus(campaign, retryCount - 1);
        }
      } catch (error) {
        console.error("Error getting Bing report status:", error);
        if (retryCount > 0) {
          yield this.externalPlatforms.handleMicrosoftError();
          return this.getReportStatus(campaign, retryCount - 1);
        } else {
          this.toaster.error("Failed to fetch Bing Ads report", "Error");
        }
      }
    });
  }
  getReport(campaign, retryCount = 2) {
    return __async(this, null, function* () {
      try {
        const getBingReport = this.fns.httpsCallable("getBingReport");
        const result = yield firstValueFrom9(getBingReport({ reportUrl: this.reportURL }));
        const reportData = result.csv;
        const csvStartIndex = reportData.indexOf('"TimePeriod"');
        const csvData = reportData.substring(csvStartIndex);
        const parsedData = Papa.parse(csvData, { header: true, skipEmptyLines: true });
        this.reportJson = parsedData.data.reduce((acc, cur) => {
          const key = cur.TimePeriod;
          if (campaign.bingCampaign.map((c) => c.id).includes(cur.CampaignId)) {
            if (!acc[key]) {
              acc[key] = {
                TimePeriod: cur.TimePeriod,
                AccountName: cur.AccountName,
                AccountId: cur.AccountId,
                CampaignIds: [cur.CampaignId],
                Impressions: parseInt(cur.Impressions),
                Clicks: parseInt(cur.Clicks),
                Conversions: parseInt(cur.Conversions),
                Spend: parseInt(cur.Spend)
              };
            } else {
              acc[key].CampaignIds.push(cur.CampaignId);
              acc[key].Impressions += parseInt(cur.Impressions);
              acc[key].Clicks += parseInt(cur.Clicks);
              acc[key].Conversions += parseInt(cur.Conversions);
              acc[key].Spend += parseInt(cur.Spend);
            }
          }
          if (acc[key]) {
            acc[key].CampaignIds = [...new Set(acc[key].CampaignIds)];
          }
          return acc;
        }, {});
        this.reportJson = Object.values(this.reportJson);
      } catch (error) {
        console.error("Error getting Bing report:", error);
        if (retryCount > 0) {
          yield this.externalPlatforms.handleMicrosoftError();
          return this.getReport(campaign, retryCount - 1);
        } else {
          this.toaster.error("Failed to fetch Bing Ads report", "Error");
        }
      }
    });
  }
  processReport(campaign, index) {
    return __async(this, null, function* () {
      try {
        const userSearchId = campaign.id;
        const userId = getAuth10().currentUser?.uid;
        yield this.generateReport(campaign.platforms[index].formData);
        yield this.getReportStatus(campaign.platforms[index].formData);
        yield this.getReport(campaign.platforms[index].formData);
        let reportToSave = {
          report: this.reportJson,
          date: moment5.tz("America/Montreal").format("YYYY-MM-DD"),
          campaignName: campaign.campaignName,
          campaignId: campaign.id,
          userId
        };
        this.db.collection("bingReport").add(reportToSave);
        const AllPacingAlerts = this.fns.httpsCallable("AllPacingAlerts");
        if (this.reportJson) {
          const AllPacingAlerts$ = AllPacingAlerts({
            userSearchId,
            reportJson: this.reportJson,
            userId,
            platform: "bing",
            platformIndex: index,
            accountId: this.commonService.selectedAccountId
          });
          try {
            yield firstValueFrom9(AllPacingAlerts$);
            this.resetReportVariables();
            return true;
          } catch (error) {
            console.error("Error calling Firestore function: ", error);
            this.resetReportVariables();
            return false;
          }
        } else {
          console.error("reportJson is null, skipping Firestore insertion.");
          this.resetReportVariables();
          return false;
        }
      } catch (error) {
        console.error("Error processing Bing report: ", error);
        return false;
      }
    });
  }
  resetReportVariables() {
    this.reportJson = [];
    this.reportId = "";
    this.reportURL = "";
  }
};
_BingReportService.\u0275fac = function BingReportService_Factory(t) {
  return new (t || _BingReportService)(i012.\u0275\u0275inject(i117.AngularFireFunctions), i012.\u0275\u0275inject(i27.AngularFirestore), i012.\u0275\u0275inject(ExternalPlatformsService), i012.\u0275\u0275inject(CommonService));
};
_BingReportService.\u0275prov = /* @__PURE__ */ i012.\u0275\u0275defineInjectable({ token: _BingReportService, factory: _BingReportService.\u0275fac, providedIn: "root" });
var BingReportService = _BingReportService;

// src/app/services/alerts/alerts.service.ts
import { Injectable as Injectable8 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i013 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i118 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
var _AlertsService = class _AlertsService {
  constructor(db) {
    this.db = db;
    this.pacingAlerts = [];
    this.subaccounts = [];
  }
  updateData(campaignId, index) {
    const docRef = this.db.collection("userSearch").doc(campaignId);
    docRef.get().subscribe((doc5) => {
      if (doc5.exists) {
        const userData = doc5.data();
        const pacingAlert = this.pacingAlerts.find((p) => p.id === campaignId);
        if (pacingAlert && pacingAlert.platforms[index]) {
          pacingAlert.platforms[index].loading = false;
          pacingAlert.platforms[index].pacingAlerts = userData.platforms[index].pacingAlerts || [];
        }
      }
    }, (error) => {
      console.error("Error fetching or updating data: ", error);
    });
  }
};
_AlertsService.\u0275fac = function AlertsService_Factory(t) {
  return new (t || _AlertsService)(i013.\u0275\u0275inject(i118.AngularFirestore));
};
_AlertsService.\u0275prov = /* @__PURE__ */ i013.\u0275\u0275defineInjectable({ token: _AlertsService, factory: _AlertsService.\u0275fac, providedIn: "root" });
var AlertsService = _AlertsService;

// src/app/components/dialog/dialog.component.ts
import * as i1110 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import * as i126 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i136 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import * as i145 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import * as i155 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import * as i165 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import * as i173 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_core.js?v=478e822e";
import * as i182 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import * as i192 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_progress-spinner.js?v=478e822e";
import * as i20 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_autocomplete.js?v=478e822e";
import * as i21 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_tabs.js?v=478e822e";
function DialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "div", 18);
    i014.\u0275\u0275element(1, "mat-spinner");
    i014.\u0275\u0275elementEnd();
  }
}
function DialogComponent_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "mat-error");
    i014.\u0275\u0275text(1, " The field is required ");
    i014.\u0275\u0275elementEnd();
  }
}
function DialogComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "mat-option", 19);
    i014.\u0275\u0275text(1);
    i014.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subaccount_r2 = ctx.$implicit;
    i014.\u0275\u0275property("value", subaccount_r2);
    i014.\u0275\u0275advance();
    i014.\u0275\u0275textInterpolate1(" ", subaccount_r2.name, " ");
  }
}
function DialogComponent_For_22_mat_tab_0_ng_template_1_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "mat-icon", 27);
    i014.\u0275\u0275text(1, "warning");
    i014.\u0275\u0275elementEnd();
  }
}
function DialogComponent_For_22_mat_tab_0_ng_template_1_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i014.\u0275\u0275getCurrentView();
    i014.\u0275\u0275elementStart(0, "mat-icon", 28);
    i014.\u0275\u0275listener("click", function DialogComponent_For_22_mat_tab_0_ng_template_1_mat_icon_5_Template_mat_icon_click_0_listener() {
      i014.\u0275\u0275restoreView(_r4);
      const index_r5 = i014.\u0275\u0275nextContext(3).$index;
      const ctx_r5 = i014.\u0275\u0275nextContext();
      return i014.\u0275\u0275resetView(ctx_r5.removeTab(index_r5));
    });
    i014.\u0275\u0275text(1, "close");
    i014.\u0275\u0275elementEnd();
  }
}
function DialogComponent_For_22_mat_tab_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "div", 23)(1, "span");
    i014.\u0275\u0275text(2);
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(3, "span", 24);
    i014.\u0275\u0275template(4, DialogComponent_For_22_mat_tab_0_ng_template_1_mat_icon_4_Template, 2, 0, "mat-icon", 25)(5, DialogComponent_For_22_mat_tab_0_ng_template_1_mat_icon_5_Template, 2, 0, "mat-icon", 26);
    i014.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = i014.\u0275\u0275nextContext(2);
    const tab_r8 = ctx_r6.$implicit;
    const index_r5 = ctx_r6.$index;
    const ctx_r5 = i014.\u0275\u0275nextContext();
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275textInterpolate1("", tab_r8.name, "\xA0");
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275property("ngIf", ctx_r5.tabErrors[index_r5]);
    i014.\u0275\u0275advance();
    i014.\u0275\u0275property("ngIf", ctx_r5.tabs.length > 1);
  }
}
function DialogComponent_For_22_mat_tab_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = i014.\u0275\u0275getCurrentView();
    i014.\u0275\u0275elementStart(0, "mat-tab");
    i014.\u0275\u0275template(1, DialogComponent_For_22_mat_tab_0_ng_template_1_Template, 6, 3, "ng-template", 21);
    i014.\u0275\u0275elementStart(2, "app-dv360-form", 22, 1);
    i014.\u0275\u0275listener("platformChange", function DialogComponent_For_22_mat_tab_0_Template_app_dv360_form_platformChange_2_listener($event) {
      i014.\u0275\u0275restoreView(_r3);
      const index_r5 = i014.\u0275\u0275nextContext().$index;
      const ctx_r5 = i014.\u0275\u0275nextContext();
      return i014.\u0275\u0275resetView(ctx_r5.handlePlatformChange(index_r5, $event));
    });
    i014.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r8 = i014.\u0275\u0275nextContext().$implicit;
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275property("platformIndex", tab_r8.index);
  }
}
function DialogComponent_For_22_mat_tab_1_ng_template_1_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "mat-icon", 27);
    i014.\u0275\u0275text(1, "warning");
    i014.\u0275\u0275elementEnd();
  }
}
function DialogComponent_For_22_mat_tab_1_ng_template_1_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = i014.\u0275\u0275getCurrentView();
    i014.\u0275\u0275elementStart(0, "mat-icon", 28);
    i014.\u0275\u0275listener("click", function DialogComponent_For_22_mat_tab_1_ng_template_1_mat_icon_5_Template_mat_icon_click_0_listener() {
      i014.\u0275\u0275restoreView(_r10);
      const index_r5 = i014.\u0275\u0275nextContext(3).$index;
      const ctx_r5 = i014.\u0275\u0275nextContext();
      return i014.\u0275\u0275resetView(ctx_r5.removeTab(index_r5));
    });
    i014.\u0275\u0275text(1, "close");
    i014.\u0275\u0275elementEnd();
  }
}
function DialogComponent_For_22_mat_tab_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "div", 23)(1, "span");
    i014.\u0275\u0275text(2);
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(3, "span", 24);
    i014.\u0275\u0275template(4, DialogComponent_For_22_mat_tab_1_ng_template_1_mat_icon_4_Template, 2, 0, "mat-icon", 25)(5, DialogComponent_For_22_mat_tab_1_ng_template_1_mat_icon_5_Template, 2, 0, "mat-icon", 26);
    i014.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = i014.\u0275\u0275nextContext(2);
    const tab_r8 = ctx_r6.$implicit;
    const index_r5 = ctx_r6.$index;
    const ctx_r5 = i014.\u0275\u0275nextContext();
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275textInterpolate1("", tab_r8.name, "\xA0");
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275property("ngIf", ctx_r5.tabErrors[index_r5]);
    i014.\u0275\u0275advance();
    i014.\u0275\u0275property("ngIf", ctx_r5.tabs.length > 1);
  }
}
function DialogComponent_For_22_mat_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = i014.\u0275\u0275getCurrentView();
    i014.\u0275\u0275elementStart(0, "mat-tab", 29);
    i014.\u0275\u0275template(1, DialogComponent_For_22_mat_tab_1_ng_template_1_Template, 6, 3, "ng-template", 21);
    i014.\u0275\u0275elementStart(2, "app-facebook-form", 22, 2);
    i014.\u0275\u0275listener("platformChange", function DialogComponent_For_22_mat_tab_1_Template_app_facebook_form_platformChange_2_listener($event) {
      i014.\u0275\u0275restoreView(_r9);
      const index_r5 = i014.\u0275\u0275nextContext().$index;
      const ctx_r5 = i014.\u0275\u0275nextContext();
      return i014.\u0275\u0275resetView(ctx_r5.handlePlatformChange(index_r5, $event));
    });
    i014.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r8 = i014.\u0275\u0275nextContext().$implicit;
    i014.\u0275\u0275property("label", tab_r8.name);
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275property("platformIndex", tab_r8.index);
  }
}
function DialogComponent_For_22_mat_tab_2_ng_template_1_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "mat-icon", 27);
    i014.\u0275\u0275text(1, "warning");
    i014.\u0275\u0275elementEnd();
  }
}
function DialogComponent_For_22_mat_tab_2_ng_template_1_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = i014.\u0275\u0275getCurrentView();
    i014.\u0275\u0275elementStart(0, "mat-icon", 28);
    i014.\u0275\u0275listener("click", function DialogComponent_For_22_mat_tab_2_ng_template_1_mat_icon_5_Template_mat_icon_click_0_listener() {
      i014.\u0275\u0275restoreView(_r12);
      const index_r5 = i014.\u0275\u0275nextContext(3).$index;
      const ctx_r5 = i014.\u0275\u0275nextContext();
      return i014.\u0275\u0275resetView(ctx_r5.removeTab(index_r5));
    });
    i014.\u0275\u0275text(1, "close");
    i014.\u0275\u0275elementEnd();
  }
}
function DialogComponent_For_22_mat_tab_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "div", 23)(1, "span");
    i014.\u0275\u0275text(2);
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(3, "span", 24);
    i014.\u0275\u0275template(4, DialogComponent_For_22_mat_tab_2_ng_template_1_mat_icon_4_Template, 2, 0, "mat-icon", 25)(5, DialogComponent_For_22_mat_tab_2_ng_template_1_mat_icon_5_Template, 2, 0, "mat-icon", 26);
    i014.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = i014.\u0275\u0275nextContext(2);
    const tab_r8 = ctx_r6.$implicit;
    const index_r5 = ctx_r6.$index;
    const ctx_r5 = i014.\u0275\u0275nextContext();
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275textInterpolate1("", tab_r8.name, "\xA0");
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275property("ngIf", ctx_r5.tabErrors[index_r5]);
    i014.\u0275\u0275advance();
    i014.\u0275\u0275property("ngIf", ctx_r5.tabs.length > 1);
  }
}
function DialogComponent_For_22_mat_tab_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = i014.\u0275\u0275getCurrentView();
    i014.\u0275\u0275elementStart(0, "mat-tab", 29);
    i014.\u0275\u0275template(1, DialogComponent_For_22_mat_tab_2_ng_template_1_Template, 6, 3, "ng-template", 21);
    i014.\u0275\u0275elementStart(2, "app-google-ads-form", 22, 3);
    i014.\u0275\u0275listener("platformChange", function DialogComponent_For_22_mat_tab_2_Template_app_google_ads_form_platformChange_2_listener($event) {
      i014.\u0275\u0275restoreView(_r11);
      const index_r5 = i014.\u0275\u0275nextContext().$index;
      const ctx_r5 = i014.\u0275\u0275nextContext();
      return i014.\u0275\u0275resetView(ctx_r5.handlePlatformChange(index_r5, $event));
    });
    i014.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r8 = i014.\u0275\u0275nextContext().$implicit;
    i014.\u0275\u0275property("label", tab_r8.name);
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275property("platformIndex", tab_r8.index);
  }
}
function DialogComponent_For_22_mat_tab_3_ng_template_1_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "mat-icon", 27);
    i014.\u0275\u0275text(1, "warning");
    i014.\u0275\u0275elementEnd();
  }
}
function DialogComponent_For_22_mat_tab_3_ng_template_1_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = i014.\u0275\u0275getCurrentView();
    i014.\u0275\u0275elementStart(0, "mat-icon", 28);
    i014.\u0275\u0275listener("click", function DialogComponent_For_22_mat_tab_3_ng_template_1_mat_icon_5_Template_mat_icon_click_0_listener() {
      i014.\u0275\u0275restoreView(_r14);
      const index_r5 = i014.\u0275\u0275nextContext(3).$index;
      const ctx_r5 = i014.\u0275\u0275nextContext();
      return i014.\u0275\u0275resetView(ctx_r5.removeTab(index_r5));
    });
    i014.\u0275\u0275text(1, "close");
    i014.\u0275\u0275elementEnd();
  }
}
function DialogComponent_For_22_mat_tab_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "div", 23)(1, "span");
    i014.\u0275\u0275text(2);
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(3, "span", 24);
    i014.\u0275\u0275template(4, DialogComponent_For_22_mat_tab_3_ng_template_1_mat_icon_4_Template, 2, 0, "mat-icon", 25)(5, DialogComponent_For_22_mat_tab_3_ng_template_1_mat_icon_5_Template, 2, 0, "mat-icon", 26);
    i014.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = i014.\u0275\u0275nextContext(2);
    const tab_r8 = ctx_r6.$implicit;
    const index_r5 = ctx_r6.$index;
    const ctx_r5 = i014.\u0275\u0275nextContext();
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275textInterpolate1("", tab_r8.name, "\xA0");
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275property("ngIf", ctx_r5.tabErrors[index_r5]);
    i014.\u0275\u0275advance();
    i014.\u0275\u0275property("ngIf", ctx_r5.tabs.length > 1);
  }
}
function DialogComponent_For_22_mat_tab_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = i014.\u0275\u0275getCurrentView();
    i014.\u0275\u0275elementStart(0, "mat-tab", 29);
    i014.\u0275\u0275template(1, DialogComponent_For_22_mat_tab_3_ng_template_1_Template, 6, 3, "ng-template", 21);
    i014.\u0275\u0275elementStart(2, "app-bing-form", 22, 3);
    i014.\u0275\u0275listener("platformChange", function DialogComponent_For_22_mat_tab_3_Template_app_bing_form_platformChange_2_listener($event) {
      i014.\u0275\u0275restoreView(_r13);
      const index_r5 = i014.\u0275\u0275nextContext().$index;
      const ctx_r5 = i014.\u0275\u0275nextContext();
      return i014.\u0275\u0275resetView(ctx_r5.handlePlatformChange(index_r5, $event));
    });
    i014.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r8 = i014.\u0275\u0275nextContext().$implicit;
    i014.\u0275\u0275property("label", tab_r8.name);
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275property("platformIndex", tab_r8.index);
  }
}
function DialogComponent_For_22_mat_tab_4_ng_template_1_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "mat-icon", 27);
    i014.\u0275\u0275text(1, "warning");
    i014.\u0275\u0275elementEnd();
  }
}
function DialogComponent_For_22_mat_tab_4_ng_template_1_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = i014.\u0275\u0275getCurrentView();
    i014.\u0275\u0275elementStart(0, "mat-icon", 28);
    i014.\u0275\u0275listener("click", function DialogComponent_For_22_mat_tab_4_ng_template_1_mat_icon_5_Template_mat_icon_click_0_listener() {
      i014.\u0275\u0275restoreView(_r16);
      const index_r5 = i014.\u0275\u0275nextContext(3).$index;
      const ctx_r5 = i014.\u0275\u0275nextContext();
      return i014.\u0275\u0275resetView(ctx_r5.removeTab(index_r5));
    });
    i014.\u0275\u0275text(1, "close");
    i014.\u0275\u0275elementEnd();
  }
}
function DialogComponent_For_22_mat_tab_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "div", 23)(1, "span");
    i014.\u0275\u0275text(2);
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(3, "span", 24);
    i014.\u0275\u0275template(4, DialogComponent_For_22_mat_tab_4_ng_template_1_mat_icon_4_Template, 2, 0, "mat-icon", 25)(5, DialogComponent_For_22_mat_tab_4_ng_template_1_mat_icon_5_Template, 2, 0, "mat-icon", 26);
    i014.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = i014.\u0275\u0275nextContext(2);
    const tab_r8 = ctx_r6.$implicit;
    const index_r5 = ctx_r6.$index;
    const ctx_r5 = i014.\u0275\u0275nextContext();
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275textInterpolate1("", tab_r8.name, "\xA0");
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275property("ngIf", ctx_r5.tabErrors[index_r5]);
    i014.\u0275\u0275advance();
    i014.\u0275\u0275property("ngIf", ctx_r5.tabs.length > 1);
  }
}
function DialogComponent_For_22_mat_tab_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = i014.\u0275\u0275getCurrentView();
    i014.\u0275\u0275elementStart(0, "mat-tab", 29);
    i014.\u0275\u0275template(1, DialogComponent_For_22_mat_tab_4_ng_template_1_Template, 6, 3, "ng-template", 21);
    i014.\u0275\u0275elementStart(2, "div", 30)(3, "mat-form-field", 7)(4, "mat-label");
    i014.\u0275\u0275text(5, "Select a platform");
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(6, "mat-select", 31);
    i014.\u0275\u0275listener("valueChange", function DialogComponent_For_22_mat_tab_4_Template_mat_select_valueChange_6_listener($event) {
      i014.\u0275\u0275restoreView(_r15);
      const index_r5 = i014.\u0275\u0275nextContext().$index;
      const ctx_r5 = i014.\u0275\u0275nextContext();
      return i014.\u0275\u0275resetView(ctx_r5.getPlatform($event, index_r5));
    });
    i014.\u0275\u0275elementStart(7, "mat-option", 32);
    i014.\u0275\u0275text(8, "Display & Video 360");
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(9, "mat-option", 33);
    i014.\u0275\u0275text(10, "Facebook");
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(11, "mat-option", 34);
    i014.\u0275\u0275text(12, "Google Ads");
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(13, "mat-option", 35);
    i014.\u0275\u0275text(14, "Bing");
    i014.\u0275\u0275elementEnd()()();
    i014.\u0275\u0275element(15, "div", 7);
    i014.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r8 = i014.\u0275\u0275nextContext().$implicit;
    const ctx_r5 = i014.\u0275\u0275nextContext();
    i014.\u0275\u0275property("label", tab_r8.name);
    i014.\u0275\u0275advance(7);
    i014.\u0275\u0275property("disabled", !ctx_r5.commonService.isConnected("dv360"));
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275property("disabled", !ctx_r5.commonService.isConnected("facebook"));
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275property("disabled", !ctx_r5.commonService.isConnected("googleAds"));
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275property("disabled", !ctx_r5.commonService.isConnected("bing"));
  }
}
function DialogComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275template(0, DialogComponent_For_22_mat_tab_0_Template, 4, 1, "mat-tab", 9)(1, DialogComponent_For_22_mat_tab_1_Template, 4, 2, "mat-tab", 20)(2, DialogComponent_For_22_mat_tab_2_Template, 4, 2, "mat-tab", 20)(3, DialogComponent_For_22_mat_tab_3_Template, 4, 2, "mat-tab", 20)(4, DialogComponent_For_22_mat_tab_4_Template, 16, 5, "mat-tab", 20);
  }
  if (rf & 2) {
    const tab_r8 = ctx.$implicit;
    i014.\u0275\u0275property("ngIf", tab_r8.value === "dv360");
    i014.\u0275\u0275advance();
    i014.\u0275\u0275property("ngIf", tab_r8.value === "facebook");
    i014.\u0275\u0275advance();
    i014.\u0275\u0275property("ngIf", tab_r8.value === "googleAds");
    i014.\u0275\u0275advance();
    i014.\u0275\u0275property("ngIf", tab_r8.value === "bing");
    i014.\u0275\u0275advance();
    i014.\u0275\u0275property("ngIf", tab_r8.value === "new");
  }
}
function DialogComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = i014.\u0275\u0275getCurrentView();
    i014.\u0275\u0275elementContainerStart(0);
    i014.\u0275\u0275elementStart(1, "button", 36);
    i014.\u0275\u0275listener("click", function DialogComponent_ng_container_27_Template_button_click_1_listener() {
      i014.\u0275\u0275restoreView(_r17);
      const ctx_r5 = i014.\u0275\u0275nextContext();
      return i014.\u0275\u0275resetView(ctx_r5.onSubmit(true));
    });
    i014.\u0275\u0275text(2, "Save & execute");
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275text(3, " \xA0 ");
    i014.\u0275\u0275elementContainerEnd();
  }
}
var _DialogComponent = class _DialogComponent {
  constructor(matDialog, dialogRef, authService, externalPlatforms, data, DV360ReportService2, db, facebookReportService, googleAdsReportService, bingReportService, commonService, cdRef, alertsService) {
    this.matDialog = matDialog;
    this.dialogRef = dialogRef;
    this.authService = authService;
    this.externalPlatforms = externalPlatforms;
    this.data = data;
    this.DV360ReportService = DV360ReportService2;
    this.db = db;
    this.facebookReportService = facebookReportService;
    this.googleAdsReportService = googleAdsReportService;
    this.bingReportService = bingReportService;
    this.commonService = commonService;
    this.cdRef = cdRef;
    this.alertsService = alertsService;
    this.formGroup = new FormGroup({
      campaignName: new FormControl("", Validators6.required),
      subaccount: new FormControl(null)
    });
    this.submitted = false;
    this.isEditMode = false;
    this.documentId = null;
    this.toaster = inject10(ToastrService10);
    this.isLoading = false;
    this.selectPlatforms = [];
    this.tabs = [{ name: "New platform", value: "new" }];
    this.selectedTab = new FormControl(0);
    this.tabErrors = [];
    this.subaccounts = [];
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.formGroup.get("campaignName").setValue(data.campaignName);
      this.formGroup.get("subaccount").setValue(data.subaccount);
      this.documentId = data.id;
      this.tabs = [];
      if (data && data.platforms) {
        this.selectPlatforms = data.platforms.map((platformData, index) => ({
          platform: platformData.platform,
          index
        }));
      }
      this.selectPlatforms.forEach((platform) => {
        if (platform.platform === "dv360") {
          this.tabs.push({ name: "Display & Video 360", value: platform.platform, index: platform.index });
        } else if (platform.platform === "facebook") {
          this.tabs.push({ name: "Facebook", value: platform.platform, index: platform.index });
        } else if (platform.platform === "googleAds") {
          this.tabs.push({ name: "Google Ads", value: platform.platform, index: platform.index });
        } else if (platform.platform === "bing") {
          this.tabs.push({ name: "Bing", value: platform.platform, index: platform.index });
        }
      });
    }
  }
  ngOnInit() {
    this.getSubaccounts().then(() => {
      this.filteredSubaccounts = this.formGroup.get("subaccount").valueChanges.pipe(startWith2(""), map2((value) => {
        if (!value) {
          return "";
        }
        return typeof value === "string" ? value : value.name;
      }), map2((name) => name ? this._filterSubaccounts(name) : this.subaccounts.slice()));
    });
  }
  _filterSubaccounts(value) {
    const filterValue = value.toLowerCase();
    return this.subaccounts ? this.subaccounts.filter((subaccount) => subaccount.name.toLowerCase().includes(filterValue)) : [];
  }
  displayFn(subaccount) {
    return subaccount && subaccount.name ? subaccount.name : "";
  }
  createSubaccount(event) {
    const subaccount = event.option.value;
    if (subaccount.id === "new") {
      const dialogRef = this.matDialog.open(SubaccountComponent, {
        width: "40%"
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.subaccounts.push(result);
          this.formGroup.get("subaccount").setValue(result);
        }
      });
    }
  }
  addSubaccount() {
    const newSubaccount = { name: this.formGroup.get("subaccount").value, accountId: this.commonService.selectedAccountId };
    if (newSubaccount && !this.subaccounts.some((sub) => sub.name === newSubaccount.name)) {
      this.db.collection("subaccount").add(newSubaccount).then((docRef) => {
        this.subaccounts.push(__spreadValues({ id: docRef.id }, newSubaccount));
        this.formGroup.get("subaccount").setValue(__spreadValues({ id: docRef.id }, newSubaccount));
      }).catch(() => {
        this.toaster.error("Failed to add subaccount", "Error");
      });
    }
  }
  getSubaccounts() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.subaccounts = [];
        this.db.collection("subaccount", (ref) => ref.where("accountId", "==", this.commonService.selectedAccountId)).get().subscribe((querySnapshot) => {
          querySnapshot.forEach((doc5) => {
            const subaccount = __spreadValues({
              id: doc5.id
            }, doc5.data());
            this.subaccounts.push(subaccount);
          });
          this.subaccounts.push({ id: "new", name: "Add new subaccount" });
          resolve();
        }, (error) => {
          reject(error);
        });
      });
    });
  }
  get form() {
    return this.formGroup ? this.formGroup.controls : {};
  }
  onSubmit(execute = false) {
    let allFormData = {
      campaignName: this.formGroup.get("campaignName").value,
      subaccount: this.formGroup.get("subaccount").value,
      accountId: this.commonService.selectedAccountId
    };
    this.authService.user$.subscribe((user) => {
      if (user) {
        allFormData.userId = user.uid;
      }
    });
    this.commonService.validateAllFormFields(this.formGroup);
    let platforms = [];
    let doSubmit = true;
    if (this.formGroup.get("campaignName").value === "") {
      doSubmit = false;
      this.toaster.error("Enter a name for the alert rule");
    }
    if (this.dv360Forms.length === 0 && this.facebookForms.length === 0 && this.googleAdsForms.length === 0 && this.bingForms.length === 0) {
      doSubmit = false;
      this.toaster.error("Please select a platform");
    }
    this.dv360Forms.forEach((form) => {
      const formData = form.getFormData();
      if (formData) {
        platforms.push({ platform: "dv360", formData, loading: execute });
      } else {
        doSubmit = false;
        this.toaster.error("A DV360 form is not valid");
      }
    });
    this.facebookForms.forEach((form) => {
      const formData = form.getFormData();
      if (formData) {
        platforms.push({ platform: "facebook", formData, loading: execute });
      } else {
        doSubmit = false;
        this.toaster.error("A Facebook form is not valid");
      }
    });
    this.googleAdsForms.forEach((form) => {
      const formData = form.getFormData();
      if (formData) {
        platforms.push({ platform: "googleAds", formData, loading: execute });
      } else {
        doSubmit = false;
        this.toaster.error("A Google Ads form is not valid");
      }
    });
    this.bingForms.forEach((form) => {
      const formData = form.getFormData();
      if (formData) {
        platforms.push({ platform: "bing", formData, loading: execute });
      } else {
        doSubmit = false;
        this.toaster.error("A Bing form is not valid");
      }
    });
    allFormData.platforms = platforms;
    this.updateValidity();
    this.cdRef.detectChanges();
    if (doSubmit) {
      this.saveData(execute, platforms, allFormData);
    }
    return of8(null);
  }
  prepareUpdateData(platforms, allFormData) {
    let dataToUpdate = allFormData;
    platforms.forEach((platformData) => {
      const platform = platformData.platform;
      switch (platform) {
        case "googleAds":
          if (!platforms.includes(platform)) {
            dataToUpdate.googleAdsAccount = deleteField();
            dataToUpdate.googleAdsBudget = deleteField();
            dataToUpdate.googleAdsCampaign = deleteField();
            dataToUpdate.googleAdsEndDate = deleteField();
            dataToUpdate.googleAdsPlatform = deleteField();
            dataToUpdate.googleAdsStartDate = deleteField();
          }
          break;
        case "dv360":
          if (!platforms.includes(platform)) {
            dataToUpdate.dv360Advertiser = deleteField();
            dataToUpdate.dv360Budget = deleteField();
            dataToUpdate.dv360CampaignId = deleteField();
            dataToUpdate.dv360EndDate = deleteField();
            dataToUpdate.dv360Partner = deleteField();
            dataToUpdate.dv360Platform = deleteField();
            dataToUpdate.dv360StartDate = deleteField();
          }
          break;
        case "facebook":
          if (!platforms.includes(platform)) {
            dataToUpdate.facebookAdAccount = deleteField();
            dataToUpdate.facebookBudget = deleteField();
            dataToUpdate.facebookCampaign = deleteField();
            dataToUpdate.facebookEndDate = deleteField();
            dataToUpdate.facebookPlatform = deleteField();
            dataToUpdate.facebookStartDate = deleteField();
          }
          break;
        case "bing":
          if (!platforms.includes(platform)) {
            dataToUpdate.bingAccount = deleteField();
            dataToUpdate.bingBudget = deleteField();
            dataToUpdate.bingCampaign = deleteField();
            dataToUpdate.bingEndDate = deleteField();
            dataToUpdate.bingPlatform = deleteField();
            dataToUpdate.bingStartDate = deleteField();
          }
          break;
      }
    });
    return dataToUpdate;
  }
  saveData() {
    return __async(this, arguments, function* (execute = false, platforms = [], allFormData) {
      if (this.isEditMode && this.documentId) {
        const updateData = this.prepareUpdateData(platforms, allFormData);
        return this.db.collection("userSearch").doc(this.documentId).update(updateData).then(() => {
          this.toaster.success("Alert rule updated successfully", "Success");
          if (execute) {
            platforms.forEach((platformData, index) => {
              const platform = platformData.platform;
              const data = updateData[platform];
              console.log(data);
              if (platform === "dv360") {
                this.DV360ReportService.processReport(__spreadValues({ id: this.documentId }, data), index).then((success) => {
                  if (success) {
                    this.alertsService.updateData(this.documentId, index);
                  }
                });
              } else if (platform === "facebook") {
                this.facebookReportService.processReport(__spreadValues({ id: this.documentId }, data), index).then((success) => {
                  if (success) {
                    this.alertsService.updateData(this.documentId, index);
                  }
                });
              } else if (platform === "googleAds") {
                this.googleAdsReportService.processReport(__spreadValues({ id: this.documentId }, data), index).then((success) => {
                  if (success) {
                    this.alertsService.updateData(this.documentId, index);
                  }
                });
              } else if (platform === "bing") {
                this.bingReportService.processReport(__spreadValues({ id: this.documentId }, data), index).then((success) => {
                  if (success) {
                    this.alertsService.updateData(this.documentId, index);
                  }
                });
              }
            });
          }
          localStorage.removeItem("partners");
          localStorage.removeItem("selectedPartner");
          localStorage.removeItem("adAccounts");
          this.dialogRef.close(updateData);
          return of8(null);
        });
      } else {
        return this.db.collection("userSearch").add(allFormData).then((docRef) => {
          return docRef.get().then((doc5) => {
            if (execute) {
              this.toaster.success("Alert rule created and executed successfully", "Success");
              let data = doc5.data();
              data.id = docRef.id;
              allFormData.id = docRef.id;
              platforms.forEach((platformData, index) => {
                const platform = platformData.platform;
                if (platform === "dv360") {
                  this.DV360ReportService.processReport(allFormData, index).then((success) => {
                    if (success) {
                      this.alertsService.updateData(data.id, index);
                    }
                  });
                } else if (platform === "facebook") {
                  this.facebookReportService.processReport(allFormData, index).then((success) => {
                    if (success) {
                      this.alertsService.updateData(data.id, index);
                    }
                  });
                } else if (platform === "googleAds") {
                  this.googleAdsReportService.processReport(allFormData, index).then((success) => {
                    if (success) {
                      this.alertsService.updateData(data.id, index);
                    }
                  });
                } else if (platform === "bing") {
                  this.bingReportService.processReport(allFormData, index).then((success) => {
                    if (success) {
                      this.alertsService.updateData(data.id, index);
                    }
                  });
                }
              });
            } else {
              this.toaster.success("Alert rule created successfully", "Success");
            }
            localStorage.removeItem("partners");
            localStorage.removeItem("selectedPartner");
            localStorage.removeItem("adAccounts");
            this.dialogRef.close(allFormData);
            return of8(null);
          });
        });
      }
    });
  }
  onCancel() {
    this.dialogRef.close();
  }
  addTab() {
    this.tabs.push({ name: "New platform", value: "new" });
    this.selectedTab.setValue(this.tabs.length - 1);
  }
  removeTab(index) {
    this.selectPlatforms = this.selectPlatforms.filter((platform) => platform !== this.tabs[index].value);
    this.tabs.splice(index, 1);
    this.selectedTab.setValue(index);
  }
  handlePlatformChange(index, newPlatform) {
    this.tabs[index].value = newPlatform;
    this.getPlatform(newPlatform, index);
    this.selectPlatforms = Array.from(new Set(this.tabs.map((tab) => tab.value)));
    this.cdRef.detectChanges();
  }
  getPlatform(platform, index) {
    const platforms = {
      "dv360": "Display & Video 360",
      "facebook": "Facebook",
      "googleAds": "Google Ads",
      "bing": "Bing"
    };
    this.selectPlatforms.push(platform);
    this.tabs[index] = { name: platforms[platform], value: platform };
  }
  updateValidity() {
    this.tabErrors = this.tabs.map((tab, index) => this.checkFormValidity(index));
  }
  checkFormValidity(index) {
    if (this.tabs[index].value === "dv360" && this.dv360Forms && this.dv360Forms.toArray().length > index) {
      return this.dv360Forms.toArray()[index].formGroup.invalid;
    } else if (this.tabs[index].value === "facebook" && this.facebookForms && this.facebookForms.toArray().length > index) {
      return this.facebookForms.toArray()[index].formGroup.invalid;
    } else if (this.tabs[index].value === "googleAds" && this.googleAdsForms && this.googleAdsForms.toArray().length > index) {
      return this.googleAdsForms.toArray()[index].formGroup.invalid;
    } else if (this.tabs[index].value === "bing" && this.bingForms && this.bingForms.toArray().length > index) {
      return this.bingForms.toArray()[index].formGroup.invalid;
    }
    return false;
  }
};
_DialogComponent.\u0275fac = function DialogComponent_Factory(t) {
  return new (t || _DialogComponent)(i014.\u0275\u0275directiveInject(i119.MatDialog), i014.\u0275\u0275directiveInject(i119.MatDialogRef), i014.\u0275\u0275directiveInject(AuthService), i014.\u0275\u0275directiveInject(ExternalPlatformsService), i014.\u0275\u0275directiveInject(MAT_DIALOG_DATA6), i014.\u0275\u0275directiveInject(DV360ReportService), i014.\u0275\u0275directiveInject(i52.AngularFirestore), i014.\u0275\u0275directiveInject(FacebookReportService), i014.\u0275\u0275directiveInject(GoogleAdsReportService), i014.\u0275\u0275directiveInject(BingReportService), i014.\u0275\u0275directiveInject(CommonService), i014.\u0275\u0275directiveInject(i014.ChangeDetectorRef), i014.\u0275\u0275directiveInject(AlertsService));
};
_DialogComponent.\u0275cmp = /* @__PURE__ */ i014.\u0275\u0275defineComponent({ type: _DialogComponent, selectors: [["app-dialog"]], viewQuery: function DialogComponent_Query(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275viewQuery(Dv360FormComponent, 5);
    i014.\u0275\u0275viewQuery(FacebookFormComponent, 5);
    i014.\u0275\u0275viewQuery(GoogleAdsFormComponent, 5);
    i014.\u0275\u0275viewQuery(BingFormComponent, 5);
  }
  if (rf & 2) {
    let _t;
    i014.\u0275\u0275queryRefresh(_t = i014.\u0275\u0275loadQuery()) && (ctx.dv360Forms = _t);
    i014.\u0275\u0275queryRefresh(_t = i014.\u0275\u0275loadQuery()) && (ctx.facebookForms = _t);
    i014.\u0275\u0275queryRefresh(_t = i014.\u0275\u0275loadQuery()) && (ctx.googleAdsForms = _t);
    i014.\u0275\u0275queryRefresh(_t = i014.\u0275\u0275loadQuery()) && (ctx.bingForms = _t);
  }
}, standalone: true, features: [i014.\u0275\u0275StandaloneFeature], decls: 30, vars: 11, consts: [["auto", "matAutocomplete"], ["dv360Form", ""], ["facebookForm", ""], ["googleAdsForm", ""], ["class", "loader-overlay", 4, "ngIf"], [3, "formGroup"], [1, "header"], [1, "form-element"], ["matInput", "", "formControlName", "campaignName"], [4, "ngIf"], ["matInput", "", "placeholder", "Choose a subaccount", "formControlName", "subaccount", 3, "matAutocomplete"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "button", "form-button", "create-button", 3, "click"], [3, "selectedIndexChange", "selectedIndex"], [1, "form-element", "footer"], ["mat-raised-button", "", "type", "submit", "color", "primary", "type", "button", 1, "button", "form-button", 3, "click"], ["mat-raised-button", "", "type", "button", 1, "button", 3, "click"], [1, "loader-overlay"], [3, "value"], [3, "label", 4, "ngIf"], ["mat-tab-label", ""], [3, "platformChange", "platformIndex"], [1, "tab-label"], [1, "icon-container"], ["class", "error-icon", 4, "ngIf"], ["class", "close-icon", 3, "click", 4, "ngIf"], [1, "error-icon"], [1, "close-icon", 3, "click"], [3, "label"], [1, "form-row"], [3, "valueChange"], ["value", "dv360", 3, "disabled"], ["value", "facebook", 3, "disabled"], ["value", "googleAds", 3, "disabled"], ["value", "bing", 3, "disabled"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "button", 3, "click"]], template: function DialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i014.\u0275\u0275getCurrentView();
    i014.\u0275\u0275template(0, DialogComponent_div_0_Template, 2, 0, "div", 4);
    i014.\u0275\u0275elementStart(1, "form", 5)(2, "div", 6)(3, "mat-form-field", 7)(4, "mat-label");
    i014.\u0275\u0275text(5, "Campaign Name");
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275element(6, "input", 8);
    i014.\u0275\u0275template(7, DialogComponent_mat_error_7_Template, 2, 0, "mat-error", 9);
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(8, "mat-form-field", 7)(9, "mat-label");
    i014.\u0275\u0275text(10, "Subaccount");
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275element(11, "input", 10);
    i014.\u0275\u0275elementStart(12, "mat-autocomplete", 11, 0);
    i014.\u0275\u0275listener("optionSelected", function DialogComponent_Template_mat_autocomplete_optionSelected_12_listener($event) {
      i014.\u0275\u0275restoreView(_r1);
      return i014.\u0275\u0275resetView(ctx.createSubaccount($event));
    });
    i014.\u0275\u0275template(14, DialogComponent_mat_option_14_Template, 2, 2, "mat-option", 12);
    i014.\u0275\u0275pipe(15, "async");
    i014.\u0275\u0275elementEnd()()();
    i014.\u0275\u0275elementStart(16, "button", 13);
    i014.\u0275\u0275listener("click", function DialogComponent_Template_button_click_16_listener() {
      i014.\u0275\u0275restoreView(_r1);
      return i014.\u0275\u0275resetView(ctx.addTab());
    });
    i014.\u0275\u0275elementStart(17, "mat-icon");
    i014.\u0275\u0275text(18, "add");
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275text(19, "Platform ");
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(20, "mat-tab-group", 14);
    i014.\u0275\u0275listener("selectedIndexChange", function DialogComponent_Template_mat_tab_group_selectedIndexChange_20_listener($event) {
      i014.\u0275\u0275restoreView(_r1);
      return i014.\u0275\u0275resetView(ctx.selectedTab.setValue($event));
    });
    i014.\u0275\u0275repeaterCreate(21, DialogComponent_For_22_Template, 5, 5, null, null, i014.\u0275\u0275repeaterTrackByIdentity);
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(23, "div", 15)(24, "button", 16);
    i014.\u0275\u0275listener("click", function DialogComponent_Template_button_click_24_listener() {
      i014.\u0275\u0275restoreView(_r1);
      return i014.\u0275\u0275resetView(ctx.onSubmit());
    });
    i014.\u0275\u0275text(25);
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275text(26, " \xA0 ");
    i014.\u0275\u0275template(27, DialogComponent_ng_container_27_Template, 4, 0, "ng-container", 9);
    i014.\u0275\u0275elementStart(28, "button", 17);
    i014.\u0275\u0275listener("click", function DialogComponent_Template_button_click_28_listener() {
      i014.\u0275\u0275restoreView(_r1);
      return i014.\u0275\u0275resetView(ctx.onCancel());
    });
    i014.\u0275\u0275text(29, "Cancel");
    i014.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const auto_r18 = i014.\u0275\u0275reference(13);
    i014.\u0275\u0275property("ngIf", ctx.isLoading);
    i014.\u0275\u0275advance();
    i014.\u0275\u0275property("formGroup", ctx.formGroup);
    i014.\u0275\u0275advance(6);
    i014.\u0275\u0275property("ngIf", (ctx.submitted || ctx.formGroup.get("campaignName").touched) && ctx.formGroup.get("campaignName").invalid);
    i014.\u0275\u0275advance(4);
    i014.\u0275\u0275property("matAutocomplete", auto_r18);
    i014.\u0275\u0275advance();
    i014.\u0275\u0275property("displayWith", ctx.displayFn);
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275property("ngForOf", i014.\u0275\u0275pipeBind1(15, 9, ctx.filteredSubaccounts));
    i014.\u0275\u0275advance(6);
    i014.\u0275\u0275property("selectedIndex", ctx.selectedTab.value);
    i014.\u0275\u0275advance();
    i014.\u0275\u0275repeater(ctx.tabs);
    i014.\u0275\u0275advance(4);
    i014.\u0275\u0275textInterpolate(ctx.isEditMode ? "Edit" : "Save");
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275property("ngIf", !ctx.isEditMode);
  }
}, dependencies: [
  FormsModule6,
  i1110.\u0275NgNoValidate,
  i1110.DefaultValueAccessor,
  i1110.NgControlStatus,
  i1110.NgControlStatusGroup,
  ReactiveFormsModule6,
  i1110.FormGroupDirective,
  i1110.FormControlName,
  CommonModule6,
  i126.NgForOf,
  i126.NgIf,
  i126.AsyncPipe,
  MatButtonModule2,
  i136.MatButton,
  MatInputModule6,
  i145.MatInput,
  i155.MatFormField,
  i155.MatLabel,
  i155.MatError,
  MatSelectModule6,
  i165.MatSelect,
  i173.MatOption,
  MatIconModule5,
  i182.MatIcon,
  MatProgressSpinnerModule5,
  i192.MatProgressSpinner,
  MatAutocompleteModule5,
  i20.MatAutocomplete,
  i20.MatAutocompleteTrigger,
  MatTabsModule,
  i21.MatTabLabel,
  i21.MatTab,
  i21.MatTabGroup,
  Dv360FormComponent,
  FacebookFormComponent,
  GoogleAdsFormComponent,
  BingFormComponent
], styles: ["\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 3%;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  margin-top: 30px;\n  margin-left: 25px;\n  width: 95%;\n}\n.form-element[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.budget-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.budget-row[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n  flex: 0 1 49%;\n}\n.button[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.create-button[_ngcontent-%COMP%] {\n  min-height: 30px !important;\n  height: 35px !important;\n}\n.form-button[_ngcontent-%COMP%], .header[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.header[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5%;\n}\n.loader-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\nform[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.error-icon[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 18px;\n  vertical-align: bottom;\n}\n.tab-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.close-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=dialog.component.css.map */"] });
var DialogComponent = _DialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i014.\u0275setClassDebugInfo(DialogComponent, { className: "DialogComponent" });
})();

// src/app/components/confirm-dialog/confirm-dialog.component.ts
import { Component as Component7, Inject as Inject7 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { MAT_DIALOG_DATA as MAT_DIALOG_DATA7, MatDialogModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import { MatButtonModule as MatButtonModule3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import * as i015 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i120 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import * as i28 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
var _ConfirmDialogComponent = class _ConfirmDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
};
_ConfirmDialogComponent.\u0275fac = function ConfirmDialogComponent_Factory(t) {
  return new (t || _ConfirmDialogComponent)(i015.\u0275\u0275directiveInject(i120.MatDialogRef), i015.\u0275\u0275directiveInject(MAT_DIALOG_DATA7));
};
_ConfirmDialogComponent.\u0275cmp = /* @__PURE__ */ i015.\u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], standalone: true, features: [i015.\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [["mat-dialog-title", ""], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"], ["mat-raised-button", "", 3, "mat-dialog-close"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    i015.\u0275\u0275elementStart(0, "h2", 0);
    i015.\u0275\u0275text(1, "Confirm delete");
    i015.\u0275\u0275elementEnd();
    i015.\u0275\u0275elementStart(2, "mat-dialog-content");
    i015.\u0275\u0275text(3);
    i015.\u0275\u0275elementEnd();
    i015.\u0275\u0275elementStart(4, "mat-dialog-actions")(5, "button", 1);
    i015.\u0275\u0275text(6, "Yes");
    i015.\u0275\u0275elementEnd();
    i015.\u0275\u0275elementStart(7, "button", 2);
    i015.\u0275\u0275text(8, "Cancel");
    i015.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    i015.\u0275\u0275advance(3);
    i015.\u0275\u0275textInterpolate(ctx.data.message);
    i015.\u0275\u0275advance(2);
    i015.\u0275\u0275property("mat-dialog-close", true);
    i015.\u0275\u0275advance(2);
    i015.\u0275\u0275property("mat-dialog-close", false);
  }
}, dependencies: [MatDialogModule, i120.MatDialogClose, i120.MatDialogTitle, i120.MatDialogActions, i120.MatDialogContent, MatButtonModule3, i28.MatButton], styles: ["\n\nmat-dialog-actions[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n  margin-left: 5%;\n}\n/*# sourceMappingURL=confirm-dialog.component.css.map */"] });
var ConfirmDialogComponent = _ConfirmDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i015.\u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent" });
})();

// src/app/components/home/home.component.ts
import { MatTableDataSource } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_table.js?v=478e822e";
import { MatTableModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_table.js?v=478e822e";
import { MatButtonModule as MatButtonModule4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import { MatPaginatorModule, MatPaginator } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_paginator.js?v=478e822e";
import { MatIconModule as MatIconModule6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import * as i016 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i121 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
import * as i29 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import * as i86 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_router.js?v=478e822e";
import * as i95 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_table.js?v=478e822e";
import * as i105 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import * as i1111 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_paginator.js?v=478e822e";
import * as i127 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import * as i137 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
var _c05 = () => [6];
var _c13 = (a0) => ({ "top.%": a0 });
function HomeComponent_th_5_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "th", 20);
    i016.\u0275\u0275text(1, "Campaign Name");
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i016.\u0275\u0275styleProp("background-color", "rgba(158, 159, 159, 0.5)");
  }
}
function HomeComponent_td_6_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "td", 21);
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r1 = ctx.$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(element_r1.campaignName);
  }
}
function HomeComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "th", 22);
    i016.\u0275\u0275text(1, "Platform");
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i016.\u0275\u0275styleProp("background-color", "rgba(158, 159, 159, 0.5)");
  }
}
function HomeComponent_td_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1, "Display & Video 360");
    i016.\u0275\u0275elementEnd();
  }
}
function HomeComponent_td_9_hr_2_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "hr");
  }
}
function HomeComponent_td_9_span_3_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1, "Facebook");
    i016.\u0275\u0275elementEnd();
  }
}
function HomeComponent_td_9_hr_4_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "hr");
  }
}
function HomeComponent_td_9_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1, "Google Ads");
    i016.\u0275\u0275elementEnd();
  }
}
function HomeComponent_td_9_hr_6_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "hr");
  }
}
function HomeComponent_td_9_span_7_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1, "Bing");
    i016.\u0275\u0275elementEnd();
  }
}
function HomeComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "td", 23);
    i016.\u0275\u0275template(1, HomeComponent_td_9_span_1_Template, 2, 0, "span", 24)(2, HomeComponent_td_9_hr_2_Template, 1, 0, "hr", 24)(3, HomeComponent_td_9_span_3_Template, 2, 0, "span", 24)(4, HomeComponent_td_9_hr_4_Template, 1, 0, "hr", 24)(5, HomeComponent_td_9_span_5_Template, 2, 0, "span", 24)(6, HomeComponent_td_9_hr_6_Template, 1, 0, "hr", 24)(7, HomeComponent_td_9_span_7_Template, 2, 0, "span", 24);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    i016.\u0275\u0275styleProp("height", element_r2.platforms.length * 52, "px");
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r2.platforms.includes("dv360"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r2.platforms.includes("dv360") && (element_r2.platforms.includes("facebook") || element_r2.platforms.includes("googleAds") || element_r2.platforms.includes("bing")));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r2.platforms.includes("facebook"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r2.platforms.includes("facebook") && (element_r2.platforms.includes("googleAds") || element_r2.platforms.includes("bing")));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r2.platforms.includes("googleAds"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r2.platforms.includes("googleAds") && element_r2.platforms.includes("bing"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r2.platforms.includes("bing"));
  }
}
function HomeComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "th", 22);
    i016.\u0275\u0275text(1, "Campaign ID");
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i016.\u0275\u0275styleProp("background-color", "rgba(158, 159, 159, 0.5)");
  }
}
function HomeComponent_td_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = i016.\u0275\u0275nextContext().$implicit;
    const ctx_r3 = i016.\u0275\u0275nextContext();
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(ctx_r3.getConcatenatedCampaignIds(element_r3, "dv360"));
  }
}
function HomeComponent_td_12_hr_2_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "hr");
  }
}
function HomeComponent_td_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = i016.\u0275\u0275nextContext().$implicit;
    const ctx_r3 = i016.\u0275\u0275nextContext();
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(ctx_r3.getConcatenatedCampaignIds(element_r3, "facebook"));
  }
}
function HomeComponent_td_12_hr_4_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "hr");
  }
}
function HomeComponent_td_12_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = i016.\u0275\u0275nextContext().$implicit;
    const ctx_r3 = i016.\u0275\u0275nextContext();
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(ctx_r3.getConcatenatedCampaignIds(element_r3, "googleAds"));
  }
}
function HomeComponent_td_12_hr_6_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "hr");
  }
}
function HomeComponent_td_12_span_7_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = i016.\u0275\u0275nextContext().$implicit;
    const ctx_r3 = i016.\u0275\u0275nextContext();
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(ctx_r3.getConcatenatedCampaignIds(element_r3, "bing"));
  }
}
function HomeComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "td", 23);
    i016.\u0275\u0275template(1, HomeComponent_td_12_span_1_Template, 2, 1, "span", 24)(2, HomeComponent_td_12_hr_2_Template, 1, 0, "hr", 24)(3, HomeComponent_td_12_span_3_Template, 2, 1, "span", 24)(4, HomeComponent_td_12_hr_4_Template, 1, 0, "hr", 24)(5, HomeComponent_td_12_span_5_Template, 2, 1, "span", 24)(6, HomeComponent_td_12_hr_6_Template, 1, 0, "hr", 24)(7, HomeComponent_td_12_span_7_Template, 2, 1, "span", 24);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r3.platforms.includes("dv360"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r3.platforms.includes("dv360") && (element_r3.platforms.includes("facebook") || element_r3.platforms.includes("googleAds") || element_r3.platforms.includes("bing")));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r3.platforms.includes("facebook"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r3.platforms.includes("facebook") && (element_r3.platforms.includes("googleAds") || element_r3.platforms.includes("bing")));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r3.platforms.includes("googleAds"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r3.platforms.includes("googleAds") && element_r3.platforms.includes("bing"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r3.platforms.includes("bing"));
  }
}
function HomeComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "th", 22);
    i016.\u0275\u0275text(1, "Start Date");
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i016.\u0275\u0275styleProp("background-color", "rgba(158, 159, 159, 0.5)");
  }
}
function HomeComponent_td_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = i016.\u0275\u0275nextContext().$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(element_r5.dv360StartDate);
  }
}
function HomeComponent_td_15_hr_2_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "hr");
  }
}
function HomeComponent_td_15_span_3_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = i016.\u0275\u0275nextContext().$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(element_r5.facebookStartDate);
  }
}
function HomeComponent_td_15_hr_4_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "hr");
  }
}
function HomeComponent_td_15_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = i016.\u0275\u0275nextContext().$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(element_r5.googleAdsStartDate);
  }
}
function HomeComponent_td_15_hr_6_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "hr");
  }
}
function HomeComponent_td_15_span_7_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = i016.\u0275\u0275nextContext().$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(element_r5.bingStartDate);
  }
}
function HomeComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "td", 23);
    i016.\u0275\u0275template(1, HomeComponent_td_15_span_1_Template, 2, 1, "span", 24)(2, HomeComponent_td_15_hr_2_Template, 1, 0, "hr", 24)(3, HomeComponent_td_15_span_3_Template, 2, 1, "span", 24)(4, HomeComponent_td_15_hr_4_Template, 1, 0, "hr", 24)(5, HomeComponent_td_15_span_5_Template, 2, 1, "span", 24)(6, HomeComponent_td_15_hr_6_Template, 1, 0, "hr", 24)(7, HomeComponent_td_15_span_7_Template, 2, 1, "span", 24);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r5.platforms.includes("dv360"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r5.platforms.includes("dv360") && (element_r5.platforms.includes("facebook") || element_r5.platforms.includes("googleAds") || element_r5.platforms.includes("bing")));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r5.platforms.includes("facebook"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r5.platforms.includes("facebook") && (element_r5.platforms.includes("googleAds") || element_r5.platforms.includes("bing")));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r5.platforms.includes("googleAds"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r5.platforms.includes("googleAds") && element_r5.platforms.includes("bing"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r5.platforms.includes("bing"));
  }
}
function HomeComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "th", 22);
    i016.\u0275\u0275text(1, "End Date");
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i016.\u0275\u0275styleProp("background-color", "rgba(158, 159, 159, 0.5)");
  }
}
function HomeComponent_td_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = i016.\u0275\u0275nextContext().$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(element_r6.dv360EndDate);
  }
}
function HomeComponent_td_18_hr_2_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "hr");
  }
}
function HomeComponent_td_18_span_3_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = i016.\u0275\u0275nextContext().$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(element_r6.facebookEndDate);
  }
}
function HomeComponent_td_18_hr_4_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "hr");
  }
}
function HomeComponent_td_18_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = i016.\u0275\u0275nextContext().$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(element_r6.googleAdsEndDate);
  }
}
function HomeComponent_td_18_hr_6_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "hr");
  }
}
function HomeComponent_td_18_span_7_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = i016.\u0275\u0275nextContext().$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(element_r6.bingEndDate);
  }
}
function HomeComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "td", 23);
    i016.\u0275\u0275template(1, HomeComponent_td_18_span_1_Template, 2, 1, "span", 24)(2, HomeComponent_td_18_hr_2_Template, 1, 0, "hr", 24)(3, HomeComponent_td_18_span_3_Template, 2, 1, "span", 24)(4, HomeComponent_td_18_hr_4_Template, 1, 0, "hr", 24)(5, HomeComponent_td_18_span_5_Template, 2, 1, "span", 24)(6, HomeComponent_td_18_hr_6_Template, 1, 0, "hr", 24)(7, HomeComponent_td_18_span_7_Template, 2, 1, "span", 24);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r6.platforms.includes("dv360"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r6.platforms.includes("dv360") && (element_r6.platforms.includes("facebook") || element_r6.platforms.includes("googleAds") || element_r6.platforms.includes("bing")));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r6.platforms.includes("facebook"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r6.platforms.includes("facebook") && (element_r6.platforms.includes("googleAds") || element_r6.platforms.includes("bing")));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r6.platforms.includes("googleAds"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r6.platforms.includes("googleAds") && element_r6.platforms.includes("bing"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r6.platforms.includes("bing"));
  }
}
function HomeComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "th", 22);
    i016.\u0275\u0275text(1, "Budget");
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i016.\u0275\u0275styleProp("background-color", "rgba(158, 159, 159, 0.5)");
  }
}
function HomeComponent_td_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = i016.\u0275\u0275nextContext().$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(element_r7.dv360Budget);
  }
}
function HomeComponent_td_21_hr_2_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "hr");
  }
}
function HomeComponent_td_21_span_3_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = i016.\u0275\u0275nextContext().$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(element_r7.facebookBudget);
  }
}
function HomeComponent_td_21_hr_4_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "hr");
  }
}
function HomeComponent_td_21_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = i016.\u0275\u0275nextContext().$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(element_r7.googleAdsBudget);
  }
}
function HomeComponent_td_21_hr_6_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "hr");
  }
}
function HomeComponent_td_21_span_7_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "span");
    i016.\u0275\u0275text(1);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = i016.\u0275\u0275nextContext().$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275textInterpolate(element_r7.bingBudget);
  }
}
function HomeComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "td", 23);
    i016.\u0275\u0275template(1, HomeComponent_td_21_span_1_Template, 2, 1, "span", 24)(2, HomeComponent_td_21_hr_2_Template, 1, 0, "hr", 24)(3, HomeComponent_td_21_span_3_Template, 2, 1, "span", 24)(4, HomeComponent_td_21_hr_4_Template, 1, 0, "hr", 24)(5, HomeComponent_td_21_span_5_Template, 2, 1, "span", 24)(6, HomeComponent_td_21_hr_6_Template, 1, 0, "hr", 24)(7, HomeComponent_td_21_span_7_Template, 2, 1, "span", 24);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r7.platforms.includes("dv360"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r7.platforms.includes("dv360") && (element_r7.platforms.includes("facebook") || element_r7.platforms.includes("googleAds") || element_r7.platforms.includes("bing")));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r7.platforms.includes("facebook"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r7.platforms.includes("facebook") && (element_r7.platforms.includes("googleAds") || element_r7.platforms.includes("bing")));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r7.platforms.includes("googleAds"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r7.platforms.includes("googleAds") && element_r7.platforms.includes("bing"));
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", element_r7.platforms.includes("bing"));
  }
}
function HomeComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "th", 25);
  }
  if (rf & 2) {
    i016.\u0275\u0275styleProp("background-color", "rgba(158, 159, 159, 0.5)");
  }
}
function HomeComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = i016.\u0275\u0275getCurrentView();
    i016.\u0275\u0275elementStart(0, "td", 26)(1, "button", 27);
    i016.\u0275\u0275listener("click", function HomeComponent_td_24_Template_button_click_1_listener() {
      const element_r9 = i016.\u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = i016.\u0275\u0275nextContext();
      return i016.\u0275\u0275resetView(ctx_r3.editRule(element_r9));
    });
    i016.\u0275\u0275elementStart(2, "mat-icon");
    i016.\u0275\u0275text(3, "edit");
    i016.\u0275\u0275elementEnd()();
    i016.\u0275\u0275elementStart(4, "button", 28);
    i016.\u0275\u0275listener("click", function HomeComponent_td_24_Template_button_click_4_listener($event) {
      const element_r9 = i016.\u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = i016.\u0275\u0275nextContext();
      return i016.\u0275\u0275resetView(ctx_r3.deleteRow(element_r9, $event));
    });
    i016.\u0275\u0275elementStart(5, "mat-icon");
    i016.\u0275\u0275text(6, "delete");
    i016.\u0275\u0275elementEnd()();
    i016.\u0275\u0275elementStart(7, "button", 29);
    i016.\u0275\u0275listener("click", function HomeComponent_td_24_Template_button_click_7_listener() {
      const element_r9 = i016.\u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = i016.\u0275\u0275nextContext();
      return i016.\u0275\u0275resetView(ctx_r3.processReport(element_r9));
    });
    i016.\u0275\u0275elementStart(8, "mat-icon");
    i016.\u0275\u0275text(9, "play_arrow");
    i016.\u0275\u0275elementEnd()();
    i016.\u0275\u0275elementStart(10, "button", 30);
    i016.\u0275\u0275listener("click", function HomeComponent_td_24_Template_button_click_10_listener() {
      const element_r9 = i016.\u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = i016.\u0275\u0275nextContext();
      return i016.\u0275\u0275resetView(ctx_r3.showResult(element_r9));
    });
    i016.\u0275\u0275elementStart(11, "mat-icon");
    i016.\u0275\u0275text(12, "assessment");
    i016.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const ctx_r3 = i016.\u0275\u0275nextContext();
    i016.\u0275\u0275styleProp("height", element_r9.platforms.length * 52, "px");
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngStyle", i016.\u0275\u0275pureFunction1(6, _c13, ctx_r3.getButtonTopPosition(element_r9)));
    i016.\u0275\u0275advance(3);
    i016.\u0275\u0275property("ngStyle", i016.\u0275\u0275pureFunction1(8, _c13, ctx_r3.getButtonTopPosition(element_r9)));
    i016.\u0275\u0275advance(3);
    i016.\u0275\u0275property("ngStyle", i016.\u0275\u0275pureFunction1(10, _c13, ctx_r3.getButtonTopPosition(element_r9)));
    i016.\u0275\u0275advance(3);
    i016.\u0275\u0275property("ngStyle", i016.\u0275\u0275pureFunction1(12, _c13, ctx_r3.getButtonTopPosition(element_r9)));
  }
}
function HomeComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "tr", 31);
  }
}
function HomeComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275element(0, "tr", 32);
  }
}
var _HomeComponent = class _HomeComponent {
  constructor(db, matDialog, authService, DV360ReportService2, facebookReportService, bingReportService, googleAdsReportService, router) {
    this.db = db;
    this.matDialog = matDialog;
    this.authService = authService;
    this.DV360ReportService = DV360ReportService2;
    this.facebookReportService = facebookReportService;
    this.bingReportService = bingReportService;
    this.googleAdsReportService = googleAdsReportService;
    this.router = router;
    this.displayedColumns = ["campaignName", "platform", "campaignId", "startDate", "endDate", "budget", "icon"];
    this.dataSource = new MatTableDataSource([]);
  }
  ngOnInit() {
    this.getSearch();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  openDialog() {
    this.matDialog.open(DialogComponent, {
      width: "70%",
      height: "90vh"
    }).afterClosed().subscribe(() => {
      this.getSearch();
    });
  }
  updateSearch(data) {
    this.db.collection("userSearch").doc(data.id).update(data);
  }
  getSearch() {
    this.authService.user$.pipe(take(1)).subscribe((user) => {
      if (user && user.uid) {
        this.db.collection("userSearch", (ref) => ref.where("userId", "==", user.uid)).snapshotChanges().subscribe((actions) => {
          const data = actions.map((a) => {
            const data2 = a.payload.doc.data();
            const id = a.payload.doc.id;
            if (data2) {
              return __spreadValues({ id }, data2);
            } else {
              return {};
            }
          });
          this.dataSource.data = data;
        });
      }
    });
  }
  getConcatenatedCampaignIds(element, platform) {
    if (platform === "dv360") {
      if (!element.dv360CampaignId) {
        return "";
      }
      return element.dv360CampaignId.map((c) => c.campaignId).join(", ");
    } else if (platform === "facebook") {
      if (!element.facebookCampaign) {
        return "";
      }
      return element.facebookCampaign.map((c) => c.id).join(", ");
    } else if (platform === "bing") {
      if (!element.bingCampaign) {
        return "";
      }
      return element.bingCampaign.map((c) => c.id).join(", ");
    } else if (platform === "googleAds") {
      if (!element.googleAdsCampaign) {
        return "";
      }
      return element.googleAdsCampaign.map((c) => c.id).join(", ");
    }
    return "";
  }
  editRule(row) {
    const dataCopy = JSON.parse(JSON.stringify(row));
    const dialogRef = this.matDialog.open(DialogComponent, {
      width: "70%",
      height: "90vh",
      data: dataCopy
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getSearch();
    });
  }
  showResult(row) {
    this.router.navigate(["/pacing", row.campaignName]);
  }
  deleteRow(row, event) {
    event.stopPropagation();
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      width: "20%",
      data: { message: "Are you sure to delete the alert rule for " + row.campaignName + "?" }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.db.collection("userSearch").doc(row.id).delete().catch((error) => {
          console.error("Error removing document: ", error);
        });
      }
    });
  }
  processReport(campaign) {
  }
  getButtonTopPosition(element) {
    if (element.platforms.length === 1) {
      return 1;
    } else {
      return 20;
    }
  }
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
  return new (t || _HomeComponent)(i016.\u0275\u0275directiveInject(i121.AngularFirestore), i016.\u0275\u0275directiveInject(i29.MatDialog), i016.\u0275\u0275directiveInject(AuthService), i016.\u0275\u0275directiveInject(DV360ReportService), i016.\u0275\u0275directiveInject(FacebookReportService), i016.\u0275\u0275directiveInject(BingReportService), i016.\u0275\u0275directiveInject(GoogleAdsReportService), i016.\u0275\u0275directiveInject(i86.Router));
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ i016.\u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-table"]], viewQuery: function HomeComponent_Query(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275viewQuery(MatPaginator, 5);
  }
  if (rf & 2) {
    let _t;
    i016.\u0275\u0275queryRefresh(_t = i016.\u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
  }
}, standalone: true, features: [i016.\u0275\u0275StandaloneFeature], decls: 28, vars: 5, consts: [["mat-raised-button", "", "color", "primary", 1, "create", 3, "click"], [1, "table-container"], ["mat-table", "", 1, "mat-elevation-z8", "table", 3, "dataSource"], ["matColumnDef", "campaignName"], ["class", "first-column", "mat-header-cell", "", 3, "background-color", 4, "matHeaderCellDef"], ["class", "first-column", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "platform"], ["mat-header-cell", "", 3, "background-color", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "height", 4, "matCellDef"], ["matColumnDef", "campaignId"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "startDate"], ["matColumnDef", "endDate"], ["matColumnDef", "budget"], ["matColumnDef", "icon"], ["mat-header-cell", "", "class", "icon-column", 3, "background-color", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "icon-row", 3, "height", 4, "matCellDef"], ["mat-header-row", "", "class", "head-row", 4, "matHeaderRowDef"], ["mat-row", "", "class", "row", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", 1, "first-column"], ["mat-cell", "", 1, "first-column"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], ["mat-header-cell", "", 1, "icon-column"], ["mat-cell", "", 1, "icon-row"], ["mat-icon-button", "", "aria-label", "Edit button", 1, "icon", 3, "click", "ngStyle"], ["mat-icon-button", "", "aria-label", "Delete button", 1, "icon", 3, "click", "ngStyle"], ["mat-icon-button", "", "aria-label", "Process button", 1, "icon", 3, "click", "ngStyle"], ["mat-icon-button", "", "aria-label", "Show result button", 1, "icon", 3, "click", "ngStyle"], ["mat-header-row", "", 1, "head-row"], ["mat-row", "", 1, "row"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "button", 0);
    i016.\u0275\u0275listener("click", function HomeComponent_Template_button_click_0_listener() {
      return ctx.openDialog();
    });
    i016.\u0275\u0275text(1, "Create alert rule");
    i016.\u0275\u0275elementEnd();
    i016.\u0275\u0275elementStart(2, "div", 1)(3, "table", 2);
    i016.\u0275\u0275elementContainerStart(4, 3);
    i016.\u0275\u0275template(5, HomeComponent_th_5_Template, 2, 2, "th", 4)(6, HomeComponent_td_6_Template, 2, 1, "td", 5);
    i016.\u0275\u0275elementContainerEnd();
    i016.\u0275\u0275elementContainerStart(7, 6);
    i016.\u0275\u0275template(8, HomeComponent_th_8_Template, 2, 2, "th", 7)(9, HomeComponent_td_9_Template, 8, 9, "td", 8);
    i016.\u0275\u0275elementContainerEnd();
    i016.\u0275\u0275elementContainerStart(10, 9);
    i016.\u0275\u0275template(11, HomeComponent_th_11_Template, 2, 2, "th", 7)(12, HomeComponent_td_12_Template, 8, 7, "td", 10);
    i016.\u0275\u0275elementContainerEnd();
    i016.\u0275\u0275elementContainerStart(13, 11);
    i016.\u0275\u0275template(14, HomeComponent_th_14_Template, 2, 2, "th", 7)(15, HomeComponent_td_15_Template, 8, 7, "td", 10);
    i016.\u0275\u0275elementContainerEnd();
    i016.\u0275\u0275elementContainerStart(16, 12);
    i016.\u0275\u0275template(17, HomeComponent_th_17_Template, 2, 2, "th", 7)(18, HomeComponent_td_18_Template, 8, 7, "td", 10);
    i016.\u0275\u0275elementContainerEnd();
    i016.\u0275\u0275elementContainerStart(19, 13);
    i016.\u0275\u0275template(20, HomeComponent_th_20_Template, 2, 2, "th", 7)(21, HomeComponent_td_21_Template, 8, 7, "td", 10);
    i016.\u0275\u0275elementContainerEnd();
    i016.\u0275\u0275elementContainerStart(22, 14);
    i016.\u0275\u0275template(23, HomeComponent_th_23_Template, 1, 2, "th", 15)(24, HomeComponent_td_24_Template, 13, 14, "td", 16);
    i016.\u0275\u0275elementContainerEnd();
    i016.\u0275\u0275template(25, HomeComponent_tr_25_Template, 1, 0, "tr", 17)(26, HomeComponent_tr_26_Template, 1, 0, "tr", 18);
    i016.\u0275\u0275elementEnd()();
    i016.\u0275\u0275element(27, "mat-paginator", 19);
  }
  if (rf & 2) {
    i016.\u0275\u0275advance(3);
    i016.\u0275\u0275property("dataSource", ctx.dataSource);
    i016.\u0275\u0275advance(22);
    i016.\u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("pageSizeOptions", i016.\u0275\u0275pureFunction0(4, _c05));
  }
}, dependencies: [MatTableModule, i95.MatTable, i95.MatHeaderCellDef, i95.MatHeaderRowDef, i95.MatColumnDef, i95.MatCellDef, i95.MatRowDef, i95.MatHeaderCell, i95.MatCell, i95.MatHeaderRow, i95.MatRow, MatButtonModule4, i105.MatButton, i105.MatIconButton, MatPaginatorModule, i1111.MatPaginator, MatIconModule6, i127.MatIcon, CommonModule7, i137.NgIf, i137.NgStyle], styles: ["\n\n.table-container[_ngcontent-%COMP%] {\n  margin: 3% 3%;\n}\n.create[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 3%;\n  margin-bottom: 2%;\n}\n.table[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(158, 159, 159, 0.05);\n}\n.icon[_ngcontent-%COMP%] {\n  visibility: hidden;\n  left: 5%;\n}\n.icon-column[_ngcontent-%COMP%] {\n  width: 0;\n  position: absolute;\n}\n.table[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.table[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:hover   .icon-row[_ngcontent-%COMP%] {\n  background-color: rgb(236, 236, 236);\n}\ntable[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden !important;\n  position: relative;\n}\n.icon-row[_ngcontent-%COMP%] {\n  background-color: rgba(236, 236, 236, 0);\n  position: absolute;\n  right: -1%;\n  width: 220px;\n  height: 52px;\n  border-color: rgba(236, 236, 236, 0);\n}\nhr[_ngcontent-%COMP%] {\n  height: 1px;\n  background-color: rgb(207, 207, 207);\n  border: none;\n  width: 100%;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.first-column[_ngcontent-%COMP%] {\n  padding-left: 25px;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i016.\u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent" });
})();

// src/app/components/sign-in/sign-in.component.ts
import { Component as Component9, inject as inject11 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule8 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { Validators as Validators7, FormControl as FormControl2, ReactiveFormsModule as ReactiveFormsModule7 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import { sendPasswordResetEmail, getAuth as getAuth11, fetchSignInMethodsForEmail } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_auth.js?v=478e822e";
import { MatButtonModule as MatButtonModule5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import { MatFormFieldModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import { MatInputModule as MatInputModule7 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import { MatIconModule as MatIconModule7 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import { ToastrService as ToastrService11 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import * as i017 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i210 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import * as i35 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_router.js?v=478e822e";
import * as i53 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i66 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import * as i76 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import * as i87 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import * as i96 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
function SignInComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275elementStart(0, "p", 13);
    i017.\u0275\u0275text(1, "Enter your email address and we will send you instructions to reset your password.");
    i017.\u0275\u0275elementEnd();
  }
}
function SignInComponent_mat_form_field_5_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275elementStart(0, "mat-error");
    i017.\u0275\u0275text(1, " Username is required. ");
    i017.\u0275\u0275elementEnd();
  }
}
function SignInComponent_mat_form_field_5_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275elementStart(0, "mat-form-field", 5)(1, "mat-label");
    i017.\u0275\u0275text(2, "Username");
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275element(3, "input", 14);
    i017.\u0275\u0275template(4, SignInComponent_mat_form_field_5_mat_error_4_Template, 2, 0, "mat-error", 7);
    i017.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = i017.\u0275\u0275nextContext();
    i017.\u0275\u0275advance(4);
    i017.\u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.formGroup.get("username")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
  }
}
function SignInComponent_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275elementStart(0, "mat-error");
    i017.\u0275\u0275text(1, " Email is required. ");
    i017.\u0275\u0275elementEnd();
  }
}
function SignInComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275elementStart(0, "mat-error");
    i017.\u0275\u0275text(1, " Please enter a valid email address. ");
    i017.\u0275\u0275elementEnd();
  }
}
function SignInComponent_mat_form_field_12_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275elementStart(0, "mat-error");
    i017.\u0275\u0275text(1, " Password is required. ");
    i017.\u0275\u0275elementEnd();
  }
}
function SignInComponent_mat_form_field_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275elementStart(0, "mat-error");
    i017.\u0275\u0275text(1, " Password must be at least 6 characters long. ");
    i017.\u0275\u0275elementEnd();
  }
}
function SignInComponent_mat_form_field_12_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275elementStart(0, "mat-error");
    i017.\u0275\u0275text(1, " Password must contain at least one uppercase letter. ");
    i017.\u0275\u0275elementEnd();
  }
}
function SignInComponent_mat_form_field_12_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275elementStart(0, "mat-error");
    i017.\u0275\u0275text(1, " Password must contain at least one lowercase letter. ");
    i017.\u0275\u0275elementEnd();
  }
}
function SignInComponent_mat_form_field_12_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275elementStart(0, "mat-error");
    i017.\u0275\u0275text(1, " Password must contain at least one special character. ");
    i017.\u0275\u0275elementEnd();
  }
}
function SignInComponent_mat_form_field_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = i017.\u0275\u0275getCurrentView();
    i017.\u0275\u0275elementStart(0, "mat-form-field", 5)(1, "mat-label");
    i017.\u0275\u0275text(2, "Password");
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275element(3, "input", 15);
    i017.\u0275\u0275template(4, SignInComponent_mat_form_field_12_mat_error_4_Template, 2, 0, "mat-error", 7)(5, SignInComponent_mat_form_field_12_mat_error_5_Template, 2, 0, "mat-error", 7)(6, SignInComponent_mat_form_field_12_mat_error_6_Template, 2, 0, "mat-error", 7)(7, SignInComponent_mat_form_field_12_mat_error_7_Template, 2, 0, "mat-error", 7)(8, SignInComponent_mat_form_field_12_mat_error_8_Template, 2, 0, "mat-error", 7);
    i017.\u0275\u0275elementStart(9, "button", 16);
    i017.\u0275\u0275listener("click", function SignInComponent_mat_form_field_12_Template_button_click_9_listener() {
      i017.\u0275\u0275restoreView(_r2);
      const ctx_r0 = i017.\u0275\u0275nextContext();
      return i017.\u0275\u0275resetView(ctx_r0.hide = !ctx_r0.hide);
    });
    i017.\u0275\u0275elementStart(10, "mat-icon");
    i017.\u0275\u0275text(11);
    i017.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = i017.\u0275\u0275nextContext();
    i017.\u0275\u0275advance(3);
    i017.\u0275\u0275property("type", ctx_r0.hide ? "password" : "text");
    i017.\u0275\u0275advance();
    i017.\u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.formGroup.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    i017.\u0275\u0275advance();
    i017.\u0275\u0275property("ngIf", !((tmp_3_0 = ctx_r0.formGroup.get("password")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]) && ctx_r0.registration && ((tmp_3_0 = ctx_r0.formGroup.get("password")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]));
    i017.\u0275\u0275advance();
    i017.\u0275\u0275property("ngIf", !((tmp_4_0 = ctx_r0.formGroup.get("password")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]) && ctx_r0.registration && !((tmp_4_0 = ctx_r0.formGroup.get("password")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["minlength"]) && ((tmp_4_0 = ctx_r0.formGroup.get("password")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["passwordStrength"]) && !((tmp_4_0 = ctx_r0.formGroup.get("password")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["passwordStrength"]["hasUpperCase"]));
    i017.\u0275\u0275advance();
    i017.\u0275\u0275property("ngIf", !((tmp_5_0 = ctx_r0.formGroup.get("password")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]) && ctx_r0.registration && !((tmp_5_0 = ctx_r0.formGroup.get("password")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["minlength"]) && ((tmp_5_0 = ctx_r0.formGroup.get("password")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["passwordStrength"]) && !((tmp_5_0 = ctx_r0.formGroup.get("password")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["passwordStrength"]["hasLowerCase"]));
    i017.\u0275\u0275advance();
    i017.\u0275\u0275property("ngIf", !((tmp_6_0 = ctx_r0.formGroup.get("password")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["required"]) && ctx_r0.registration && !((tmp_6_0 = ctx_r0.formGroup.get("password")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["minlength"]) && ((tmp_6_0 = ctx_r0.formGroup.get("password")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["passwordStrength"]) && !((tmp_6_0 = ctx_r0.formGroup.get("password")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["passwordStrength"]["hasSpecialChar"]));
    i017.\u0275\u0275advance();
    i017.\u0275\u0275attribute("aria-label", "Hide password")("aria-pressed", ctx_r0.hide);
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275textInterpolate(ctx_r0.hide ? "visibility_off" : "visibility");
  }
}
function SignInComponent_mat_form_field_13_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275elementStart(0, "mat-error");
    i017.\u0275\u0275text(1, " Confirmation of the password is required. ");
    i017.\u0275\u0275elementEnd();
  }
}
function SignInComponent_mat_form_field_13_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275elementStart(0, "mat-error");
    i017.\u0275\u0275text(1, " Passwords do not match. ");
    i017.\u0275\u0275elementEnd();
  }
}
function SignInComponent_mat_form_field_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = i017.\u0275\u0275getCurrentView();
    i017.\u0275\u0275elementStart(0, "mat-form-field", 5)(1, "mat-label");
    i017.\u0275\u0275text(2, "Confirm password");
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275element(3, "input", 17);
    i017.\u0275\u0275template(4, SignInComponent_mat_form_field_13_mat_error_4_Template, 2, 0, "mat-error", 7)(5, SignInComponent_mat_form_field_13_mat_error_5_Template, 2, 0, "mat-error", 7);
    i017.\u0275\u0275elementStart(6, "button", 16);
    i017.\u0275\u0275listener("click", function SignInComponent_mat_form_field_13_Template_button_click_6_listener() {
      i017.\u0275\u0275restoreView(_r3);
      const ctx_r0 = i017.\u0275\u0275nextContext();
      return i017.\u0275\u0275resetView(ctx_r0.hideConfirm = !ctx_r0.hideConfirm);
    });
    i017.\u0275\u0275elementStart(7, "mat-icon");
    i017.\u0275\u0275text(8);
    i017.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = i017.\u0275\u0275nextContext();
    i017.\u0275\u0275advance(3);
    i017.\u0275\u0275property("type", ctx_r0.hideConfirm ? "password" : "text");
    i017.\u0275\u0275advance();
    i017.\u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.formGroup.get("confirmPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    i017.\u0275\u0275advance();
    i017.\u0275\u0275property("ngIf", ctx_r0.formGroup.hasError("confirmedValidator"));
    i017.\u0275\u0275advance();
    i017.\u0275\u0275attribute("aria-label", "Hide confirm password")("aria-pressed", ctx_r0.hideConfirm);
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275textInterpolate(ctx_r0.hideConfirm ? "visibility_off" : "visibility");
  }
}
function SignInComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275elementStart(0, "mat-error", 18);
    i017.\u0275\u0275text(1);
    i017.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i017.\u0275\u0275nextContext();
    i017.\u0275\u0275advance();
    i017.\u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function SignInComponent_a_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i017.\u0275\u0275getCurrentView();
    i017.\u0275\u0275elementStart(0, "a", 19);
    i017.\u0275\u0275listener("click", function SignInComponent_a_18_Template_a_click_0_listener() {
      i017.\u0275\u0275restoreView(_r4);
      const ctx_r0 = i017.\u0275\u0275nextContext();
      return i017.\u0275\u0275resetView(ctx_r0.forgotPassword());
    });
    i017.\u0275\u0275text(1, "Forgot your password?");
    i017.\u0275\u0275elementEnd();
  }
}
function SignInComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = i017.\u0275\u0275getCurrentView();
    i017.\u0275\u0275elementStart(0, "span", 20);
    i017.\u0275\u0275text(1);
    i017.\u0275\u0275elementStart(2, "a", 19);
    i017.\u0275\u0275listener("click", function SignInComponent_span_24_Template_a_click_2_listener() {
      i017.\u0275\u0275restoreView(_r5);
      const ctx_r0 = i017.\u0275\u0275nextContext();
      return i017.\u0275\u0275resetView(ctx_r0.toggleRegistration());
    });
    i017.\u0275\u0275text(3);
    i017.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = i017.\u0275\u0275nextContext();
    i017.\u0275\u0275advance();
    i017.\u0275\u0275textInterpolate1("", ctx_r0.registration ? "Already have an account?" : "Don't have an account?", " ");
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275textInterpolate(ctx_r0.registration ? "Log in" : "Sign up");
  }
}
function SignInComponent_a_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = i017.\u0275\u0275getCurrentView();
    i017.\u0275\u0275elementStart(0, "a", 19);
    i017.\u0275\u0275listener("click", function SignInComponent_a_26_Template_a_click_0_listener() {
      i017.\u0275\u0275restoreView(_r6);
      const ctx_r0 = i017.\u0275\u0275nextContext();
      return i017.\u0275\u0275resetView(ctx_r0.goBack());
    });
    i017.\u0275\u0275text(1, "Go back");
    i017.\u0275\u0275elementEnd();
  }
}
var _SignInComponent = class _SignInComponent {
  constructor(auth, formBuilder, router, commonService) {
    this.auth = auth;
    this.formBuilder = formBuilder;
    this.router = router;
    this.commonService = commonService;
    this.registration = false;
    this.hide = true;
    this.hideConfirm = true;
    this.errorMessage = "";
    this.showForgotPassword = false;
    this.toaster = inject11(ToastrService11);
    this.createForm();
  }
  passwordStrengthValidator() {
    return (control) => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasSpecialChar = /[\W_]+/.test(value);
      if (hasUpperCase && hasLowerCase && hasSpecialChar) {
        return null;
      }
      return {
        passwordStrength: {
          valid: false,
          hasUpperCase,
          hasLowerCase,
          hasSpecialChar
        }
      };
    };
  }
  forgotPassword() {
    this.showForgotPassword = true;
    this.createForm();
  }
  goBack() {
    this.showForgotPassword = false;
    this.createForm();
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      username: this.registration ? new FormControl2(null, Validators7.required) : new FormControl2(null),
      language: this.registration ? new FormControl2("en", Validators7.required) : new FormControl2(null),
      email: new FormControl2(null, [Validators7.required, Validators7.email]),
      confirmPassword: this.registration ? new FormControl2(null, Validators7.required) : new FormControl2(null),
      password: this.registration ? new FormControl2(null, [
        Validators7.required,
        Validators7.minLength(6),
        this.passwordStrengthValidator()
      ]) : this.showForgotPassword ? new FormControl2(null) : new FormControl2(null, Validators7.required)
    }, {
      validators: this.registration ? this.matchValidator("password", "confirmPassword") : null
    });
  }
  matchValidator(controlName, matchingControlName) {
    return (abstractControl) => {
      const control = abstractControl.get(controlName);
      const matchingControl = abstractControl.get(matchingControlName);
      if (matchingControl.errors && !matchingControl.errors?.["confirmedValidator"]) {
        return null;
      }
      if (control.value !== matchingControl.value) {
        const error = { confirmedValidator: "Passwords do not match." };
        matchingControl.setErrors(error);
        return error;
      } else {
        matchingControl.setErrors(null);
        return null;
      }
    };
  }
  toggleRegistration() {
    this.registration = !this.registration;
    this.errorMessage = "";
    this.createForm();
  }
  onSubmit() {
    if (this.formGroup.valid) {
      const value = this.formGroup.value;
      if (this.registration) {
        this.auth.signUp(value.email, value.password, value.username, value.language).then(() => {
          this.toaster.success("Account successfully created", "Success");
          this.router.navigate(["/accounts"]);
        }).catch((error) => {
          this.errorMessage = error.message || "An unexpected error occurred.";
        });
      } else {
        if (this.showForgotPassword) {
          const auth = getAuth11();
          fetchSignInMethodsForEmail(auth, value.email).then((signInMethods) => {
            if (signInMethods.includes("password")) {
              sendPasswordResetEmail(auth, value.email).then(() => {
                this.toaster.info(`Please check the email address ${value.email} for instructions to reset your password.`, "Info");
                this.showForgotPassword = false;
                this.registration = false;
                this.createForm();
              }).catch((error) => {
                this.errorMessage = error.message || "An unexpected error occurred.";
              });
            } else if (signInMethods.length > 0) {
              this.toaster.info(`It seems you usually sign in with ${signInMethods[0]}. Please use that method to sign in.`, "Authentication method found");
            }
          }).catch((error) => {
            console.error("Error fetching sign in methods: ", error);
            this.toaster.error("An error occurred while checking the sign in methods.", "Error");
          });
        } else {
          this.auth.emailPasswordSignIn(value.email, value.password).then(() => {
            if (this.commonService.selectedAccountId) {
              this.router.navigate(["/alerts", this.commonService.selectedAccountId]);
            } else {
              this.router.navigate(["/accounts"]);
            }
          }).catch((error) => {
            this.errorMessage = error.message || "An unexpected error occurred.";
          });
        }
      }
    }
  }
};
_SignInComponent.\u0275fac = function SignInComponent_Factory(t) {
  return new (t || _SignInComponent)(i017.\u0275\u0275directiveInject(AuthService), i017.\u0275\u0275directiveInject(i210.FormBuilder), i017.\u0275\u0275directiveInject(i35.Router), i017.\u0275\u0275directiveInject(CommonService));
};
_SignInComponent.\u0275cmp = /* @__PURE__ */ i017.\u0275\u0275defineComponent({ type: _SignInComponent, selectors: [["app-sign-in"]], standalone: true, features: [i017.\u0275\u0275StandaloneFeature], decls: 27, vars: 13, consts: [["src", "../../assets/glassroom-logo.png", 1, "glassroom-logo"], [1, "container", 3, "formGroup"], [1, "title"], ["class", "instructions", 4, "ngIf"], ["appearance", "outline", "class", "form-element", 4, "ngIf"], ["appearance", "outline", 1, "form-element"], ["matInput", "", "formControlName", "email"], [4, "ngIf"], ["style", "text-align: center;", 4, "ngIf"], [3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "continue-button", 3, "click"], [1, "signin-label"], ["class", "link-label", 4, "ngIf"], [1, "instructions"], ["matInput", "", "formControlName", "username"], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "confirmPassword", 3, "type"], [2, "text-align", "center"], [3, "click"], [1, "link-label"]], template: function SignInComponent_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275element(0, "img", 0);
    i017.\u0275\u0275elementStart(1, "form", 1)(2, "h1", 2);
    i017.\u0275\u0275text(3);
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275template(4, SignInComponent_p_4_Template, 2, 0, "p", 3)(5, SignInComponent_mat_form_field_5_Template, 5, 1, "mat-form-field", 4);
    i017.\u0275\u0275elementStart(6, "mat-form-field", 5)(7, "mat-label");
    i017.\u0275\u0275text(8, "Email");
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275element(9, "input", 6);
    i017.\u0275\u0275template(10, SignInComponent_mat_error_10_Template, 2, 0, "mat-error", 7)(11, SignInComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275template(12, SignInComponent_mat_form_field_12_Template, 12, 9, "mat-form-field", 4)(13, SignInComponent_mat_form_field_13_Template, 9, 6, "mat-form-field", 4);
    i017.\u0275\u0275element(14, "br");
    i017.\u0275\u0275template(15, SignInComponent_mat_error_15_Template, 2, 1, "mat-error", 8);
    i017.\u0275\u0275element(16, "br");
    i017.\u0275\u0275elementStart(17, "span");
    i017.\u0275\u0275template(18, SignInComponent_a_18_Template, 2, 0, "a", 9);
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(19, "button", 10);
    i017.\u0275\u0275listener("click", function SignInComponent_Template_button_click_19_listener() {
      return ctx.onSubmit();
    });
    i017.\u0275\u0275elementStart(20, "span", 11);
    i017.\u0275\u0275text(21);
    i017.\u0275\u0275elementEnd()();
    i017.\u0275\u0275element(22, "br")(23, "br");
    i017.\u0275\u0275template(24, SignInComponent_span_24_Template, 4, 2, "span", 12);
    i017.\u0275\u0275elementStart(25, "span");
    i017.\u0275\u0275template(26, SignInComponent_a_26_Template, 2, 0, "a", 9);
    i017.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    i017.\u0275\u0275advance();
    i017.\u0275\u0275property("formGroup", ctx.formGroup);
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275textInterpolate(ctx.registration ? "Create your account" : ctx.showForgotPassword ? "Reset your password" : "Welcome back");
    i017.\u0275\u0275advance();
    i017.\u0275\u0275property("ngIf", ctx.showForgotPassword === true);
    i017.\u0275\u0275advance();
    i017.\u0275\u0275property("ngIf", ctx.registration === true && ctx.showForgotPassword === false);
    i017.\u0275\u0275advance(5);
    i017.\u0275\u0275property("ngIf", (tmp_4_0 = ctx.formGroup.get("email")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
    i017.\u0275\u0275advance();
    i017.\u0275\u0275property("ngIf", (tmp_5_0 = ctx.formGroup.get("email")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["email"]);
    i017.\u0275\u0275advance();
    i017.\u0275\u0275property("ngIf", ctx.showForgotPassword === false);
    i017.\u0275\u0275advance();
    i017.\u0275\u0275property("ngIf", ctx.registration === true && ctx.showForgotPassword === false);
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275property("ngIf", ctx.errorMessage);
    i017.\u0275\u0275advance(3);
    i017.\u0275\u0275property("ngIf", ctx.showForgotPassword === false && ctx.registration === false);
    i017.\u0275\u0275advance(3);
    i017.\u0275\u0275textInterpolate(ctx.registration ? "Sign up" : ctx.showForgotPassword ? "Send email" : "Log in");
    i017.\u0275\u0275advance(3);
    i017.\u0275\u0275property("ngIf", ctx.showForgotPassword === false);
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275property("ngIf", ctx.showForgotPassword === true);
  }
}, dependencies: [CommonModule8, i53.NgIf, ReactiveFormsModule7, i210.\u0275NgNoValidate, i210.DefaultValueAccessor, i210.NgControlStatus, i210.NgControlStatusGroup, i210.FormGroupDirective, i210.FormControlName, MatButtonModule5, i66.MatButton, i66.MatIconButton, MatFormFieldModule, i76.MatFormField, i76.MatLabel, i76.MatError, i76.MatSuffix, MatInputModule7, i87.MatInput, MatIconModule7, i96.MatIcon], styles: ["\n\n.continue-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 300px;\n  height: 50px;\n  padding: 10px;\n  text-align: center;\n}\n.form-element[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 50px;\n  margin-bottom: 30px;\n}\n.container[_ngcontent-%COMP%] {\n  padding: 2% 0;\n  text-align: center;\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 20%;\n}\n.title[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-size: 35px;\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\na[_ngcontent-%COMP%] {\n  color: cornflowerblue;\n  cursor: pointer;\n}\n.glassroom-logo[_ngcontent-%COMP%] {\n  height: auto;\n  width: 10%;\n  margin: auto;\n  position: absolute;\n  left: 45%;\n}\n.instructions[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=sign-in.component.css.map */"] });
var SignInComponent = _SignInComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i017.\u0275setClassDebugInfo(SignInComponent, { className: "SignInComponent" });
})();

// src/app/components/pacing-alerts/pacing-alerts.component.ts
import { Component as Component11 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule9 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { FormControl as FormControl3, ReactiveFormsModule as ReactiveFormsModule8 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";

// src/app/components/line-chart/line-chart.component.ts
import { Component as Component10, Input as Input5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as am5 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@amcharts_amcharts5.js?v=478e822e";
import * as am5xy from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@amcharts_amcharts5_xy.js?v=478e822e";
import am5themes_Animated from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@amcharts_amcharts5_themes_Animated.js?v=478e822e";
import __vite__cjsImport284_moment from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/moment.js?v=478e822e"; const moment6 = __vite__cjsImport284_moment.__esModule ? __vite__cjsImport284_moment.default : __vite__cjsImport284_moment;
import * as i018 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
var _LineChartComponent = class _LineChartComponent {
  constructor(zone) {
    this.zone = zone;
    this.chartData = [];
    this.platform = "";
    this.platformRevenue = "";
  }
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.createChart();
    });
  }
  createChart() {
    let sortedDates = Object.keys(this.chartData[this.platform + "Report"]).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    const currentDate = moment6.tz("America/Montreal").startOf("day").toDate();
    const yesterday = moment6.tz("America/Montreal").subtract(1, "days").startOf("day").toDate();
    const twoDaysAgo = moment6.tz("America/Montreal").subtract(2, "days").startOf("day").toDate();
    let cumulativeCost = 0;
    let estimatedCumulativeCost = 0;
    let yesterdayCampaignCost = 0;
    let data = [];
    sortedDates.forEach((date, index) => {
      const revenue = parseFloat(this.chartData[this.platform + "Report"][date][this.platformRevenue]);
      const startDate = moment6.tz(this.chartData[this.platform + "StartDate"], "MM/DD/YYYY", "America/Montreal").startOf("day").toDate();
      const endDate = moment6.tz(this.chartData[this.platform + "EndDate"], "MM/DD/YYYY", "America/Montreal").startOf("day").toDate();
      const daysLeft = (endDate.getTime() - moment6.tz(date, "YYYY/MM/DD", "America/Montreal").startOf("day").toDate().getTime()) / (1e3 * 60 * 60 * 24) + 2;
      if (moment6.tz(date, "YYYY/MM/DD", "America/Montreal").startOf("day").toDate() >= startDate && moment6.tz(date, "YYYY/MM/DD", "America/Montreal").startOf("day").toDate() <= yesterday && !isNaN(revenue)) {
        cumulativeCost += revenue;
      }
      if (moment6.tz(date, "YYYY/MM/DD", "America/Montreal").startOf("day").toDate() >= startDate && moment6.tz(date, "YYYY/MM/DD", "America/Montreal").startOf("day").toDate() <= twoDaysAgo && !isNaN(revenue)) {
        yesterdayCampaignCost += revenue;
      }
      let startDateFormatted = moment6(startDate).format("YYYY/MM/DD");
      let currentDateFormatted = moment6(currentDate).format("YYYY/MM/DD");
      estimatedCumulativeCost += startDateFormatted === currentDateFormatted ? 0 : (this.chartData[this.platform + "Budget"] - yesterdayCampaignCost) / (daysLeft > 0 ? daysLeft : 1);
      data.push({
        date: new Date(date).getTime(),
        campaignCost: Math.round(cumulativeCost * 100) / 100,
        estimatedCost: Math.round(estimatedCumulativeCost * 100) / 100
      });
    });
    let element = document.getElementById(this.uniqueId);
    if (!(element instanceof Element)) {
      setTimeout(() => this.createChart(), 1e3);
      return;
    }
    if (this.root) {
      this.root.dispose();
    }
    let root = am5.Root.new(this.uniqueId);
    root.setThemes([am5themes_Animated.new(root)]);
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panY: false,
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));
    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      baseInterval: { timeUnit: "day", count: 1 },
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    }));
    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    }));
    let seriesReal = chart.series.push(am5xy.LineSeries.new(root, {
      name: "Spend",
      xAxis,
      yAxis,
      valueYField: "campaignCost",
      valueXField: "date",
      tooltip: am5.Tooltip.new(root, { labelText: "{valueY}" }),
      stroke: am5.color(16711680)
    }));
    seriesReal.strokes.template.setAll({
      strokeWidth: 2
    });
    seriesReal.data.setAll(data);
    let seriesEstimated = chart.series.push(am5xy.LineSeries.new(root, {
      name: "Estimated spend",
      xAxis,
      yAxis,
      valueYField: "estimatedCost",
      valueXField: "date",
      tooltip: am5.Tooltip.new(root, { labelText: "{valueY}" }),
      stroke: am5.color(255)
    }));
    seriesEstimated.strokes.template.setAll({
      strokeWidth: 2
    });
    seriesEstimated.data.setAll(data);
    let legend = chart.children.push(am5.Legend.new(root, {
      x: am5.percent(22),
      y: am5.p0,
      layout: root.verticalLayout
    }));
    legend.labels.template.setAll({
      fontSize: 12,
      fill: am5.color(0)
    });
    legend.data.setAll(chart.series.values);
    chart.set("cursor", am5xy.XYCursor.new(root, {}));
    this.root = root;
  }
  ngOnDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }
};
_LineChartComponent.\u0275fac = function LineChartComponent_Factory(t) {
  return new (t || _LineChartComponent)(i018.\u0275\u0275directiveInject(i018.NgZone));
};
_LineChartComponent.\u0275cmp = /* @__PURE__ */ i018.\u0275\u0275defineComponent({ type: _LineChartComponent, selectors: [["app-line-chart"]], inputs: { chartData: "chartData", platform: "platform", platformRevenue: "platformRevenue", uniqueId: "uniqueId" }, standalone: true, features: [i018.\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[2, "width", "300px", "height", "300px", 3, "id"]], template: function LineChartComponent_Template(rf, ctx) {
  if (rf & 1) {
    i018.\u0275\u0275element(0, "div", 0);
  }
  if (rf & 2) {
    i018.\u0275\u0275property("id", ctx.uniqueId);
  }
}, styles: ["\n\n/*# sourceMappingURL=line-chart.component.css.map */"] });
var LineChartComponent = _LineChartComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i018.\u0275setClassDebugInfo(LineChartComponent, { className: "LineChartComponent" });
})();

// src/app/components/pacing-alerts/pacing-alerts.component.ts
import { MatTableDataSource as MatTableDataSource2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_table.js?v=478e822e";
import { MatTableModule as MatTableModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_table.js?v=478e822e";
import { MatInputModule as MatInputModule8 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import { MatSelectModule as MatSelectModule7 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import { MatAutocompleteModule as MatAutocompleteModule6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_autocomplete.js?v=478e822e";
import { MatCheckboxModule as MatCheckboxModule5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_checkbox.js?v=478e822e";
import { MatIconModule as MatIconModule8 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import { MatChipsModule as MatChipsModule5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_chips.js?v=478e822e";
import { forkJoin, of as of9 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import { switchMap as switchMap3, map as map3, take as take2, filter } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs_operators.js?v=478e822e";
import * as i019 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i211 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
import * as i36 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_router.js?v=478e822e";
import * as i45 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i54 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import * as i67 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_table.js?v=478e822e";
import * as i77 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import * as i88 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_core.js?v=478e822e";
import * as i97 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_checkbox.js?v=478e822e";
import * as i106 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_chips.js?v=478e822e";
import * as i1112 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import * as i128 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_autocomplete.js?v=478e822e";
function PacingAlertsComponent_mat_chip_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i019.\u0275\u0275getCurrentView();
    i019.\u0275\u0275elementStart(0, "mat-chip", 31);
    i019.\u0275\u0275listener("removed", function PacingAlertsComponent_mat_chip_6_Template_mat_chip_removed_0_listener() {
      const campaignName_r2 = i019.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i019.\u0275\u0275nextContext();
      return i019.\u0275\u0275resetView(ctx_r2.removeCampaignName(campaignName_r2));
    });
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275elementStart(2, "mat-icon", 32);
    i019.\u0275\u0275text(3, "cancel");
    i019.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const campaignName_r2 = ctx.$implicit;
    i019.\u0275\u0275property("removable", true);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", campaignName_r2, " ");
  }
}
function PacingAlertsComponent_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i019.\u0275\u0275getCurrentView();
    i019.\u0275\u0275elementStart(0, "mat-option", 33)(1, "mat-checkbox", 34);
    i019.\u0275\u0275listener("change", function PacingAlertsComponent_mat_option_10_Template_mat_checkbox_change_1_listener() {
      const campaignName_r5 = i019.\u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = i019.\u0275\u0275nextContext();
      return i019.\u0275\u0275resetView(ctx_r2.toggleCampaignName(campaignName_r5));
    });
    i019.\u0275\u0275text(2);
    i019.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const campaignName_r5 = ctx.$implicit;
    const ctx_r2 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275property("value", campaignName_r5);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("checked", ctx_r2.selectedCampaignNames.includes(campaignName_r5));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", campaignName_r5, " ");
  }
}
function PacingAlertsComponent_mat_chip_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = i019.\u0275\u0275getCurrentView();
    i019.\u0275\u0275elementStart(0, "mat-chip", 31);
    i019.\u0275\u0275listener("removed", function PacingAlertsComponent_mat_chip_16_Template_mat_chip_removed_0_listener() {
      const id_r7 = i019.\u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = i019.\u0275\u0275nextContext();
      return i019.\u0275\u0275resetView(ctx_r2.removeCampaignId(id_r7));
    });
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275elementStart(2, "mat-icon", 32);
    i019.\u0275\u0275text(3, "cancel");
    i019.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const id_r7 = ctx.$implicit;
    i019.\u0275\u0275property("removable", true);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", id_r7, " ");
  }
}
function PacingAlertsComponent_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = i019.\u0275\u0275getCurrentView();
    i019.\u0275\u0275elementStart(0, "mat-option", 33)(1, "mat-checkbox", 34);
    i019.\u0275\u0275listener("change", function PacingAlertsComponent_mat_option_20_Template_mat_checkbox_change_1_listener() {
      const id_r9 = i019.\u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = i019.\u0275\u0275nextContext();
      return i019.\u0275\u0275resetView(ctx_r2.toggleCampaignId(id_r9));
    });
    i019.\u0275\u0275text(2);
    i019.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const id_r9 = ctx.$implicit;
    const ctx_r2 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275property("value", id_r9);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("checked", ctx_r2.selectedCampaignIds.includes(id_r9));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate(id_r9);
  }
}
function PacingAlertsComponent_mat_chip_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = i019.\u0275\u0275getCurrentView();
    i019.\u0275\u0275elementStart(0, "mat-chip", 31);
    i019.\u0275\u0275listener("removed", function PacingAlertsComponent_mat_chip_26_Template_mat_chip_removed_0_listener() {
      const user_r11 = i019.\u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = i019.\u0275\u0275nextContext();
      return i019.\u0275\u0275resetView(ctx_r2.removeUser(user_r11));
    });
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275elementStart(2, "mat-icon", 32);
    i019.\u0275\u0275text(3, "cancel");
    i019.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r11 = ctx.$implicit;
    i019.\u0275\u0275property("removable", true);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", user_r11, " ");
  }
}
function PacingAlertsComponent_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = i019.\u0275\u0275getCurrentView();
    i019.\u0275\u0275elementStart(0, "mat-option", 33)(1, "mat-checkbox", 34);
    i019.\u0275\u0275listener("change", function PacingAlertsComponent_mat_option_30_Template_mat_checkbox_change_1_listener() {
      const user_r13 = i019.\u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = i019.\u0275\u0275nextContext();
      return i019.\u0275\u0275resetView(ctx_r2.toggleUser(user_r13));
    });
    i019.\u0275\u0275text(2);
    i019.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r13 = ctx.$implicit;
    const ctx_r2 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275property("value", user_r13);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("checked", ctx_r2.selectedUsers.includes(user_r13));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate(user_r13);
  }
}
function PacingAlertsComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "th", 35);
    i019.\u0275\u0275text(1, "Campaign Name");
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i019.\u0275\u0275styleProp("background-color", "rgba(158, 159, 159, 0.5)");
  }
}
function PacingAlertsComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "td", 36);
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r14 = ctx.$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", data_r14.CampaignName, " ");
  }
}
function PacingAlertsComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "th", 37);
    i019.\u0275\u0275text(1, "Line chart");
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i019.\u0275\u0275styleProp("background-color", "rgba(158, 159, 159, 0.5)");
  }
}
function PacingAlertsComponent_td_38_span_1_app_line_chart_1_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "app-line-chart", 41);
  }
  if (rf & 2) {
    const data_r15 = i019.\u0275\u0275nextContext(2).$implicit;
    i019.\u0275\u0275property("chartData", data_r15)("uniqueId", "chartdiv_" + data_r15.id + "_DV");
  }
}
function PacingAlertsComponent_td_38_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275template(1, PacingAlertsComponent_td_38_span_1_app_line_chart_1_Template, 1, 2, "app-line-chart", 40);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r15 = i019.\u0275\u0275nextContext().$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r15.dv360Report);
  }
}
function PacingAlertsComponent_td_38_hr_2_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_38_span_3_app_line_chart_1_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "app-line-chart", 43);
  }
  if (rf & 2) {
    const data_r15 = i019.\u0275\u0275nextContext(2).$implicit;
    i019.\u0275\u0275property("chartData", data_r15)("uniqueId", "chartdiv_" + data_r15.id + "_Facebook");
  }
}
function PacingAlertsComponent_td_38_span_3_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275template(1, PacingAlertsComponent_td_38_span_3_app_line_chart_1_Template, 1, 2, "app-line-chart", 42);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r15 = i019.\u0275\u0275nextContext().$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r15.facebookReport);
  }
}
function PacingAlertsComponent_td_38_hr_4_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_38_span_5_app_line_chart_1_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "app-line-chart", 45);
  }
  if (rf & 2) {
    const data_r15 = i019.\u0275\u0275nextContext(2).$implicit;
    i019.\u0275\u0275property("chartData", data_r15)("uniqueId", "chartdiv_" + data_r15.id + "_GoogleAds");
  }
}
function PacingAlertsComponent_td_38_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275template(1, PacingAlertsComponent_td_38_span_5_app_line_chart_1_Template, 1, 2, "app-line-chart", 44);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r15 = i019.\u0275\u0275nextContext().$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r15.googleAdsReport);
  }
}
function PacingAlertsComponent_td_38_hr_6_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_38_span_7_app_line_chart_1_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "app-line-chart", 47);
  }
  if (rf & 2) {
    const data_r15 = i019.\u0275\u0275nextContext(2).$implicit;
    i019.\u0275\u0275property("chartData", data_r15)("uniqueId", "chartdiv_" + data_r15.id + "_Bing");
  }
}
function PacingAlertsComponent_td_38_span_7_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275template(1, PacingAlertsComponent_td_38_span_7_app_line_chart_1_Template, 1, 2, "app-line-chart", 46);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r15 = i019.\u0275\u0275nextContext().$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r15.bingReport);
  }
}
function PacingAlertsComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "td", 38);
    i019.\u0275\u0275template(1, PacingAlertsComponent_td_38_span_1_Template, 2, 1, "span", 39)(2, PacingAlertsComponent_td_38_hr_2_Template, 1, 0, "hr", 39)(3, PacingAlertsComponent_td_38_span_3_Template, 2, 1, "span", 39)(4, PacingAlertsComponent_td_38_hr_4_Template, 1, 0, "hr", 39)(5, PacingAlertsComponent_td_38_span_5_Template, 2, 1, "span", 39)(6, PacingAlertsComponent_td_38_hr_6_Template, 1, 0, "hr", 39)(7, PacingAlertsComponent_td_38_span_7_Template, 2, 1, "span", 39);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r15 = ctx.$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r15.dv360Platform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r15.dv360Platform && (data_r15.facebookPlatform || data_r15.googleAdsPlatform || data_r15.bingPlatform) && !(data_r15.facebookPlatform && !data_r15.googleAdsPlatform && !data_r15.bingPlatform));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r15.facebookPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r15.facebookPlatform && (data_r15.googleAdsPlatform || data_r15.bingPlatform) && !(data_r15.googleAdsPlatform && !data_r15.bingPlatform));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r15.googleAdsPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r15.googleAdsPlatform && data_r15.bingPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r15.bingPlatform);
  }
}
function PacingAlertsComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "th", 37);
    i019.\u0275\u0275text(1, "Platform");
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i019.\u0275\u0275styleProp("background-color", "rgba(158, 159, 159, 0.5)");
  }
}
function PacingAlertsComponent_td_41_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275element(2, "br");
    i019.\u0275\u0275text(3);
    i019.\u0275\u0275element(4, "br");
    i019.\u0275\u0275text(5);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r16 = i019.\u0275\u0275nextContext().$implicit;
    const ctx_r2 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", data_r16.dv360Platform, "");
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275textInterpolate2(" ", data_r16.dv360StartDate, " - ", data_r16.dv360EndDate, "");
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275textInterpolate1(" ", ctx_r2.round(data_r16.dv360_perc_days_passed), "% ");
  }
}
function PacingAlertsComponent_td_41_hr_2_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_41_span_3_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275element(2, "br");
    i019.\u0275\u0275text(3);
    i019.\u0275\u0275element(4, "br");
    i019.\u0275\u0275text(5);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r16 = i019.\u0275\u0275nextContext().$implicit;
    const ctx_r2 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", data_r16.facebookPlatform, "");
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275textInterpolate2(" ", data_r16.facebookStartDate, " - ", data_r16.facebookEndDate, "");
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275textInterpolate1(" ", ctx_r2.round(data_r16.facebook_perc_days_passed), "% ");
  }
}
function PacingAlertsComponent_td_41_hr_4_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_41_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275element(2, "br");
    i019.\u0275\u0275text(3);
    i019.\u0275\u0275element(4, "br");
    i019.\u0275\u0275text(5);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r16 = i019.\u0275\u0275nextContext().$implicit;
    const ctx_r2 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", data_r16.googleAdsPlatform, "");
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275textInterpolate2(" ", data_r16.googleAdsStartDate, " - ", data_r16.googleAdsEndDate, "");
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275textInterpolate1(" ", ctx_r2.round(data_r16.googleAds_perc_days_passed), "% ");
  }
}
function PacingAlertsComponent_td_41_hr_6_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_41_span_7_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275element(2, "br");
    i019.\u0275\u0275text(3);
    i019.\u0275\u0275element(4, "br");
    i019.\u0275\u0275text(5);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r16 = i019.\u0275\u0275nextContext().$implicit;
    const ctx_r2 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", data_r16.bingPlatform, "");
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275textInterpolate2(" ", data_r16.bingStartDate, " - ", data_r16.bingEndDate, "");
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275textInterpolate1(" ", ctx_r2.round(data_r16.bing_perc_days_passed), "% ");
  }
}
function PacingAlertsComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "td", 38);
    i019.\u0275\u0275template(1, PacingAlertsComponent_td_41_span_1_Template, 6, 4, "span", 39)(2, PacingAlertsComponent_td_41_hr_2_Template, 1, 0, "hr", 39)(3, PacingAlertsComponent_td_41_span_3_Template, 6, 4, "span", 39)(4, PacingAlertsComponent_td_41_hr_4_Template, 1, 0, "hr", 39)(5, PacingAlertsComponent_td_41_span_5_Template, 6, 4, "span", 39)(6, PacingAlertsComponent_td_41_hr_6_Template, 1, 0, "hr", 39)(7, PacingAlertsComponent_td_41_span_7_Template, 6, 4, "span", 39);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r16 = ctx.$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r16.dv360Platform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r16.dv360Platform && (data_r16.facebookPlatform || data_r16.googleAdsPlatform || data_r16.bingPlatform) && !(data_r16.facebookPlatform && !data_r16.googleAdsPlatform && !data_r16.bingPlatform));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r16.facebookPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r16.facebookPlatform && (data_r16.googleAdsPlatform || data_r16.bingPlatform) && !(data_r16.googleAdsPlatform && !data_r16.bingPlatform));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r16.googleAdsPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r16.googleAdsPlatform && data_r16.bingPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r16.bingPlatform);
  }
}
function PacingAlertsComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "th", 37);
    i019.\u0275\u0275text(1, "Budget");
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i019.\u0275\u0275styleProp("background-color", "rgba(158, 159, 159, 0.5)");
  }
}
function PacingAlertsComponent_td_44_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275element(2, "br");
    i019.\u0275\u0275text(3);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r17 = i019.\u0275\u0275nextContext().$implicit;
    const ctx_r2 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" $", ctx_r2.round(data_r17.dv360_campaign_cost), "");
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275textInterpolate1(" $", ctx_r2.round(data_r17.dv360Budget), " ");
  }
}
function PacingAlertsComponent_td_44_hr_2_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_44_span_3_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275element(2, "br");
    i019.\u0275\u0275text(3);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r17 = i019.\u0275\u0275nextContext().$implicit;
    const ctx_r2 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" $", ctx_r2.round(data_r17.facebook_campaign_cost), "");
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275textInterpolate1(" $", ctx_r2.round(data_r17.facebookBudget), " ");
  }
}
function PacingAlertsComponent_td_44_hr_4_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_44_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275element(2, "br");
    i019.\u0275\u0275text(3);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r17 = i019.\u0275\u0275nextContext().$implicit;
    const ctx_r2 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" $", ctx_r2.round(data_r17.googleAds_campaign_cost), "");
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275textInterpolate1(" $", ctx_r2.round(data_r17.googleAdsBudget), " ");
  }
}
function PacingAlertsComponent_td_44_hr_6_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_44_span_7_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275element(2, "br");
    i019.\u0275\u0275text(3);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r17 = i019.\u0275\u0275nextContext().$implicit;
    const ctx_r2 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" $", ctx_r2.round(data_r17.bing_campaign_cost), "");
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275textInterpolate1(" $", ctx_r2.round(data_r17.bingBudget), " ");
  }
}
function PacingAlertsComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "td", 38);
    i019.\u0275\u0275template(1, PacingAlertsComponent_td_44_span_1_Template, 4, 2, "span", 39)(2, PacingAlertsComponent_td_44_hr_2_Template, 1, 0, "hr", 39)(3, PacingAlertsComponent_td_44_span_3_Template, 4, 2, "span", 39)(4, PacingAlertsComponent_td_44_hr_4_Template, 1, 0, "hr", 39)(5, PacingAlertsComponent_td_44_span_5_Template, 4, 2, "span", 39)(6, PacingAlertsComponent_td_44_hr_6_Template, 1, 0, "hr", 39)(7, PacingAlertsComponent_td_44_span_7_Template, 4, 2, "span", 39);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r17 = ctx.$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r17.dv360Platform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r17.dv360Platform && (data_r17.facebookPlatform || data_r17.googleAdsPlatform || data_r17.bingPlatform) && !(data_r17.facebookPlatform && !data_r17.googleAdsPlatform && !data_r17.bingPlatform));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r17.facebookPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r17.facebookPlatform && (data_r17.googleAdsPlatform || data_r17.bingPlatform) && !(data_r17.googleAdsPlatform && !data_r17.bingPlatform));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r17.googleAdsPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r17.googleAdsPlatform && data_r17.bingPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r17.bingPlatform);
  }
}
function PacingAlertsComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "th", 37);
    i019.\u0275\u0275text(1, "Overall");
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i019.\u0275\u0275styleProp("background-color", "rgba(158, 159, 159, 0.5)");
  }
}
function PacingAlertsComponent_td_47_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r18 = i019.\u0275\u0275nextContext().$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", data_r18.dv360_overall_error_rule_message ? data_r18.dv360_overall_error_rule_message : data_r18.dv360_budget_error_rule_message, " ");
  }
}
function PacingAlertsComponent_td_47_hr_2_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_47_span_3_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r18 = i019.\u0275\u0275nextContext().$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", data_r18.facebook_overall_error_rule_message ? data_r18.facebook_overall_error_rule_message : data_r18.facebook_budget_error_rule_message, " ");
  }
}
function PacingAlertsComponent_td_47_hr_4_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_47_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r18 = i019.\u0275\u0275nextContext().$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", data_r18.googleAds_overall_error_rule_message ? data_r18.googleAds_overall_error_rule_message : data_r18.googleAds_budget_error_rule_message, " ");
  }
}
function PacingAlertsComponent_td_47_hr_6_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_47_span_7_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r18 = i019.\u0275\u0275nextContext().$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", data_r18.bing_overall_error_rule_message ? data_r18.bing_overall_error_rule_message : data_r18.bing_budget_error_rule_message, " ");
  }
}
function PacingAlertsComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "td", 38);
    i019.\u0275\u0275template(1, PacingAlertsComponent_td_47_span_1_Template, 2, 1, "span", 39)(2, PacingAlertsComponent_td_47_hr_2_Template, 1, 0, "hr", 39)(3, PacingAlertsComponent_td_47_span_3_Template, 2, 1, "span", 39)(4, PacingAlertsComponent_td_47_hr_4_Template, 1, 0, "hr", 39)(5, PacingAlertsComponent_td_47_span_5_Template, 2, 1, "span", 39)(6, PacingAlertsComponent_td_47_hr_6_Template, 1, 0, "hr", 39)(7, PacingAlertsComponent_td_47_span_7_Template, 2, 1, "span", 39);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r18 = ctx.$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r18.dv360Platform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r18.dv360Platform && (data_r18.facebookPlatform || data_r18.googleAdsPlatform || data_r18.bingPlatform) && !(data_r18.facebookPlatform && !data_r18.googleAdsPlatform && !data_r18.bingPlatform));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r18.facebookPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r18.facebookPlatform && (data_r18.googleAdsPlatform || data_r18.bingPlatform) && !(data_r18.googleAdsPlatform && !data_r18.bingPlatform));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r18.googleAdsPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r18.googleAdsPlatform && data_r18.bingPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r18.bingPlatform);
  }
}
function PacingAlertsComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "th", 37);
    i019.\u0275\u0275text(1, "Yesterday/Seven days");
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i019.\u0275\u0275styleProp("background-color", "rgba(158, 159, 159, 0.5)");
  }
}
function PacingAlertsComponent_td_50_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275element(2, "br");
    i019.\u0275\u0275text(3);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r19 = i019.\u0275\u0275nextContext().$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", data_r19.dv360_yesterday_error_rule_message, "");
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275textInterpolate1(" ", data_r19.dv360_seven_days_error_rule_message, " ");
  }
}
function PacingAlertsComponent_td_50_hr_2_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_50_span_3_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275element(2, "br");
    i019.\u0275\u0275text(3);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r19 = i019.\u0275\u0275nextContext().$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", data_r19.facebook_yesterday_error_rule_message, "");
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275textInterpolate1(" ", data_r19.facebook_seven_days_error_rule_message, " ");
  }
}
function PacingAlertsComponent_td_50_hr_4_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_50_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275element(2, "br");
    i019.\u0275\u0275text(3);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r19 = i019.\u0275\u0275nextContext().$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", data_r19.googleAds_yesterday_error_rule_message, "");
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275textInterpolate1(" ", data_r19.googleAds_seven_days_error_rule_message, " ");
  }
}
function PacingAlertsComponent_td_50_hr_6_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_50_span_7_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275element(2, "br");
    i019.\u0275\u0275text(3);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r19 = i019.\u0275\u0275nextContext().$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" ", data_r19.bing_yesterday_error_rule_message, "");
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275textInterpolate1(" ", data_r19.bing_seven_days_error_rule_message, " ");
  }
}
function PacingAlertsComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "td", 38);
    i019.\u0275\u0275template(1, PacingAlertsComponent_td_50_span_1_Template, 4, 2, "span", 39)(2, PacingAlertsComponent_td_50_hr_2_Template, 1, 0, "hr", 39)(3, PacingAlertsComponent_td_50_span_3_Template, 4, 2, "span", 39)(4, PacingAlertsComponent_td_50_hr_4_Template, 1, 0, "hr", 39)(5, PacingAlertsComponent_td_50_span_5_Template, 4, 2, "span", 39)(6, PacingAlertsComponent_td_50_hr_6_Template, 1, 0, "hr", 39)(7, PacingAlertsComponent_td_50_span_7_Template, 4, 2, "span", 39);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r19 = ctx.$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r19.dv360Platform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r19.dv360Platform && (data_r19.facebookPlatform || data_r19.googleAdsPlatform || data_r19.bingPlatform) && !(data_r19.facebookPlatform && !data_r19.googleAdsPlatform && !data_r19.bingPlatform));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r19.facebookPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r19.facebookPlatform && (data_r19.googleAdsPlatform || data_r19.bingPlatform) && !(data_r19.googleAdsPlatform && !data_r19.bingPlatform));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r19.googleAdsPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r19.googleAdsPlatform && data_r19.bingPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r19.bingPlatform);
  }
}
function PacingAlertsComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "th", 37);
    i019.\u0275\u0275text(1, "Daily estimated cost");
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i019.\u0275\u0275styleProp("background-color", "rgba(158, 159, 159, 0.5)");
  }
}
function PacingAlertsComponent_td_53_span_1_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r20 = i019.\u0275\u0275nextContext().$implicit;
    const ctx_r2 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" $", ctx_r2.round(data_r20.dv360_daily_estimated_cost), "/day ");
  }
}
function PacingAlertsComponent_td_53_hr_2_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_53_span_3_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r20 = i019.\u0275\u0275nextContext().$implicit;
    const ctx_r2 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" $", ctx_r2.round(data_r20.facebook_daily_estimated_cost), "/day ");
  }
}
function PacingAlertsComponent_td_53_hr_4_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_53_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r20 = i019.\u0275\u0275nextContext().$implicit;
    const ctx_r2 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" $", ctx_r2.round(data_r20.googleAds_daily_estimated_cost), "/day ");
  }
}
function PacingAlertsComponent_td_53_hr_6_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "hr");
  }
}
function PacingAlertsComponent_td_53_span_7_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "span");
    i019.\u0275\u0275text(1);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r20 = i019.\u0275\u0275nextContext().$implicit;
    const ctx_r2 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275advance();
    i019.\u0275\u0275textInterpolate1(" $", ctx_r2.round(data_r20.bing_daily_estimated_cost), "/day ");
  }
}
function PacingAlertsComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "td", 38);
    i019.\u0275\u0275template(1, PacingAlertsComponent_td_53_span_1_Template, 2, 1, "span", 39)(2, PacingAlertsComponent_td_53_hr_2_Template, 1, 0, "hr", 39)(3, PacingAlertsComponent_td_53_span_3_Template, 2, 1, "span", 39)(4, PacingAlertsComponent_td_53_hr_4_Template, 1, 0, "hr", 39)(5, PacingAlertsComponent_td_53_span_5_Template, 2, 1, "span", 39)(6, PacingAlertsComponent_td_53_hr_6_Template, 1, 0, "hr", 39)(7, PacingAlertsComponent_td_53_span_7_Template, 2, 1, "span", 39);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r20 = ctx.$implicit;
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r20.dv360Platform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r20.dv360Platform && (data_r20.facebookPlatform || data_r20.googleAdsPlatform || data_r20.bingPlatform) && !(data_r20.facebookPlatform && !data_r20.googleAdsPlatform && !data_r20.bingPlatform));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r20.facebookPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r20.facebookPlatform && (data_r20.googleAdsPlatform || data_r20.bingPlatform) && !(data_r20.googleAdsPlatform && !data_r20.bingPlatform));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r20.googleAdsPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r20.googleAdsPlatform && data_r20.bingPlatform);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("ngIf", data_r20.bingPlatform);
  }
}
function PacingAlertsComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "tr", 48);
  }
}
function PacingAlertsComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "tr", 49);
  }
}
var _PacingAlertsComponent = class _PacingAlertsComponent {
  constructor(authService, db, route) {
    this.authService = authService;
    this.db = db;
    this.route = route;
    this.displayedColumnsAlerts = ["campaignName", "lineChart", "platform", "budget", "overall", "yesterday", "daily_estimated_cost"];
    this.dataSource = new MatTableDataSource2([]);
    this.originalDataSource = new MatTableDataSource2([]);
    this.campaignNameFilter = new FormControl3();
    this.campaignNames = [];
    this.selectedCampaignNames = [];
    this.campaignIdFilter = new FormControl3();
    this.campaignIds = [];
    this.selectedCampaignIds = [];
    this.userFilter = new FormControl3();
    this.users = [];
    this.selectedUsers = [];
  }
  ngOnInit() {
    this.route.params.pipe(filter((params) => params.campaignName)).subscribe((params) => {
      this.selectedCampaignNames = [params.campaignName];
      this.campaignNameFilter.setValue(params.campaignName);
    });
    this.getAlerts();
    this.campaignNameFilter.valueChanges.subscribe((value) => {
      this.applyFilters();
    });
    this.campaignIdFilter.valueChanges.subscribe(() => {
      this.applyFilters();
    });
  }
  round(value) {
    return Math.round(value);
  }
  getAlerts() {
    this.authService.user$.pipe(take2(1), switchMap3((user) => {
      if (!user || !user.uid) {
        return of9(null);
      }
      const alerts$ = this.db.collection("Pacing_alerts_datamart", (ref) => ref.where("userId", "==", user.uid)).snapshotChanges().pipe(take2(1), map3((actions) => actions.map((a) => {
        const data = a.payload.doc.data();
        return __spreadValues({ id: a.payload.doc.id }, data);
      })));
      const dv360Reports$ = this.db.collection("dv360Report", (ref) => ref.where("userId", "==", user.uid)).snapshotChanges().pipe(take2(1), map3((actions) => actions.map((a) => {
        const data = a.payload.doc.data();
        return __spreadValues({ id: a.payload.doc.id }, data);
      })));
      const facebookReports$ = this.db.collection("facebookReport", (ref) => ref.where("userId", "==", user.uid)).snapshotChanges().pipe(take2(1), map3((actions) => actions.map((a) => {
        const data = a.payload.doc.data();
        return __spreadValues({ id: a.payload.doc.id }, data);
      })));
      const googleAdsReports$ = this.db.collection("googleAdsReport", (ref) => ref.where("userId", "==", user.uid)).snapshotChanges().pipe(take2(1), map3((actions) => actions.map((a) => {
        const data = a.payload.doc.data();
        return __spreadValues({ id: a.payload.doc.id }, data);
      })));
      const bingReports$ = this.db.collection("bingReport", (ref) => ref.where("userId", "==", user.uid)).snapshotChanges().pipe(take2(1), map3((actions) => actions.map((a) => {
        const data = a.payload.doc.data();
        return __spreadValues({ id: a.payload.doc.id }, data);
      })));
      return forkJoin({
        alerts: alerts$,
        dv360Reports: dv360Reports$,
        facebookReports: facebookReports$,
        googleAdsReports: googleAdsReports$,
        bingReports: bingReports$
      });
    }), map3((result) => {
      if (!result) {
        return [];
      }
      const { alerts, dv360Reports, facebookReports, googleAdsReports, bingReports } = result;
      return alerts.map((alert2) => {
        let modifiedAlert = __spreadValues({}, alert2);
        const dv360Report = dv360Reports.find((report) => report.campaignName === alert2.CampaignName);
        if (dv360Report) {
          modifiedAlert.dv360Report = dv360Report.report;
        }
        const facebookReport = facebookReports.find((report) => report.campaignName === alert2.CampaignName);
        if (facebookReport) {
          modifiedAlert.facebookReport = facebookReport.report;
        }
        const googleAdsReport = googleAdsReports.find((report) => report.campaignName === alert2.CampaignName);
        if (googleAdsReport) {
          modifiedAlert.googleAdsReport = googleAdsReport.report;
          modifiedAlert.googleAdsReport = this.transformReportData(googleAdsReport.report.results, "googleAds");
        }
        const bingReport = bingReports.find((report) => report.campaignName === alert2.CampaignName);
        if (bingReport) {
          modifiedAlert.bingReport = this.transformReportData(bingReport.report, "bing");
        }
        return modifiedAlert;
      });
    })).subscribe((data) => {
      this.campaignNames = Array.from(new Set(data.map((alert2) => alert2.CampaignName)));
      this.campaignIds = [...new Set(data.flatMap((alert2) => {
        let ids = [];
        if (alert2.facebookCampaignID) {
          ids = ids.concat(alert2.facebookCampaignID.split(";"));
        }
        if (alert2.dv360CampaignID) {
          ids = ids.concat(alert2.dv360CampaignID.split(";"));
        }
        if (alert2.googleAdsCampaignID) {
          ids = ids.concat(alert2.googleAdsCampaignID.split(";"));
        }
        if (alert2.bingCampaignID) {
          ids = ids.concat(alert2.bingCampaignID.split(";"));
        }
        return ids;
      }))];
      this.users = Array.from(new Set(data.map((alert2) => alert2.CreatedBy)));
      this.dataSource = new MatTableDataSource2(data);
      this.originalDataSource = new MatTableDataSource2(data);
      this.applyFilters();
    }, (error) => console.error("Failed to fetch data", error));
  }
  transformReportData(reports, platform) {
    const formattedData = {};
    if (platform === "googleAds") {
      reports.forEach((report) => {
        const date = report.segments.date.replace(/-/g, "/");
        const costInMillions = parseFloat(report.metrics.costMicros) / 1e6;
        if (!formattedData[date]) {
          formattedData[date] = { costMicros: costInMillions };
        } else {
          formattedData[date].costMicros += costInMillions;
        }
      });
    } else if (platform === "bing") {
      reports.forEach((report) => {
        const date = report.TimePeriod.replace(/-/g, "/");
        if (!formattedData[date]) {
          formattedData[date] = { Spend: report.Spend };
        } else {
          formattedData[date].Spend += report.Spend;
        }
      });
    }
    return formattedData;
  }
  removeCampaignName(name) {
    const index = this.selectedCampaignNames.indexOf(name);
    if (index >= 0) {
      this.selectedCampaignNames.splice(index, 1);
      this.applyFilters();
    }
  }
  toggleCampaignName(campaignName) {
    const index = this.selectedCampaignNames.indexOf(campaignName);
    if (index >= 0) {
      this.selectedCampaignNames.splice(index, 1);
    } else {
      this.selectedCampaignNames.push(campaignName);
    }
  }
  removeCampaignId(id) {
    const index = this.selectedCampaignIds.indexOf(id);
    if (index >= 0) {
      this.selectedCampaignIds.splice(index, 1);
      this.applyFilters();
    }
  }
  toggleCampaignId(id) {
    const index = this.selectedCampaignIds.indexOf(id);
    if (index >= 0) {
      this.selectedCampaignIds.splice(index, 1);
    } else {
      this.selectedCampaignIds.push(id);
    }
  }
  removeUser(user) {
    const index = this.selectedUsers.indexOf(user);
    if (index >= 0) {
      this.selectedUsers.splice(index, 1);
      this.applyFilters();
    }
  }
  toggleUser(user) {
    const index = this.selectedUsers.indexOf(user);
    if (index >= 0) {
      this.selectedUsers.splice(index, 1);
    } else {
      this.selectedUsers.push(user);
    }
  }
  applyFilters() {
    this.dataSource.data = this.originalDataSource.data;
    if (this.selectedCampaignNames.length > 0) {
      this.dataSource.data = this.dataSource.data.filter((data) => this.selectedCampaignNames.includes(data.CampaignName));
    }
    if (this.selectedCampaignIds.length > 0) {
      this.dataSource.data = this.dataSource.data.filter((data) => {
        const fbCampaignIds = data.facebookCampaignID ? data.facebookCampaignID.split(";") : [];
        const dv360CampaignIds = data.dv360CampaignID ? data.dv360CampaignID.split(";") : [];
        const googleAdsCampaignIds = data.googleAdsCampaignID ? data.googleAdsCampaignID.split(";") : [];
        const bingCampaignIds = data.bingCampaignID ? data.bingCampaignID.split(";") : [];
        return this.selectedCampaignIds.some((id) => {
          fbCampaignIds.includes(id) || dv360CampaignIds.includes(id) || googleAdsCampaignIds.includes(id) || bingCampaignIds.includes(id);
        });
      }).map((data) => {
        let modifiedData = __spreadValues({}, data);
        const fbCampaignIds = data.facebookCampaignID ? data.facebookCampaignID.split(";") : [];
        const dv360CampaignIds = data.dv360CampaignID ? data.dv360CampaignID.split(";") : [];
        const googleAdsCampaignIds = data.googleAdsCampaignID ? data.googleAdsCampaignID.split(";") : [];
        const bingCampaignIds = data.bingCampaignID ? data.bingCampaignID.split(";") : [];
        const fbSelected = this.selectedCampaignIds.some((id) => fbCampaignIds.includes(id));
        const dv360Selected = this.selectedCampaignIds.some((id) => dv360CampaignIds.includes(id));
        const googleAdsSelected = this.selectedCampaignIds.some((id) => googleAdsCampaignIds.includes(id));
        const bingSelected = this.selectedCampaignIds.some((id) => bingCampaignIds.includes(id));
        if (fbSelected && !dv360Selected && !googleAdsSelected && !bingSelected) {
          delete modifiedData.dv360Platform;
          delete modifiedData.googleAdsPlatform;
          delete modifiedData.bingPlatform;
        } else if (!fbSelected && dv360Selected && !googleAdsSelected && !bingSelected) {
          delete modifiedData.facebookPlatform;
          delete modifiedData.googleAdsPlatform;
          delete modifiedData.bingPlatform;
        } else if (!fbSelected && !dv360Selected && googleAdsSelected && !bingSelected) {
          delete modifiedData.facebookPlatform;
          delete modifiedData.dv360Platform;
          delete modifiedData.bingPlatform;
        } else if (!fbSelected && !dv360Selected && !googleAdsSelected && bingSelected) {
          delete modifiedData.facebookPlatform;
          delete modifiedData.dv360Platform;
          delete modifiedData.googleAdsPlatform;
        }
        return modifiedData;
      });
    }
    if (this.selectedUsers.length > 0) {
      this.dataSource.data = this.dataSource.data.filter((data) => this.selectedUsers.includes(data.CreatedBy));
    }
  }
};
_PacingAlertsComponent.\u0275fac = function PacingAlertsComponent_Factory(t) {
  return new (t || _PacingAlertsComponent)(i019.\u0275\u0275directiveInject(AuthService), i019.\u0275\u0275directiveInject(i211.AngularFirestore), i019.\u0275\u0275directiveInject(i36.ActivatedRoute));
};
_PacingAlertsComponent.\u0275cmp = /* @__PURE__ */ i019.\u0275\u0275defineComponent({ type: _PacingAlertsComponent, selectors: [["app-alerts"]], standalone: true, features: [i019.\u0275\u0275StandaloneFeature], decls: 57, vars: 18, consts: [["chipName", ""], ["autoName", "matAutocomplete"], ["chipID", ""], ["autoId", "matAutocomplete"], ["chipUser", ""], ["autoUser", "matAutocomplete"], [1, "filter-container"], ["aria-label", "Campaign Selection"], [3, "removable", "removed", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Select campaign Names", 3, "matChipInputFor", "matAutocomplete", "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Campaign ID Selection"], ["type", "text", "placeholder", "Select campaign IDs", 3, "matChipInputFor", "matAutocomplete", "formControl"], ["aria-label", "User Selection"], ["type", "text", "placeholder", "Select users", 3, "matChipInputFor", "matAutocomplete", "formControl"], [1, "table-container"], ["mat-table", "", 1, "mat-elevation-z8", "table", 3, "dataSource"], ["matColumnDef", "campaignName"], ["class", "first-column", "mat-header-cell", "", 3, "background-color", 4, "matHeaderCellDef"], ["class", "first-column", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "lineChart"], ["mat-header-cell", "", 3, "background-color", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "platform"], ["matColumnDef", "budget"], ["matColumnDef", "overall"], ["matColumnDef", "yesterday"], ["matColumnDef", "daily_estimated_cost"], ["mat-header-row", "", "class", "head-row", 4, "matHeaderRowDef"], ["mat-row", "", "class", "row", 4, "matRowDef", "matRowDefColumns"], [1, "footer"], [3, "removed", "removable"], ["matChipRemove", ""], [3, "value"], [3, "change", "checked"], ["mat-header-cell", "", 1, "first-column"], ["mat-cell", "", 1, "first-column"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], ["platform", "dv360", "platformRevenue", "Revenue (Adv Currency)", 3, "chartData", "uniqueId", 4, "ngIf"], ["platform", "dv360", "platformRevenue", "Revenue (Adv Currency)", 3, "chartData", "uniqueId"], ["platform", "facebook", "platformRevenue", "spend", 3, "chartData", "uniqueId", 4, "ngIf"], ["platform", "facebook", "platformRevenue", "spend", 3, "chartData", "uniqueId"], ["platform", "googleAds", "platformRevenue", "costMicros", 3, "chartData", "uniqueId", 4, "ngIf"], ["platform", "googleAds", "platformRevenue", "costMicros", 3, "chartData", "uniqueId"], ["platform", "bing", "platformRevenue", "Spend", 3, "chartData", "uniqueId", 4, "ngIf"], ["platform", "bing", "platformRevenue", "Spend", 3, "chartData", "uniqueId"], ["mat-header-row", "", 1, "head-row"], ["mat-row", "", 1, "row"]], template: function PacingAlertsComponent_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "div", 6)(1, "mat-form-field")(2, "mat-label");
    i019.\u0275\u0275text(3, "Campaign Name");
    i019.\u0275\u0275elementEnd();
    i019.\u0275\u0275elementStart(4, "mat-chip-grid", 7, 0);
    i019.\u0275\u0275template(6, PacingAlertsComponent_mat_chip_6_Template, 4, 2, "mat-chip", 8);
    i019.\u0275\u0275elementEnd();
    i019.\u0275\u0275element(7, "input", 9);
    i019.\u0275\u0275elementStart(8, "mat-autocomplete", null, 1);
    i019.\u0275\u0275template(10, PacingAlertsComponent_mat_option_10_Template, 3, 3, "mat-option", 10);
    i019.\u0275\u0275elementEnd()();
    i019.\u0275\u0275elementStart(11, "mat-form-field")(12, "mat-label");
    i019.\u0275\u0275text(13, "Campaign ID");
    i019.\u0275\u0275elementEnd();
    i019.\u0275\u0275elementStart(14, "mat-chip-grid", 11, 2);
    i019.\u0275\u0275template(16, PacingAlertsComponent_mat_chip_16_Template, 4, 2, "mat-chip", 8);
    i019.\u0275\u0275elementEnd();
    i019.\u0275\u0275element(17, "input", 12);
    i019.\u0275\u0275elementStart(18, "mat-autocomplete", null, 3);
    i019.\u0275\u0275template(20, PacingAlertsComponent_mat_option_20_Template, 3, 3, "mat-option", 10);
    i019.\u0275\u0275elementEnd()();
    i019.\u0275\u0275elementStart(21, "mat-form-field")(22, "mat-label");
    i019.\u0275\u0275text(23, "User");
    i019.\u0275\u0275elementEnd();
    i019.\u0275\u0275elementStart(24, "mat-chip-grid", 13, 4);
    i019.\u0275\u0275template(26, PacingAlertsComponent_mat_chip_26_Template, 4, 2, "mat-chip", 8);
    i019.\u0275\u0275elementEnd();
    i019.\u0275\u0275element(27, "input", 14);
    i019.\u0275\u0275elementStart(28, "mat-autocomplete", null, 5);
    i019.\u0275\u0275template(30, PacingAlertsComponent_mat_option_30_Template, 3, 3, "mat-option", 10);
    i019.\u0275\u0275elementEnd()()();
    i019.\u0275\u0275elementStart(31, "div", 15)(32, "table", 16);
    i019.\u0275\u0275elementContainerStart(33, 17);
    i019.\u0275\u0275template(34, PacingAlertsComponent_th_34_Template, 2, 2, "th", 18)(35, PacingAlertsComponent_td_35_Template, 2, 1, "td", 19);
    i019.\u0275\u0275elementContainerEnd();
    i019.\u0275\u0275elementContainerStart(36, 20);
    i019.\u0275\u0275template(37, PacingAlertsComponent_th_37_Template, 2, 2, "th", 21)(38, PacingAlertsComponent_td_38_Template, 8, 7, "td", 22);
    i019.\u0275\u0275elementContainerEnd();
    i019.\u0275\u0275elementContainerStart(39, 23);
    i019.\u0275\u0275template(40, PacingAlertsComponent_th_40_Template, 2, 2, "th", 21)(41, PacingAlertsComponent_td_41_Template, 8, 7, "td", 22);
    i019.\u0275\u0275elementContainerEnd();
    i019.\u0275\u0275elementContainerStart(42, 24);
    i019.\u0275\u0275template(43, PacingAlertsComponent_th_43_Template, 2, 2, "th", 21)(44, PacingAlertsComponent_td_44_Template, 8, 7, "td", 22);
    i019.\u0275\u0275elementContainerEnd();
    i019.\u0275\u0275elementContainerStart(45, 25);
    i019.\u0275\u0275template(46, PacingAlertsComponent_th_46_Template, 2, 2, "th", 21)(47, PacingAlertsComponent_td_47_Template, 8, 7, "td", 22);
    i019.\u0275\u0275elementContainerEnd();
    i019.\u0275\u0275elementContainerStart(48, 26);
    i019.\u0275\u0275template(49, PacingAlertsComponent_th_49_Template, 2, 2, "th", 21)(50, PacingAlertsComponent_td_50_Template, 8, 7, "td", 22);
    i019.\u0275\u0275elementContainerEnd();
    i019.\u0275\u0275elementContainerStart(51, 27);
    i019.\u0275\u0275template(52, PacingAlertsComponent_th_52_Template, 2, 2, "th", 21)(53, PacingAlertsComponent_td_53_Template, 8, 7, "td", 22);
    i019.\u0275\u0275elementContainerEnd();
    i019.\u0275\u0275template(54, PacingAlertsComponent_tr_54_Template, 1, 0, "tr", 28)(55, PacingAlertsComponent_tr_55_Template, 1, 0, "tr", 29);
    i019.\u0275\u0275elementEnd()();
    i019.\u0275\u0275element(56, "div", 30);
  }
  if (rf & 2) {
    const chipName_r21 = i019.\u0275\u0275reference(5);
    const autoName_r22 = i019.\u0275\u0275reference(9);
    const chipID_r23 = i019.\u0275\u0275reference(15);
    const autoId_r24 = i019.\u0275\u0275reference(19);
    const chipUser_r25 = i019.\u0275\u0275reference(25);
    const autoUser_r26 = i019.\u0275\u0275reference(29);
    i019.\u0275\u0275advance(6);
    i019.\u0275\u0275property("ngForOf", ctx.selectedCampaignNames);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("matChipInputFor", chipName_r21)("matAutocomplete", autoName_r22)("formControl", ctx.campaignNameFilter);
    i019.\u0275\u0275advance(3);
    i019.\u0275\u0275property("ngForOf", ctx.campaignNames);
    i019.\u0275\u0275advance(6);
    i019.\u0275\u0275property("ngForOf", ctx.selectedCampaignIds);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("matChipInputFor", chipID_r23)("matAutocomplete", autoId_r24)("formControl", ctx.campaignIdFilter);
    i019.\u0275\u0275advance(3);
    i019.\u0275\u0275property("ngForOf", ctx.campaignIds);
    i019.\u0275\u0275advance(6);
    i019.\u0275\u0275property("ngForOf", ctx.selectedUsers);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("matChipInputFor", chipUser_r25)("matAutocomplete", autoUser_r26)("formControl", ctx.userFilter);
    i019.\u0275\u0275advance(3);
    i019.\u0275\u0275property("ngForOf", ctx.users);
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275property("dataSource", ctx.dataSource);
    i019.\u0275\u0275advance(22);
    i019.\u0275\u0275property("matHeaderRowDef", ctx.displayedColumnsAlerts);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275property("matRowDefColumns", ctx.displayedColumnsAlerts);
  }
}, dependencies: [
  CommonModule9,
  i45.NgForOf,
  i45.NgIf,
  ReactiveFormsModule8,
  i54.DefaultValueAccessor,
  i54.NgControlStatus,
  i54.FormControlDirective,
  LineChartComponent,
  MatTableModule2,
  i67.MatTable,
  i67.MatHeaderCellDef,
  i67.MatHeaderRowDef,
  i67.MatColumnDef,
  i67.MatCellDef,
  i67.MatRowDef,
  i67.MatHeaderCell,
  i67.MatCell,
  i67.MatHeaderRow,
  i67.MatRow,
  MatSelectModule7,
  i77.MatFormField,
  i77.MatLabel,
  i88.MatOption,
  MatInputModule8,
  MatCheckboxModule5,
  i97.MatCheckbox,
  MatChipsModule5,
  i106.MatChip,
  i106.MatChipGrid,
  i106.MatChipInput,
  i106.MatChipRemove,
  MatIconModule8,
  i1112.MatIcon,
  MatAutocompleteModule6,
  i128.MatAutocomplete,
  i128.MatAutocompleteTrigger
], styles: ["\n\n.table-container[_ngcontent-%COMP%] {\n  margin: 3% 3%;\n}\n.table[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 10px;\n}\ntable[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  overflow: hidden !important;\n}\nhr[_ngcontent-%COMP%] {\n  height: 1px;\n  background-color: rgb(207, 207, 207);\n  border: none;\n  width: 100%;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.first-column[_ngcontent-%COMP%] {\n  padding-left: 25px;\n}\n.footer[_ngcontent-%COMP%] {\n  height: 10px;\n}\n.filter-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  margin: 3%;\n  justify-content: center;\n}\n/*# sourceMappingURL=pacing-alerts.component.css.map */"] });
var PacingAlertsComponent = _PacingAlertsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i019.\u0275setClassDebugInfo(PacingAlertsComponent, { className: "PacingAlertsComponent" });
})();

// src/app/components/profile/profile.component.ts
import { Component as Component14, inject as inject14 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { ReactiveFormsModule as ReactiveFormsModule11, FormControl as FormControl5, Validators as Validators10 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import { CommonModule as CommonModule12 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { MatFormFieldModule as MatFormFieldModule4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import { MatCardModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_card.js?v=478e822e";
import { MatButtonModule as MatButtonModule8 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import { MatInputModule as MatInputModule11 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import { MatDialogModule as MatDialogModule4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";

// src/app/components/change-email/change-email.component.ts
import { Component as Component12, inject as inject12 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule10 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { Validators as Validators8, FormControl as FormControl4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import { ReactiveFormsModule as ReactiveFormsModule9 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import { MatDialogModule as MatDialogModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import { MatFormFieldModule as MatFormFieldModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import { MatButtonModule as MatButtonModule6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import { MatInputModule as MatInputModule9 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import { MatIconModule as MatIconModule9 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import { getAuth as getAuth12, updateEmail, EmailAuthProvider, reauthenticateWithCredential } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_auth.js?v=478e822e";
import { ToastrService as ToastrService12 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import * as i020 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i129 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import * as i212 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import * as i46 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
import * as i55 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i68 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import * as i78 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import * as i89 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import * as i98 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
function ChangeEmailComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    i020.\u0275\u0275elementStart(0, "mat-error");
    i020.\u0275\u0275text(1, " Email is required. ");
    i020.\u0275\u0275elementEnd();
  }
}
function ChangeEmailComponent_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    i020.\u0275\u0275elementStart(0, "mat-error");
    i020.\u0275\u0275text(1, " Please enter a valid email address. ");
    i020.\u0275\u0275elementEnd();
  }
}
function ChangeEmailComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    i020.\u0275\u0275elementStart(0, "mat-error");
    i020.\u0275\u0275text(1, " Password is required. ");
    i020.\u0275\u0275elementEnd();
  }
}
var _ChangeEmailComponent = class _ChangeEmailComponent {
  constructor(formBuilder, dialogRef, authService, afs) {
    this.formBuilder = formBuilder;
    this.dialogRef = dialogRef;
    this.authService = authService;
    this.afs = afs;
    this.hide = true;
    this.toaster = inject12(ToastrService12);
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.emailForm = this.formBuilder.group({
      email: new FormControl4(null, [Validators8.required, Validators8.email]),
      password: new FormControl4(null, Validators8.required)
    });
  }
  reauthenticate(email, password) {
    const auth = getAuth12();
    const user = auth.currentUser;
    if (user) {
      const credential = EmailAuthProvider.credential(email, password);
      return reauthenticateWithCredential(user, credential);
    } else {
      throw new Error("No user logged in");
    }
  }
  updateEmail() {
    if (this.emailForm.valid) {
      const value = this.emailForm.value;
      const auth = getAuth12();
      if (auth.currentUser && auth.currentUser.email) {
        this.reauthenticate(auth.currentUser.email, value.password).then(() => {
          if (auth.currentUser) {
            updateEmail(auth.currentUser, value.email).then(() => {
              this.dialogRef.close();
              this.toaster.success("Email updated successfully", "Success");
            }).catch((error) => {
              this.toaster.error(error.message, "Error");
            });
          }
        }).catch((error) => {
          if (error.code === "auth/wrong-password") {
            this.toaster.error("The password is invalid.", "Error");
          } else {
            this.toaster.error(error.message, "Error");
          }
        });
      }
    } else {
      Object.values(this.emailForm.controls).forEach((control) => {
        if (control instanceof FormControl4) {
          control.markAsTouched();
        }
      });
    }
  }
};
_ChangeEmailComponent.\u0275fac = function ChangeEmailComponent_Factory(t) {
  return new (t || _ChangeEmailComponent)(i020.\u0275\u0275directiveInject(i129.FormBuilder), i020.\u0275\u0275directiveInject(i212.MatDialogRef), i020.\u0275\u0275directiveInject(AuthService), i020.\u0275\u0275directiveInject(i46.AngularFirestore));
};
_ChangeEmailComponent.\u0275cmp = /* @__PURE__ */ i020.\u0275\u0275defineComponent({ type: _ChangeEmailComponent, selectors: [["app-change-email"]], standalone: true, features: [i020.\u0275\u0275StandaloneFeature], decls: 24, vars: 8, consts: [["mat-dialog-title", ""], [3, "formGroup"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "formControlName", "email", "type", "email"], [4, "ngIf"], ["appearance", "outline", 1, "form-element"], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "mat-dialog-close", ""]], template: function ChangeEmailComponent_Template(rf, ctx) {
  if (rf & 1) {
    i020.\u0275\u0275elementStart(0, "h2", 0);
    i020.\u0275\u0275text(1, "Change email");
    i020.\u0275\u0275elementEnd();
    i020.\u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 1)(4, "mat-form-field", 2)(5, "mat-label");
    i020.\u0275\u0275text(6, "New email");
    i020.\u0275\u0275elementEnd();
    i020.\u0275\u0275element(7, "input", 3);
    i020.\u0275\u0275template(8, ChangeEmailComponent_mat_error_8_Template, 2, 0, "mat-error", 4)(9, ChangeEmailComponent_mat_error_9_Template, 2, 0, "mat-error", 4);
    i020.\u0275\u0275elementEnd();
    i020.\u0275\u0275elementStart(10, "mat-form-field", 5)(11, "mat-label");
    i020.\u0275\u0275text(12, "Password");
    i020.\u0275\u0275elementEnd();
    i020.\u0275\u0275element(13, "input", 6);
    i020.\u0275\u0275template(14, ChangeEmailComponent_mat_error_14_Template, 2, 0, "mat-error", 4);
    i020.\u0275\u0275elementStart(15, "button", 7);
    i020.\u0275\u0275listener("click", function ChangeEmailComponent_Template_button_click_15_listener() {
      return ctx.hide = !ctx.hide;
    });
    i020.\u0275\u0275elementStart(16, "mat-icon");
    i020.\u0275\u0275text(17);
    i020.\u0275\u0275elementEnd()()()()();
    i020.\u0275\u0275elementStart(18, "mat-dialog-actions")(19, "button", 8);
    i020.\u0275\u0275listener("click", function ChangeEmailComponent_Template_button_click_19_listener() {
      return ctx.updateEmail();
    });
    i020.\u0275\u0275text(20, "Save");
    i020.\u0275\u0275elementEnd();
    i020.\u0275\u0275text(21, "\xA0 ");
    i020.\u0275\u0275elementStart(22, "button", 9);
    i020.\u0275\u0275text(23, "Cancel");
    i020.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_4_0;
    i020.\u0275\u0275advance(3);
    i020.\u0275\u0275property("formGroup", ctx.emailForm);
    i020.\u0275\u0275advance(5);
    i020.\u0275\u0275property("ngIf", (tmp_1_0 = ctx.emailForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    i020.\u0275\u0275advance();
    i020.\u0275\u0275property("ngIf", (tmp_2_0 = ctx.emailForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["email"]);
    i020.\u0275\u0275advance(4);
    i020.\u0275\u0275property("type", ctx.hide ? "password" : "text");
    i020.\u0275\u0275advance();
    i020.\u0275\u0275property("ngIf", (tmp_4_0 = ctx.emailForm.get("password")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
    i020.\u0275\u0275advance();
    i020.\u0275\u0275attribute("aria-label", "Hide password")("aria-pressed", ctx.hide);
    i020.\u0275\u0275advance(2);
    i020.\u0275\u0275textInterpolate(ctx.hide ? "visibility_off" : "visibility");
  }
}, dependencies: [CommonModule10, i55.NgIf, ReactiveFormsModule9, i129.\u0275NgNoValidate, i129.DefaultValueAccessor, i129.NgControlStatus, i129.NgControlStatusGroup, i129.FormGroupDirective, i129.FormControlName, MatInputModule9, i68.MatInput, i78.MatFormField, i78.MatLabel, i78.MatError, i78.MatSuffix, MatDialogModule2, i212.MatDialogClose, i212.MatDialogTitle, i212.MatDialogActions, i212.MatDialogContent, MatFormFieldModule2, MatButtonModule6, i89.MatButton, i89.MatIconButton, MatIconModule9, i98.MatIcon], styles: ["\n\n.form-field[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  margin-left: 16px;\n}\n/*# sourceMappingURL=change-email.component.css.map */"] });
var ChangeEmailComponent = _ChangeEmailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i020.\u0275setClassDebugInfo(ChangeEmailComponent, { className: "ChangeEmailComponent" });
})();

// src/app/components/change-password/change-password.component.ts
import { Component as Component13, inject as inject13 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { Validators as Validators9 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import { CommonModule as CommonModule11 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { ReactiveFormsModule as ReactiveFormsModule10 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import { getAuth as getAuth13, reauthenticateWithCredential as reauthenticateWithCredential2, EmailAuthProvider as EmailAuthProvider2, updatePassword } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_auth.js?v=478e822e";
import { MatDialogModule as MatDialogModule3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import { MatFormFieldModule as MatFormFieldModule3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import { MatInputModule as MatInputModule10 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import { MatButtonModule as MatButtonModule7 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import { MatIconModule as MatIconModule10 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import { ToastrService as ToastrService13 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import * as i021 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i130 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import * as i213 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import * as i37 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import * as i47 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import * as i56 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import * as i69 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import * as i79 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
var _c06 = (a0) => ({ "margin-bottom": a0 });
function ChangePasswordComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    i021.\u0275\u0275elementStart(0, "mat-error");
    i021.\u0275\u0275text(1, " Old password is required. ");
    i021.\u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    i021.\u0275\u0275elementStart(0, "mat-error");
    i021.\u0275\u0275text(1, " Password is required. ");
    i021.\u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    i021.\u0275\u0275elementStart(0, "mat-error");
    i021.\u0275\u0275text(1, " Password must be at least 6 characters long. ");
    i021.\u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    i021.\u0275\u0275elementStart(0, "mat-error");
    i021.\u0275\u0275text(1, " Password must contain at least one uppercase letter. ");
    i021.\u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    i021.\u0275\u0275elementStart(0, "mat-error");
    i021.\u0275\u0275text(1, " Password must contain at least one lowercase letter. ");
    i021.\u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    i021.\u0275\u0275elementStart(0, "mat-error");
    i021.\u0275\u0275text(1, " Password must contain at least one special character. ");
    i021.\u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    i021.\u0275\u0275elementStart(0, "mat-error");
    i021.\u0275\u0275text(1, " Confirmation of the new password is required. ");
    i021.\u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    i021.\u0275\u0275elementStart(0, "mat-error");
    i021.\u0275\u0275text(1, " Passwords do not match. ");
    i021.\u0275\u0275elementEnd();
  }
}
var _ChangePasswordComponent = class _ChangePasswordComponent {
  constructor(formBuilder, dialogRef) {
    this.formBuilder = formBuilder;
    this.dialogRef = dialogRef;
    this.hideOld = true;
    this.hideNew = true;
    this.hideConfirm = true;
    this.toaster = inject13(ToastrService13);
    this.createForm();
  }
  ngOnInit() {
    this.createForm();
  }
  passwordStrengthValidator() {
    return (control) => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasSpecialChar = /[\W_]+/.test(value);
      if (hasUpperCase && hasLowerCase && hasSpecialChar) {
        return null;
      }
      return {
        passwordStrength: {
          valid: false,
          hasUpperCase,
          hasLowerCase,
          hasSpecialChar
        }
      };
    };
  }
  createForm() {
    this.passwordForm = this.formBuilder.group({
      oldPassword: ["", Validators9.required],
      newPassword: ["", [Validators9.required, Validators9.minLength(6), this.passwordStrengthValidator()]],
      confirmNewPassword: ["", Validators9.required]
    }, {
      validators: this.matchValidator("newPassword", "confirmNewPassword")
    });
  }
  matchValidator(controlName, matchingControlName) {
    return (abstractControl) => {
      const control = abstractControl.get(controlName);
      const matchingControl = abstractControl.get(matchingControlName);
      if (matchingControl.errors && !matchingControl.errors?.["confirmedValidator"]) {
        return null;
      }
      if (control.value !== matchingControl.value) {
        const error = { confirmedValidator: "Passwords do not match." };
        matchingControl.setErrors(error);
        return error;
      } else {
        matchingControl.setErrors(null);
        return null;
      }
    };
  }
  updatePassword() {
    if (this.passwordForm.valid) {
      const formValue = this.passwordForm.value;
      const auth = getAuth13();
      const user = auth.currentUser;
      if (user) {
        const credential = EmailAuthProvider2.credential(user.email, formValue.oldPassword);
        reauthenticateWithCredential2(user, credential).then(() => {
          updatePassword(user, formValue.newPassword).then(() => {
            this.dialogRef.close();
            this.toaster.success("Password updated successfully", "Success");
          }).catch((error) => {
            this.toaster.error(error.message, "Error");
          });
        }).catch((error) => {
          if (error.code === "auth/wrong-password") {
            this.toaster.error("The password is invalid.", "Error");
          } else {
            this.toaster.error(`Error re-authenticating: ${error.message}`, "Error");
          }
        });
      }
    }
  }
};
_ChangePasswordComponent.\u0275fac = function ChangePasswordComponent_Factory(t) {
  return new (t || _ChangePasswordComponent)(i021.\u0275\u0275directiveInject(i130.FormBuilder), i021.\u0275\u0275directiveInject(i213.MatDialogRef));
};
_ChangePasswordComponent.\u0275cmp = /* @__PURE__ */ i021.\u0275\u0275defineComponent({ type: _ChangePasswordComponent, selectors: [["app-change-password"]], standalone: true, features: [i021.\u0275\u0275StandaloneFeature], decls: 39, vars: 24, consts: [["mat-dialog-title", ""], [3, "formGroup"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "formControlName", "oldPassword", 3, "type"], [4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["appearance", "outline", 1, "form-field", "password", 3, "ngStyle"], ["matInput", "", "formControlName", "newPassword", 3, "type"], ["matInput", "", "formControlName", "confirmNewPassword", 3, "type"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "mat-dialog-close", ""]], template: function ChangePasswordComponent_Template(rf, ctx) {
  if (rf & 1) {
    i021.\u0275\u0275elementStart(0, "h2", 0);
    i021.\u0275\u0275text(1, "Change Password");
    i021.\u0275\u0275elementEnd();
    i021.\u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 1)(4, "mat-form-field", 2)(5, "mat-label");
    i021.\u0275\u0275text(6, "Old Password");
    i021.\u0275\u0275elementEnd();
    i021.\u0275\u0275element(7, "input", 3);
    i021.\u0275\u0275template(8, ChangePasswordComponent_mat_error_8_Template, 2, 0, "mat-error", 4);
    i021.\u0275\u0275elementStart(9, "button", 5);
    i021.\u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_9_listener() {
      return ctx.hideOld = !ctx.hideOld;
    });
    i021.\u0275\u0275elementStart(10, "mat-icon");
    i021.\u0275\u0275text(11);
    i021.\u0275\u0275elementEnd()()();
    i021.\u0275\u0275elementStart(12, "mat-form-field", 6)(13, "mat-label");
    i021.\u0275\u0275text(14, "New Password");
    i021.\u0275\u0275elementEnd();
    i021.\u0275\u0275element(15, "input", 7);
    i021.\u0275\u0275template(16, ChangePasswordComponent_mat_error_16_Template, 2, 0, "mat-error", 4)(17, ChangePasswordComponent_mat_error_17_Template, 2, 0, "mat-error", 4)(18, ChangePasswordComponent_mat_error_18_Template, 2, 0, "mat-error", 4)(19, ChangePasswordComponent_mat_error_19_Template, 2, 0, "mat-error", 4)(20, ChangePasswordComponent_mat_error_20_Template, 2, 0, "mat-error", 4);
    i021.\u0275\u0275elementStart(21, "button", 5);
    i021.\u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_21_listener() {
      return ctx.hideNew = !ctx.hideNew;
    });
    i021.\u0275\u0275elementStart(22, "mat-icon");
    i021.\u0275\u0275text(23);
    i021.\u0275\u0275elementEnd()()();
    i021.\u0275\u0275elementStart(24, "mat-form-field", 2)(25, "mat-label");
    i021.\u0275\u0275text(26, "Confirm New Password");
    i021.\u0275\u0275elementEnd();
    i021.\u0275\u0275element(27, "input", 8);
    i021.\u0275\u0275template(28, ChangePasswordComponent_mat_error_28_Template, 2, 0, "mat-error", 4)(29, ChangePasswordComponent_mat_error_29_Template, 2, 0, "mat-error", 4);
    i021.\u0275\u0275elementStart(30, "button", 5);
    i021.\u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_30_listener() {
      return ctx.hideConfirm = !ctx.hideConfirm;
    });
    i021.\u0275\u0275elementStart(31, "mat-icon");
    i021.\u0275\u0275text(32);
    i021.\u0275\u0275elementEnd()()()()();
    i021.\u0275\u0275elementStart(33, "mat-dialog-actions")(34, "button", 9);
    i021.\u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_34_listener() {
      return ctx.updatePassword();
    });
    i021.\u0275\u0275text(35, "Save");
    i021.\u0275\u0275elementEnd();
    i021.\u0275\u0275text(36, "\xA0 ");
    i021.\u0275\u0275elementStart(37, "button", 10);
    i021.\u0275\u0275text(38, "Cancel");
    i021.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_17_0;
    i021.\u0275\u0275advance(3);
    i021.\u0275\u0275property("formGroup", ctx.passwordForm);
    i021.\u0275\u0275advance(4);
    i021.\u0275\u0275property("type", ctx.hideOld ? "password" : "text");
    i021.\u0275\u0275advance();
    i021.\u0275\u0275property("ngIf", (tmp_2_0 = ctx.passwordForm.get("oldPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    i021.\u0275\u0275advance();
    i021.\u0275\u0275attribute("aria-label", "Hide old password")("aria-pressed", ctx.hideOld);
    i021.\u0275\u0275advance(2);
    i021.\u0275\u0275textInterpolate(ctx.hideOld ? "visibility_off" : "visibility");
    i021.\u0275\u0275advance();
    i021.\u0275\u0275property("ngStyle", i021.\u0275\u0275pureFunction1(22, _c06, ((tmp_6_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_6_0.touched) && !((tmp_6_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["minlength"]) && ((tmp_6_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["passwordStrength"]) && ((tmp_6_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["passwordStrength"]["hasUpperCase"]) && ((tmp_6_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["passwordStrength"]["hasLowerCase"]) && !((tmp_6_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["passwordStrength"]["hasSpecialChar"]) || ((tmp_6_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_6_0.touched) && !((tmp_6_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["minlength"]) && ((tmp_6_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["passwordStrength"]) && ((tmp_6_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["passwordStrength"]["hasUpperCase"]) && !((tmp_6_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["passwordStrength"]["hasLowerCase"]) || ((tmp_6_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_6_0.touched) && !((tmp_6_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["minlength"]) && ((tmp_6_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["passwordStrength"]) && !((tmp_6_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["passwordStrength"]["hasUpperCase"]) ? "17px" : ""));
    i021.\u0275\u0275advance(3);
    i021.\u0275\u0275property("type", ctx.hideNew ? "password" : "text");
    i021.\u0275\u0275advance();
    i021.\u0275\u0275property("ngIf", (tmp_8_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["required"]);
    i021.\u0275\u0275advance();
    i021.\u0275\u0275property("ngIf", ((tmp_9_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_9_0.touched) && ((tmp_9_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["minlength"]));
    i021.\u0275\u0275advance();
    i021.\u0275\u0275property("ngIf", ((tmp_10_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_10_0.touched) && !((tmp_10_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors["minlength"]) && ((tmp_10_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors["passwordStrength"]) && !((tmp_10_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors["passwordStrength"]["hasUpperCase"]));
    i021.\u0275\u0275advance();
    i021.\u0275\u0275property("ngIf", ((tmp_11_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_11_0.touched) && !((tmp_11_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["minlength"]) && ((tmp_11_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["passwordStrength"]) && ((tmp_11_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["passwordStrength"]["hasUpperCase"]) && !((tmp_11_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["passwordStrength"]["hasLowerCase"]));
    i021.\u0275\u0275advance();
    i021.\u0275\u0275property("ngIf", ((tmp_12_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_12_0.touched) && !((tmp_12_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["minlength"]) && ((tmp_12_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["passwordStrength"]) && ((tmp_12_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["passwordStrength"]["hasUpperCase"]) && ((tmp_12_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["passwordStrength"]["hasLowerCase"]) && !((tmp_12_0 = ctx.passwordForm.get("newPassword")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["passwordStrength"]["hasSpecialChar"]));
    i021.\u0275\u0275advance();
    i021.\u0275\u0275attribute("aria-label", "Hide new password")("aria-pressed", ctx.hideNew);
    i021.\u0275\u0275advance(2);
    i021.\u0275\u0275textInterpolate(ctx.hideNew ? "visibility_off" : "visibility");
    i021.\u0275\u0275advance(4);
    i021.\u0275\u0275property("type", ctx.hideConfirm ? "password" : "text");
    i021.\u0275\u0275advance();
    i021.\u0275\u0275property("ngIf", (tmp_17_0 = ctx.passwordForm.get("confirmNewPassword")) == null ? null : tmp_17_0.errors == null ? null : tmp_17_0.errors["required"]);
    i021.\u0275\u0275advance();
    i021.\u0275\u0275property("ngIf", ctx.passwordForm.hasError("confirmedValidator"));
    i021.\u0275\u0275advance();
    i021.\u0275\u0275attribute("aria-label", "Hide confirm password")("aria-pressed", ctx.hideConfirm);
    i021.\u0275\u0275advance(2);
    i021.\u0275\u0275textInterpolate(ctx.hideConfirm ? "visibility_off" : "visibility");
  }
}, dependencies: [MatDialogModule3, i213.MatDialogClose, i213.MatDialogTitle, i213.MatDialogActions, i213.MatDialogContent, MatFormFieldModule3, i37.MatFormField, i37.MatLabel, i37.MatError, i37.MatSuffix, MatButtonModule7, i47.MatButton, i47.MatIconButton, MatInputModule10, i56.MatInput, MatIconModule10, i69.MatIcon, ReactiveFormsModule10, i130.\u0275NgNoValidate, i130.DefaultValueAccessor, i130.NgControlStatus, i130.NgControlStatusGroup, i130.FormGroupDirective, i130.FormControlName, CommonModule11, i79.NgIf, i79.NgStyle], styles: ["\n\n.form-field[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  margin-left: 16px;\n}\n/*# sourceMappingURL=change-password.component.css.map */"] });
var ChangePasswordComponent = _ChangePasswordComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i021.\u0275setClassDebugInfo(ChangePasswordComponent, { className: "ChangePasswordComponent" });
})();

// src/app/components/profile/profile.component.ts
import { first as first3, switchMap as switchMap4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs_operators.js?v=478e822e";
import { throwError } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import { getAuth as getAuth14 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_auth.js?v=478e822e";
import { ToastrService as ToastrService14 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import * as i022 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i131 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import * as i214 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
import * as i48 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import * as i57 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i610 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import * as i710 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import * as i810 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import * as i99 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_card.js?v=478e822e";
function ProfileComponent_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    i022.\u0275\u0275elementStart(0, "mat-error");
    i022.\u0275\u0275text(1, " Username is required. ");
    i022.\u0275\u0275elementEnd();
  }
}
function ProfileComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    i022.\u0275\u0275elementStart(0, "mat-error");
    i022.\u0275\u0275text(1, " Email is required. ");
    i022.\u0275\u0275elementEnd();
  }
}
function ProfileComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    i022.\u0275\u0275elementStart(0, "mat-error");
    i022.\u0275\u0275text(1, " Please enter a valid email address. ");
    i022.\u0275\u0275elementEnd();
  }
}
var _ProfileComponent = class _ProfileComponent {
  constructor(formBuilder, db, authService, dialog) {
    this.formBuilder = formBuilder;
    this.db = db;
    this.authService = authService;
    this.dialog = dialog;
    this.toaster = inject14(ToastrService14);
    this.panelOpenState = false;
  }
  ngOnInit() {
    this.createForm();
    this.getUserProfile();
  }
  getUserProfile() {
    this.authService.user$.pipe(first3(), switchMap4((user) => {
      if (!user) {
        this.authService.signOut();
        return throwError(() => new Error("User not logged in"));
      }
      return this.db.collection("user").doc(user.uid).valueChanges();
    })).subscribe({
      next: (profile) => {
        const auth = getAuth14();
        if (profile && auth.currentUser) {
          this.profileForm.patchValue({
            username: profile.displayName,
            email: auth.currentUser.email,
            language: profile.language
          });
        }
      },
      error: (error) => console.error("Error processing document: ", error)
    });
  }
  createForm() {
    this.profileForm = this.formBuilder.group({
      username: new FormControl5(null, Validators10.required),
      email: new FormControl5({ value: null, disabled: true }, [Validators10.required, Validators10.email]),
      language: new FormControl5("en", Validators10.required)
    });
  }
  updateProfile() {
    if (this.profileForm.valid) {
      const formValue = this.profileForm.value;
      this.authService.user$.pipe(first3(), switchMap4((user) => {
        if (!user) {
          this.authService.signOut();
          return throwError(() => new Error("User not logged in"));
        }
        return this.db.collection("user").doc(user.uid).update({
          displayName: formValue.username,
          language: formValue.language
        });
      })).subscribe({
        next: () => {
          this.toaster.success("Profile updated successfully", "Success");
        },
        error: (error) => {
          this.toaster.error(`Error updating profile: ${error}`, "Error");
        }
      });
    }
  }
  openChangeEmailDialog() {
    this.dialog.open(ChangeEmailComponent, {
      width: "350px"
    });
  }
  openChangePasswordDialog() {
    this.dialog.open(ChangePasswordComponent, {
      width: "350px"
    });
  }
};
_ProfileComponent.\u0275fac = function ProfileComponent_Factory(t) {
  return new (t || _ProfileComponent)(i022.\u0275\u0275directiveInject(i131.FormBuilder), i022.\u0275\u0275directiveInject(i214.AngularFirestore), i022.\u0275\u0275directiveInject(AuthService), i022.\u0275\u0275directiveInject(i48.MatDialog));
};
_ProfileComponent.\u0275cmp = /* @__PURE__ */ i022.\u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], standalone: true, features: [i022.\u0275\u0275StandaloneFeature], decls: 26, vars: 4, consts: [[1, "profile-card"], [3, "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "username"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "type", "email"], [1, "submit-button"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "click"], [1, "credentials-button"], ["mat-stroked-button", "", "color", "primary", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) {
  if (rf & 1) {
    i022.\u0275\u0275elementStart(0, "mat-card", 0)(1, "mat-card-header")(2, "mat-card-title");
    i022.\u0275\u0275text(3, "Profile Settings");
    i022.\u0275\u0275elementEnd()();
    i022.\u0275\u0275elementStart(4, "mat-card-content")(5, "form", 1)(6, "mat-form-field", 2)(7, "mat-label");
    i022.\u0275\u0275text(8, "Username");
    i022.\u0275\u0275elementEnd();
    i022.\u0275\u0275element(9, "input", 3);
    i022.\u0275\u0275template(10, ProfileComponent_mat_error_10_Template, 2, 0, "mat-error", 4);
    i022.\u0275\u0275elementEnd();
    i022.\u0275\u0275elementStart(11, "mat-form-field", 2)(12, "mat-label");
    i022.\u0275\u0275text(13, "Email");
    i022.\u0275\u0275elementEnd();
    i022.\u0275\u0275element(14, "input", 5);
    i022.\u0275\u0275template(15, ProfileComponent_mat_error_15_Template, 2, 0, "mat-error", 4)(16, ProfileComponent_mat_error_16_Template, 2, 0, "mat-error", 4);
    i022.\u0275\u0275elementEnd();
    i022.\u0275\u0275elementStart(17, "div", 6)(18, "button", 7);
    i022.\u0275\u0275listener("click", function ProfileComponent_Template_button_click_18_listener() {
      return ctx.updateProfile();
    });
    i022.\u0275\u0275text(19, "Update Profile");
    i022.\u0275\u0275elementEnd()();
    i022.\u0275\u0275elementStart(20, "div", 8)(21, "button", 9);
    i022.\u0275\u0275listener("click", function ProfileComponent_Template_button_click_21_listener() {
      return ctx.openChangeEmailDialog();
    });
    i022.\u0275\u0275text(22, "Change email");
    i022.\u0275\u0275elementEnd();
    i022.\u0275\u0275text(23, "\xA0\xA0 ");
    i022.\u0275\u0275elementStart(24, "button", 9);
    i022.\u0275\u0275listener("click", function ProfileComponent_Template_button_click_24_listener() {
      return ctx.openChangePasswordDialog();
    });
    i022.\u0275\u0275text(25, "Change password");
    i022.\u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    i022.\u0275\u0275advance(5);
    i022.\u0275\u0275property("formGroup", ctx.profileForm);
    i022.\u0275\u0275advance(5);
    i022.\u0275\u0275property("ngIf", (tmp_1_0 = ctx.profileForm.get("username")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    i022.\u0275\u0275advance(5);
    i022.\u0275\u0275property("ngIf", (tmp_2_0 = ctx.profileForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    i022.\u0275\u0275advance();
    i022.\u0275\u0275property("ngIf", (tmp_3_0 = ctx.profileForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["email"]);
  }
}, dependencies: [
  CommonModule12,
  i57.NgIf,
  ReactiveFormsModule11,
  i131.\u0275NgNoValidate,
  i131.DefaultValueAccessor,
  i131.NgControlStatus,
  i131.NgControlStatusGroup,
  i131.FormGroupDirective,
  i131.FormControlName,
  MatInputModule11,
  i610.MatInput,
  i710.MatFormField,
  i710.MatLabel,
  i710.MatError,
  MatDialogModule4,
  MatButtonModule8,
  i810.MatButton,
  MatFormFieldModule4,
  MatCardModule,
  i99.MatCard,
  i99.MatCardContent,
  i99.MatCardHeader,
  i99.MatCardTitle
], styles: ["\n\n.profile-card[_ngcontent-%COMP%] {\n  width: 600px;\n  margin: auto;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.submit-button[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\nform[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
var ProfileComponent = _ProfileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i022.\u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent" });
})();

// src/app/components/pacing-template/pacing-template.component.ts
import { Component as Component15 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { MatIconModule as MatIconModule11 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import { MatDividerModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_divider.js?v=478e822e";
import { MatGridListModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_grid-list.js?v=478e822e";
import { MatChipsModule as MatChipsModule6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_chips.js?v=478e822e";
import * as am52 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@amcharts_amcharts5.js?v=478e822e";
import * as am5xy2 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@amcharts_amcharts5_xy.js?v=478e822e";
import am5themes_Animated2 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@amcharts_amcharts5_themes_Animated.js?v=478e822e";
import * as i023 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i138 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import * as i215 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_divider.js?v=478e822e";
import * as i38 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_chips.js?v=478e822e";
var _PacingTemplateComponent = class _PacingTemplateComponent {
  ngOnInit() {
    this.createChart();
    this.createBudgetChart("pacing-bullet-chart", true, 45, 60);
    this.createBudgetChart("pacing-bullet-google", true, 72, 81);
    this.createBudgetChart("pacing-bullet-bing", true, 62, 63);
  }
  createSeries(root, chart, data, xAxis, yAxis, color3) {
    let series = chart.series.push(am5xy2.LineSeries.new(root, {
      minBulletDistance: 10,
      connect: false,
      xAxis,
      yAxis,
      valueYField: "value",
      valueXField: "date",
      //fill: am5.color(color),
      tooltip: am52.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{platform} spent {valueY}$",
        labelHTML: `<div class="tooltipam" style="font-size:12px;">{platform} <strong>spent</strong> {valueY}$</div>`
      })
    }));
    series.fills.template.setAll({
      fillOpacity: 0.2,
      visible: true
    });
    series.strokes.template.setAll({
      strokeWidth: 1
    });
    series.data.processor = am52.DataProcessor.new(root, {
      dateFormat: "yyyy-MM-dd",
      dateFields: ["date"]
    });
    series.data.setAll(data);
    series.bullets.push(function() {
      let circle = am52.Circle.new(root, {
        radius: 3,
        fill: root.interfaceColors.get("background"),
        stroke: series.get("fill"),
        strokeWidth: 1
      });
      return am52.Bullet.new(root, {
        sprite: circle
      });
    });
  }
  createBudgetChart(divId, gradient, spend, estimated) {
    let colors = [
      am52.color(16382457),
      am52.color(15395562)
    ];
    let root = am52.Root.new(divId);
    root.setThemes([
      am5themes_Animated2.new(root)
    ]);
    let chart = root.container.children.push(am5xy2.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none",
      arrangeTooltips: false
    }));
    let yRenderer = am5xy2.AxisRendererY.new(root, {});
    yRenderer.labels.template.setAll({
      fontSize: "10px"
    });
    let yAxis = chart.yAxes.push(am5xy2.CategoryAxis.new(root, {
      categoryField: "category",
      renderer: yRenderer
    }));
    yAxis.data.setAll([{ category: "Budget" }]);
    let xRenderer = am5xy2.AxisRendererX.new(root, {});
    xRenderer.grid.template.set("forceHidden", true);
    xRenderer.labels.template.setAll({
      fontSize: "10px"
    });
    let xAxis = chart.xAxes.push(am5xy2.ValueAxis.new(root, {
      renderer: xRenderer,
      min: 0,
      max: 100,
      numberFormat: "#.'%'"
    }));
    if (gradient) {
      let rangeDataItem = xAxis.makeDataItem({ value: 0, endValue: 100 });
      let range = xAxis.createAxisRange(rangeDataItem);
      let axisFill = rangeDataItem.get("axisFill");
      if (axisFill) {
        axisFill.setAll({
          visible: true,
          fillOpacity: 1
        });
      }
      let stops = [];
      for (var i = 0; i < colors.length; i++) {
        stops.push({ color: colors[i] });
      }
      let linearGradient = am52.LinearGradient.new(root, {
        rotation: 0,
        stops
      });
      let rangedAxisFill = rangeDataItem.get("axisFill");
      if (rangedAxisFill) {
        rangedAxisFill.set("fillGradient", linearGradient);
      }
    } else {
      let count = colors.length;
      for (var i = 0; i < count; i++) {
        let rangeDataItem = xAxis.makeDataItem({
          value: i / count * 100,
          endValue: (i + 1) / count * 100
        });
        let range = xAxis.createAxisRange(rangeDataItem);
        let rangedAxisFill = rangeDataItem.get("axisFill");
        if (rangedAxisFill) {
          rangedAxisFill.setAll({
            visible: true,
            fill: colors[i],
            stroke: colors[i],
            fillOpacity: 1
          });
        }
      }
    }
    let series = chart.series.push(am5xy2.ColumnSeries.new(root, {
      xAxis,
      yAxis,
      valueXField: "value",
      categoryYField: "category",
      fill: am52.color(7557562),
      stroke: am52.color(7557562),
      tooltip: am52.Tooltip.new(root, {
        pointerOrientation: "right",
        labelText: "Spent {valueX}%",
        labelHTML: `<div class="tooltipam" style="font-size:12px;">Spent: <strong>{valueX}%</strong></div>`
      })
    }));
    series.columns.template.setAll({
      height: am52.p50
    });
    series.data.setAll([{ category: "Budget", value: spend }]);
    let stepSeries = chart.series.push(am5xy2.StepLineSeries.new(root, {
      xAxis,
      yAxis,
      valueXField: "value",
      categoryYField: "category",
      stroke: am52.color(6317792),
      fill: am52.color(6317792),
      noRisers: true,
      stepWidth: am52.p50,
      tooltip: am52.Tooltip.new(root, {
        pointerOrientation: "left",
        labelText: "Estimated spend: {valueX}%",
        labelHTML: `<div class="tooltipam" style="font-size:12px;">Estimated: <strong>{valueX}%</strong></div>`
      })
    }));
    stepSeries.strokes.template.set("strokeWidth", 3);
    stepSeries.data.setAll([{ category: "Budget", value: estimated }]);
    let cursor = chart.set("cursor", am5xy2.XYCursor.new(root, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);
    cursor.lineX.set("visible", false);
    chart.appear(1e3, 100);
    series.appear();
    stepSeries.appear();
  }
  createChart() {
    let root = am52.Root.new("line-chart");
    root.setThemes([am5themes_Animated2.new(root)]);
    root.dateFormatter.setAll({
      dateFormat: "yyyy",
      dateFields: ["valueX"]
    });
    let data_1 = [{
      "date": "2012-07-27",
      "value": 13,
      "platform": "facebook"
    }, {
      "date": "2012-07-28",
      "value": 11,
      "platform": "facebook"
    }, {
      "date": "2012-07-29",
      "value": 15,
      "platform": "facebook"
    }, {
      "date": "2012-07-30",
      "value": 16,
      "platform": "facebook"
    }, {
      "date": "2012-07-31",
      "value": 18,
      "platform": "facebook"
    }, {
      "date": "2012-08-01",
      "value": 13,
      "platform": "facebook"
    }, {
      "date": "2012-08-02",
      "value": 22,
      "platform": "facebook"
    }, {
      "date": "2012-08-03",
      "value": 23,
      "platform": "facebook"
    }, {
      "date": "2012-08-04",
      "value": 20,
      "platform": "facebook"
    }, {
      "date": "2012-08-05",
      "value": 17,
      "platform": "facebook"
    }];
    let data_2 = [{
      "date": "2012-07-27",
      "value": 11,
      "platform": "dv360"
    }, {
      "date": "2012-07-28",
      "value": 25,
      "platform": "dv360"
    }, {
      "date": "2012-07-29",
      "value": 16,
      "platform": "dv360"
    }, {
      "date": "2012-07-30",
      "value": 8,
      "platform": "dv360"
    }, {
      "date": "2012-07-31",
      "value": 4,
      "platform": "dv360"
    }, {
      "date": "2012-08-01",
      "value": 9,
      "platform": "dv360"
    }, {
      "date": "2012-08-02",
      "value": 21,
      "platform": "dv360"
    }, {
      "date": "2012-08-03",
      "value": 26,
      "platform": "dv360"
    }, {
      "date": "2012-08-04",
      "value": 25,
      "platform": "dv360"
    }, {
      "date": "2012-08-05",
      "value": 13,
      "platform": "dv360"
    }];
    let data_3 = [{
      "date": "2012-07-27",
      "value": 3,
      "platform": "bing"
    }, {
      "date": "2012-07-28",
      "value": 22,
      "platform": "bing"
    }, {
      "date": "2012-07-29",
      "value": 13,
      "platform": "bing"
    }, {
      "date": "2012-07-30",
      "value": 8,
      "platform": "bing"
    }, {
      "date": "2012-07-31",
      "value": 6,
      "platform": "bing"
    }, {
      "date": "2012-08-01",
      "value": 12,
      "platform": "bing"
    }, {
      "date": "2012-08-02",
      "value": 32,
      "platform": "bing"
    }, {
      "date": "2012-08-03",
      "value": 21,
      "platform": "bing"
    }, {
      "date": "2012-08-04",
      "value": 20,
      "platform": "bing"
    }, {
      "date": "2012-08-05",
      "value": 14,
      "platform": "bing"
    }];
    let chart = root.container.children.push(am5xy2.XYChart.new(root, {
      focusable: true,
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true,
      paddingLeft: 0
    }));
    let easing = am52.ease.linear;
    let xRenderer = am5xy2.AxisRendererX.new(root, {
      minorGridEnabled: true,
      minGridDistance: 70
    });
    xRenderer.labels.template.setAll({
      fontSize: "10px"
    });
    let xAxis = chart.xAxes.push(am5xy2.DateAxis.new(root, {
      maxDeviation: 0.1,
      groupData: false,
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: xRenderer,
      tooltip: am52.Tooltip.new(root, {})
    }));
    let yAxis = chart.yAxes.push(am5xy2.ValueAxis.new(root, {
      maxDeviation: 0.2,
      renderer: am5xy2.AxisRendererY.new(root, {})
    }));
    this.createSeries(root, chart, data_1, xAxis, yAxis, 1603570);
    this.createSeries(root, chart, data_2, xAxis, yAxis, 1603570);
    this.createSeries(root, chart, data_3, xAxis, yAxis, 1603570);
    let cursor = chart.set("cursor", am5xy2.XYCursor.new(root, {
      xAxis,
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);
    chart.set("scrollbarX", am52.Scrollbar.new(root, {
      orientation: "horizontal"
    }));
    chart.appear(1e3, 100);
  }
};
_PacingTemplateComponent.\u0275fac = function PacingTemplateComponent_Factory(t) {
  return new (t || _PacingTemplateComponent)();
};
_PacingTemplateComponent.\u0275cmp = /* @__PURE__ */ i023.\u0275\u0275defineComponent({ type: _PacingTemplateComponent, selectors: [["app-pacing-template"]], standalone: true, features: [i023.\u0275\u0275StandaloneFeature], decls: 159, vars: 0, consts: [[1, "nav-path"], [1, "nav-item"], ["aria-hidden", "false", "aria-label", "Client", "fontIcon", "business_center", 1, "nav-icon"], [1, "nav-title"], ["aria-hidden", "false", "aria-label", "Client", "fontIcon", "keyboard_arrow_right", 1, "nav-separator"], [1, "content-wrapper"], [1, "content-section"], [1, "content-header"], ["aria-hidden", "false", "aria-label", "Pacing Process", "fontIcon", "check_circle", 1, "h2-icon"], ["id", "line-chart", 2, "width", "100%", "height", "320px"], [1, "pacing-box"], [1, "pacing-platform"], ["src", "../../../assets/icon_circle_facebook.png", 1, "platform-icon"], [1, "platform-title"], [1, "platform-title-total"], [1, "platform-details-btn"], ["aria-label", "Details"], [1, "details-chip"], [1, "pacing-campaigns"], [1, "pacing-campaign-date"], [1, "date-completion"], ["aria-hidden", "false", "aria-label", "Campaign Dates", "fontIcon", "calendar_today", 1, "date-icon"], [1, "date-title"], [1, "date-details"], [1, "pacing-bullet"], ["id", "pacing-bullet-chart", 2, "width", "100%", "height", "70px"], [1, "pacing-overall"], [1, "pacing-metric-title"], [1, "pacing-metric-value", "pacing-positive"], ["aria-hidden", "false", "aria-label", "up", "fontIcon", "arrow_drop_up", 1, "metric-icon"], [1, "pacing-metric-value", "pacing-negative"], ["aria-hidden", "false", "aria-label", "down", "fontIcon", "arrow_drop_down", 1, "metric-icon"], [1, "pacing-metric-value"], ["src", "../../../assets/icon_circle_google.png", 1, "platform-icon"], ["id", "pacing-bullet-google", 2, "width", "100%", "height", "70px"], ["src", "../../../assets/icon_circle_bing.png", 1, "platform-icon"], ["id", "pacing-bullet-bing", 2, "width", "100%", "height", "70px"], [2, "height", "300px"]], template: function PacingTemplateComponent_Template(rf, ctx) {
  if (rf & 1) {
    i023.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    i023.\u0275\u0275element(2, "mat-icon", 2);
    i023.\u0275\u0275elementStart(3, "div", 3);
    i023.\u0275\u0275text(4, "Metro");
    i023.\u0275\u0275elementEnd()();
    i023.\u0275\u0275element(5, "mat-icon", 4);
    i023.\u0275\u0275elementStart(6, "div", 1)(7, "div", 3);
    i023.\u0275\u0275text(8, "Food Basics");
    i023.\u0275\u0275elementEnd()();
    i023.\u0275\u0275element(9, "mat-icon", 4);
    i023.\u0275\u0275elementStart(10, "div", 1)(11, "div", 3);
    i023.\u0275\u0275text(12, "2024 Food Basics Always On");
    i023.\u0275\u0275elementEnd()()();
    i023.\u0275\u0275elementStart(13, "div", 5)(14, "div", 6)(15, "div", 7);
    i023.\u0275\u0275element(16, "mat-icon", 8);
    i023.\u0275\u0275elementStart(17, "h2")(18, "strong");
    i023.\u0275\u0275text(19, "Pacing Alert:");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275text(20, " 2024 Food Basics Always On");
    i023.\u0275\u0275elementEnd()();
    i023.\u0275\u0275element(21, "div", 9)(22, "mat-divider");
    i023.\u0275\u0275elementStart(23, "div", 10)(24, "div", 11);
    i023.\u0275\u0275element(25, "img", 12);
    i023.\u0275\u0275elementStart(26, "span", 13);
    i023.\u0275\u0275text(27, "Facebook Ads");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(28, "span", 14);
    i023.\u0275\u0275text(29, "Budget spent 19,500$ of 28,800$ total");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(30, "span", 15)(31, "mat-chip-listbox", 16)(32, "mat-chip-option", 17);
    i023.\u0275\u0275text(33, "Show details");
    i023.\u0275\u0275elementEnd()()()();
    i023.\u0275\u0275elementStart(34, "div", 18)(35, "div", 19)(36, "div", 20);
    i023.\u0275\u0275element(37, "mat-icon", 21);
    i023.\u0275\u0275text(38, " 68% Complete");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(39, "div", 22);
    i023.\u0275\u0275text(40, " Jan. 25 2024 to Jun. 14 2024 ");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(41, "div", 23);
    i023.\u0275\u0275text(42, "(3 months and 4 days)");
    i023.\u0275\u0275elementEnd()()();
    i023.\u0275\u0275elementStart(43, "div", 24);
    i023.\u0275\u0275element(44, "div", 25);
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(45, "div", 26)(46, "div", 27);
    i023.\u0275\u0275text(47, "Overall Pacing");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(48, "div", 28);
    i023.\u0275\u0275text(49, "8% ");
    i023.\u0275\u0275element(50, "mat-icon", 29);
    i023.\u0275\u0275elementEnd()();
    i023.\u0275\u0275elementStart(51, "div", 26)(52, "div", 27);
    i023.\u0275\u0275text(53, "Yesterday Pacing");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(54, "div", 30);
    i023.\u0275\u0275text(55, "78% ");
    i023.\u0275\u0275element(56, "mat-icon", 31);
    i023.\u0275\u0275elementEnd()();
    i023.\u0275\u0275elementStart(57, "div", 26)(58, "div", 27);
    i023.\u0275\u0275text(59, "Last 7 Days");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(60, "div", 28);
    i023.\u0275\u0275text(61, "12% ");
    i023.\u0275\u0275element(62, "mat-icon", 29);
    i023.\u0275\u0275elementEnd()();
    i023.\u0275\u0275elementStart(63, "div", 26)(64, "div", 27);
    i023.\u0275\u0275text(65, "Estimated Spend / Day");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(66, "div", 32);
    i023.\u0275\u0275text(67, "358$");
    i023.\u0275\u0275elementEnd()()();
    i023.\u0275\u0275elementStart(68, "div", 10)(69, "div", 11);
    i023.\u0275\u0275element(70, "img", 33);
    i023.\u0275\u0275elementStart(71, "span", 13);
    i023.\u0275\u0275text(72, "Display Video 360");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(73, "span", 14);
    i023.\u0275\u0275text(74, "Budget spent 22,870$ of 32,300$ total");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(75, "span", 15)(76, "mat-chip-listbox", 16)(77, "mat-chip-option", 17);
    i023.\u0275\u0275text(78, "Show details");
    i023.\u0275\u0275elementEnd()()()();
    i023.\u0275\u0275elementStart(79, "div", 18)(80, "div", 19)(81, "div", 20);
    i023.\u0275\u0275element(82, "mat-icon", 21);
    i023.\u0275\u0275text(83, " 71% Complete");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(84, "div", 22);
    i023.\u0275\u0275text(85, " Jan. 20 2024 to Jun. 19 2024 ");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(86, "div", 23);
    i023.\u0275\u0275text(87, "(3 months and 16 days)");
    i023.\u0275\u0275elementEnd()()();
    i023.\u0275\u0275elementStart(88, "div", 24);
    i023.\u0275\u0275element(89, "div", 34);
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(90, "div", 26)(91, "div", 27);
    i023.\u0275\u0275text(92, "Overall Pacing");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(93, "div", 28);
    i023.\u0275\u0275text(94, "12% ");
    i023.\u0275\u0275element(95, "mat-icon", 29);
    i023.\u0275\u0275elementEnd()();
    i023.\u0275\u0275elementStart(96, "div", 26)(97, "div", 27);
    i023.\u0275\u0275text(98, "Yesterday Pacing");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(99, "div", 30);
    i023.\u0275\u0275text(100, "8% ");
    i023.\u0275\u0275element(101, "mat-icon", 31);
    i023.\u0275\u0275elementEnd()();
    i023.\u0275\u0275elementStart(102, "div", 26)(103, "div", 27);
    i023.\u0275\u0275text(104, "Last 7 Days");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(105, "div", 30);
    i023.\u0275\u0275text(106, "5% ");
    i023.\u0275\u0275element(107, "mat-icon", 29);
    i023.\u0275\u0275elementEnd()();
    i023.\u0275\u0275elementStart(108, "div", 26)(109, "div", 27);
    i023.\u0275\u0275text(110, "Estimated Spend / Day");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(111, "div", 32);
    i023.\u0275\u0275text(112, "568$");
    i023.\u0275\u0275elementEnd()()();
    i023.\u0275\u0275elementStart(113, "div", 10)(114, "div", 11);
    i023.\u0275\u0275element(115, "img", 35);
    i023.\u0275\u0275elementStart(116, "span", 13);
    i023.\u0275\u0275text(117, "Microsoft Ads");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(118, "span", 14);
    i023.\u0275\u0275text(119, "Budget spent 15,200$ of 16,500$ total");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(120, "span", 15)(121, "mat-chip-listbox", 16)(122, "mat-chip-option", 17);
    i023.\u0275\u0275text(123, "Show details");
    i023.\u0275\u0275elementEnd()()()();
    i023.\u0275\u0275elementStart(124, "div", 18)(125, "div", 19)(126, "div", 20);
    i023.\u0275\u0275element(127, "mat-icon", 21);
    i023.\u0275\u0275text(128, " 82% Complete");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(129, "div", 22);
    i023.\u0275\u0275text(130, " Jan. 20 2024 to Jun. 19 2024 ");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(131, "div", 23);
    i023.\u0275\u0275text(132, "(3 months and 16 days)");
    i023.\u0275\u0275elementEnd()()();
    i023.\u0275\u0275elementStart(133, "div", 24);
    i023.\u0275\u0275element(134, "div", 36);
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(135, "div", 26)(136, "div", 27);
    i023.\u0275\u0275text(137, "Overall Pacing");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(138, "div", 28);
    i023.\u0275\u0275text(139, "10% ");
    i023.\u0275\u0275element(140, "mat-icon", 29);
    i023.\u0275\u0275elementEnd()();
    i023.\u0275\u0275elementStart(141, "div", 26)(142, "div", 27);
    i023.\u0275\u0275text(143, "Yesterday Pacing");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(144, "div", 28);
    i023.\u0275\u0275text(145, "51% ");
    i023.\u0275\u0275element(146, "mat-icon", 31);
    i023.\u0275\u0275elementEnd()();
    i023.\u0275\u0275elementStart(147, "div", 26)(148, "div", 27);
    i023.\u0275\u0275text(149, "Last 7 Days");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(150, "div", 28);
    i023.\u0275\u0275text(151, "23% ");
    i023.\u0275\u0275element(152, "mat-icon", 29);
    i023.\u0275\u0275elementEnd()();
    i023.\u0275\u0275elementStart(153, "div", 26)(154, "div", 27);
    i023.\u0275\u0275text(155, "Estimated Spend / Day");
    i023.\u0275\u0275elementEnd();
    i023.\u0275\u0275elementStart(156, "div", 32);
    i023.\u0275\u0275text(157, "156$");
    i023.\u0275\u0275elementEnd()()();
    i023.\u0275\u0275element(158, "div", 37);
    i023.\u0275\u0275elementEnd()();
  }
}, dependencies: [MatIconModule11, i138.MatIcon, MatDividerModule, i215.MatDivider, MatGridListModule, MatChipsModule6, i38.MatChipListbox, i38.MatChipOption], styles: ["\n\n.nav-path[_ngcontent-%COMP%] {\n  text-align: left;\n  margin: 0px 30px;\n  padding: 5px;\n}\n.nav-separator[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #737373;\n  font-size: 17px;\n  vertical-align: text-top;\n  width: 24px;\n  text-align: center;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #737373;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  vertical-align: middle;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n}\n.nav-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 200;\n  text-transform: capitalize;\n  margin: 0px;\n  vertical-align: middle;\n  display: inline-block;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  margin: 20px 30px;\n}\n.content-section[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.content-header[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  padding: 15px;\n  font-weight: normal;\n  border-radius: 25px;\n  background-color: #f6f6f6;\n}\n.content-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline;\n  font-size: 14px;\n  font-weight: normal;\n}\n.h2-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  vertical-align: bottom;\n  color: #654A93;\n}\n.tooltipam[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n  margin-top: 50px;\n}\n.pacing-grid[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.pacing-bullet[_ngcontent-%COMP%], .pacing-campaigns[_ngcontent-%COMP%], .pacing-budget[_ngcontent-%COMP%], .pacing-overall[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n}\n.pacing-campaign-date[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: center;\n}\n.date-title[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #757780;\n}\n.date-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.date-details[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #757780;\n}\n.date-completion[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.pacing-overall[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n}\n.pacing-metric-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #757780;\n  border-bottom: 1px dotted #eaeaea;\n  margin-bottom: 3px;\n}\n.pacing-metric-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.pacing-campaigns[_ngcontent-%COMP%] {\n  width: 15%;\n}\n.pacing-bullet[_ngcontent-%COMP%] {\n  width: 35%;\n  padding: 10px;\n}\n.pacing-budget[_ngcontent-%COMP%] {\n  width: 8%;\n}\n.pacing-overall[_ngcontent-%COMP%] {\n  width: 9%;\n}\n.metric-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 25px;\n  height: 25px;\n  font-size: 22px;\n}\n.pacing-positive[_ngcontent-%COMP%] {\n  color: #42AD5D;\n}\n.pacing-negative[_ngcontent-%COMP%] {\n  color: #DB5A60;\n}\n.pacing-platform[_ngcontent-%COMP%] {\n  background-color: #f6f6f6;\n  padding: 15px;\n}\n.platform-icon[_ngcontent-%COMP%] {\n  height: 12px;\n  vertical-align: middle;\n}\n.platform-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B6B6B;\n  margin-left: 3px;\n  font-weight: 500;\n  display: inline-block;\n}\n.platform-title-total[_ngcontent-%COMP%] {\n  font-size: 11px;\n  display: inline-block;\n  margin-left: 8px;\n  color: #757780;\n}\n.pacing-box[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  border-bottom: 1px dotted #eaeaea;\n}\n.platform-details-btn[_ngcontent-%COMP%] {\n  float: right;\n}\n.details-chip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  --mdc-chip-label-text-size: 11px;\n  --mdc-chip-container-height: 19px;\n}\n/*# sourceMappingURL=pacing-template.component.css.map */"] });
var PacingTemplateComponent = _PacingTemplateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i023.\u0275setClassDebugInfo(PacingTemplateComponent, { className: "PacingTemplateComponent" });
})();

// src/app/components/accounts/accounts.component.ts
import { Component as Component18, inject as inject17 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule15 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { documentId } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_firestore.js?v=478e822e";

// src/app/components/form/account/account.component.ts
import { Component as Component16, Inject as Inject8, inject as inject15 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule13 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { Validators as Validators11, FormsModule as FormsModule7, ReactiveFormsModule as ReactiveFormsModule12 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import { MatInputModule as MatInputModule12 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import { MatSelectModule as MatSelectModule8 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import { MAT_DIALOG_DATA as MAT_DIALOG_DATA8 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import { MatButtonModule as MatButtonModule9 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import { getAuth as getAuth15 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_auth.js?v=478e822e";
import { arrayUnion } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@firebase_firestore.js?v=478e822e";
import { ToastrService as ToastrService15 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import { switchMap as switchMap5, catchError as catchError3, tap as tap2, first as first4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs_operators.js?v=478e822e";
import { of as of10 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import * as i024 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i139 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import * as i216 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import * as i39 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
import * as i49 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i58 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import * as i611 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import * as i711 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import * as i811 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_core.js?v=478e822e";
import * as i910 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
function AccountComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    i024.\u0275\u0275elementStart(0, "mat-error");
    i024.\u0275\u0275text(1, " Name is required. ");
    i024.\u0275\u0275elementEnd();
  }
}
function AccountComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i024.\u0275\u0275getCurrentView();
    i024.\u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    i024.\u0275\u0275listener("click", function AccountComponent_div_30_Template_button_click_1_listener() {
      i024.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i024.\u0275\u0275nextContext();
      return i024.\u0275\u0275resetView(ctx_r1.saveAccount());
    });
    i024.\u0275\u0275text(2);
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275text(3, " \xA0 ");
    i024.\u0275\u0275elementStart(4, "button", 16);
    i024.\u0275\u0275listener("click", function AccountComponent_div_30_Template_button_click_4_listener() {
      i024.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i024.\u0275\u0275nextContext();
      return i024.\u0275\u0275resetView(ctx_r1.onCancel());
    });
    i024.\u0275\u0275text(5, "Cancel");
    i024.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i024.\u0275\u0275nextContext();
    i024.\u0275\u0275advance(2);
    i024.\u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Edit" : "Save");
  }
}
var _AccountComponent = class _AccountComponent {
  constructor(dialogRef, formBuilder, data, db) {
    this.dialogRef = dialogRef;
    this.formBuilder = formBuilder;
    this.data = data;
    this.db = db;
    this.isEditMode = false;
    this.documentId = null;
    this.toaster = inject15(ToastrService15);
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.originalData = data;
      this.documentId = data.id;
    }
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.createForm();
    });
  }
  createForm() {
    return __async(this, null, function* () {
      this.formGroup = this.formBuilder.group({
        name: [this.data?.name || null, [Validators11.required]],
        description: [this.data?.description || null],
        website: [this.data?.website || null],
        industry: [this.data?.industry || null]
      });
      if (!this.data.isAdmin) {
        this.formGroup.disable();
      }
    });
  }
  saveAccount() {
    const user = getAuth15().currentUser;
    if (!user) {
      this.toaster.error("User not authenticated", "Error");
      return;
    }
    return this.db.collection("user").doc(user.uid).valueChanges().pipe(first4(), tap2((userData) => {
      if (!userData) {
        console.log("No user data found.");
      }
    }), switchMap5((userData) => {
      const selectedBusinessId = userData?.selectedBusiness;
      if (!selectedBusinessId) {
        this.toaster.error("No selected business ID available", "Error");
        return of10(null);
      }
      if (this.isEditMode && this.documentId) {
        return this.db.collection("account").doc(this.documentId).update(this.formGroup.value).then(() => {
          this.dialogRef.close();
          return of10(null);
        });
      } else {
        const newAccountData = __spreadProps(__spreadValues({}, this.formGroup.value), {
          businessId: selectedBusinessId
        });
        return this.db.collection("account").add(newAccountData).then((docRef) => {
          return this.updateBusinessAccount(selectedBusinessId, docRef.id).then(() => {
            this.dialogRef.close();
            return of10(null);
          });
        });
      }
    }), catchError3((error) => {
      this.toaster.error("Failed to process account data", "Error");
      console.error("Error saving account:", error);
      return of10(null);
    })).subscribe();
  }
  updateBusinessAccount(businessId, accountId) {
    return __async(this, null, function* () {
      return this.db.collection("business").doc(businessId).update({
        accounts: arrayUnion(accountId)
      }).then(() => {
        return of10(null);
      }).catch((error) => {
        this.toaster.error("Failed to link business account", "Error");
        console.error("Error linking business account:", error);
        return of10(null);
      });
    });
  }
  onCancel() {
    this.dialogRef.close();
  }
};
_AccountComponent.\u0275fac = function AccountComponent_Factory(t) {
  return new (t || _AccountComponent)(i024.\u0275\u0275directiveInject(i139.MatDialogRef), i024.\u0275\u0275directiveInject(i216.FormBuilder), i024.\u0275\u0275directiveInject(MAT_DIALOG_DATA8), i024.\u0275\u0275directiveInject(i39.AngularFirestore));
};
_AccountComponent.\u0275cmp = /* @__PURE__ */ i024.\u0275\u0275defineComponent({ type: _AccountComponent, selectors: [["app-account"]], standalone: true, features: [i024.\u0275\u0275StandaloneFeature], decls: 31, vars: 4, consts: [[1, "form", 3, "formGroup"], [1, "form-row"], ["appearance", "outline", 1, "form-element"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], ["matInput", "", "formControlName", "website"], [1, "form-element"], ["formControlName", "industry"], ["value", "dv360"], ["value", "facebook"], ["value", "googleAds"], ["value", "bing"], ["matInput", "", "formControlName", "description"], ["class", "form-element footer", 4, "ngIf"], [1, "form-element", "footer"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "button", "form-button", 3, "click"], ["mat-raised-button", "", 1, "button", 3, "click"]], template: function AccountComponent_Template(rf, ctx) {
  if (rf & 1) {
    i024.\u0275\u0275elementStart(0, "form", 0)(1, "h1");
    i024.\u0275\u0275text(2);
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275elementStart(3, "div", 1)(4, "mat-form-field", 2)(5, "mat-label");
    i024.\u0275\u0275text(6, "Name");
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275element(7, "input", 3);
    i024.\u0275\u0275template(8, AccountComponent_mat_error_8_Template, 2, 0, "mat-error", 4);
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275elementStart(9, "mat-form-field", 2)(10, "mat-label");
    i024.\u0275\u0275text(11, "Website");
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275element(12, "input", 5);
    i024.\u0275\u0275elementEnd()();
    i024.\u0275\u0275elementStart(13, "div", 1)(14, "mat-form-field", 6)(15, "mat-label");
    i024.\u0275\u0275text(16, "Industry");
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275elementStart(17, "mat-select", 7)(18, "mat-option", 8);
    i024.\u0275\u0275text(19, "Display & Video 360");
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275elementStart(20, "mat-option", 9);
    i024.\u0275\u0275text(21, "Facebook");
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275elementStart(22, "mat-option", 10);
    i024.\u0275\u0275text(23, "Google Ads");
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275elementStart(24, "mat-option", 11);
    i024.\u0275\u0275text(25, "Bing");
    i024.\u0275\u0275elementEnd()()();
    i024.\u0275\u0275elementStart(26, "mat-form-field", 2)(27, "mat-label");
    i024.\u0275\u0275text(28, "Description");
    i024.\u0275\u0275elementEnd();
    i024.\u0275\u0275element(29, "textarea", 12);
    i024.\u0275\u0275elementEnd()();
    i024.\u0275\u0275template(30, AccountComponent_div_30_Template, 6, 1, "div", 13);
    i024.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    i024.\u0275\u0275property("formGroup", ctx.formGroup);
    i024.\u0275\u0275advance(2);
    i024.\u0275\u0275textInterpolate(ctx.isEditMode ? "Edit " + ctx.originalData.name : "Create account");
    i024.\u0275\u0275advance(6);
    i024.\u0275\u0275property("ngIf", (tmp_2_0 = ctx.formGroup.get("name")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    i024.\u0275\u0275advance(22);
    i024.\u0275\u0275property("ngIf", ctx.data.isAdmin);
  }
}, dependencies: [
  CommonModule13,
  i49.NgIf,
  ReactiveFormsModule12,
  i216.\u0275NgNoValidate,
  i216.DefaultValueAccessor,
  i216.NgControlStatus,
  i216.NgControlStatusGroup,
  i216.FormGroupDirective,
  i216.FormControlName,
  FormsModule7,
  MatInputModule12,
  i58.MatInput,
  i611.MatFormField,
  i611.MatLabel,
  i611.MatError,
  MatSelectModule8,
  i711.MatSelect,
  i811.MatOption,
  MatButtonModule9,
  i910.MatButton
], styles: ["\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 3%;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n}\n.form-element[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.button[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5%;\n}\n/*# sourceMappingURL=account.component.css.map */"] });
var AccountComponent = _AccountComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i024.\u0275setClassDebugInfo(AccountComponent, { className: "AccountComponent" });
})();

// src/app/components/form/business/business.component.ts
import { Component as Component17, Inject as Inject9, inject as inject16 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule14 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { Validators as Validators12, FormsModule as FormsModule8, ReactiveFormsModule as ReactiveFormsModule13 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import { HttpClientModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common_http.js?v=478e822e";
import { arrayUnion as arrayUnion2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_firestore.js?v=478e822e";
import { getAuth as getAuth16 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_auth.js?v=478e822e";
import { MatInputModule as MatInputModule13 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import { MatSelectModule as MatSelectModule9 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import { MAT_DIALOG_DATA as MAT_DIALOG_DATA9 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import { MatButtonModule as MatButtonModule10 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import { MatAutocompleteModule as MatAutocompleteModule7 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_autocomplete.js?v=478e822e";
import { ToastrService as ToastrService16 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import { of as of11, BehaviorSubject as BehaviorSubject5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import { map as map4, startWith as startWith3, switchMap as switchMap6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs_operators.js?v=478e822e";
import * as i025 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i140 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common_http.js?v=478e822e";
import * as i217 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import * as i310 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import * as i410 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
import * as i59 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i612 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import * as i712 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import * as i812 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_core.js?v=478e822e";
import * as i911 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import * as i107 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_autocomplete.js?v=478e822e";
function BusinessComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    i025.\u0275\u0275elementStart(0, "mat-error");
    i025.\u0275\u0275text(1, " Name is required. ");
    i025.\u0275\u0275elementEnd();
  }
}
function BusinessComponent_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    i025.\u0275\u0275elementStart(0, "mat-option", 12)(1, "span");
    i025.\u0275\u0275text(2);
    i025.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r1 = ctx.$implicit;
    i025.\u0275\u0275property("value", country_r1);
    i025.\u0275\u0275advance(2);
    i025.\u0275\u0275textInterpolate(country_r1.name);
  }
}
function BusinessComponent_div_24_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i025.\u0275\u0275getCurrentView();
    i025.\u0275\u0275elementStart(0, "button", 16);
    i025.\u0275\u0275listener("click", function BusinessComponent_div_24_button_4_Template_button_click_0_listener() {
      i025.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i025.\u0275\u0275nextContext(2);
      return i025.\u0275\u0275resetView(ctx_r2.onCancel());
    });
    i025.\u0275\u0275text(1, "Cancel");
    i025.\u0275\u0275elementEnd();
  }
}
function BusinessComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = i025.\u0275\u0275getCurrentView();
    i025.\u0275\u0275elementStart(0, "div", 13)(1, "button", 14);
    i025.\u0275\u0275listener("click", function BusinessComponent_div_24_Template_button_click_1_listener() {
      i025.\u0275\u0275restoreView(_r2);
      const ctx_r2 = i025.\u0275\u0275nextContext();
      return i025.\u0275\u0275resetView(ctx_r2.saveBusiness());
    });
    i025.\u0275\u0275text(2);
    i025.\u0275\u0275elementEnd();
    i025.\u0275\u0275text(3, " \xA0 ");
    i025.\u0275\u0275template(4, BusinessComponent_div_24_button_4_Template, 2, 0, "button", 15);
    i025.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = i025.\u0275\u0275nextContext();
    i025.\u0275\u0275advance(2);
    i025.\u0275\u0275textInterpolate(ctx_r2.isEditMode ? "Edit" : "Save");
    i025.\u0275\u0275advance(2);
    i025.\u0275\u0275property("ngIf", !ctx_r2.disableCancel);
  }
}
var _BusinessComponent = class _BusinessComponent {
  constructor(http, dialogRef, formBuilder, data, db) {
    this.http = http;
    this.dialogRef = dialogRef;
    this.formBuilder = formBuilder;
    this.data = data;
    this.db = db;
    this.isEditMode = false;
    this.documentId = null;
    this.toaster = inject16(ToastrService16);
    this.disableCancel = false;
    this.countries = [];
    this.countriesSubject = new BehaviorSubject5([]);
    this.countries$ = this.countriesSubject.asObservable();
    this.isEditMode = !!data && data.id;
    if (data && data.disableCancel) {
      this.disableCancel = data.disableCancel;
    }
    if (this.isEditMode) {
      this.originalData = data;
      this.documentId = data.id;
    }
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.createForm();
      yield this.getCountries();
    });
  }
  setupFiltering() {
    return this.formGroup.get("country").valueChanges.pipe(startWith3(""), map4((value) => typeof value === "string" ? value.toLowerCase() : ""), switchMap6((name) => this.filterElement(name)));
  }
  filterElement(filterValue) {
    return this.originalCountries$.pipe(map4((elements) => elements.filter((element) => element["name"].toLowerCase().includes(filterValue))));
  }
  getCountries() {
    return __async(this, null, function* () {
      return this.http.get("https://restcountries.com/v3.1/all?fields=name").subscribe((data) => {
        this.countries = data.map((country) => ({ name: country.name.common }));
        this.countries.sort((a, b) => a.name.localeCompare(b.name));
        this.countries$ = this.setupFiltering();
        this.originalCountries$ = of11(this.countries);
      }, (error) => {
        console.error("Error fetching countries:", error);
      });
    });
  }
  createForm() {
    return __async(this, null, function* () {
      this.formGroup = this.formBuilder.group({
        name: [this.data?.name || null, [Validators12.required]],
        description: [this.data?.description || null],
        website: [this.data?.website || null],
        country: [this.data?.country || ""]
      });
      if (!this.data.isAdmin) {
        this.formGroup.disable();
      }
    });
  }
  displayFn(country) {
    return country && country.name ? country.name : "";
  }
  saveBusiness() {
    return __async(this, null, function* () {
      if (this.isEditMode && this.documentId) {
        yield this.db.collection("business").doc(this.documentId).update(this.formGroup.value);
        this.toaster.success("Business updated successfully", "Success");
      } else {
        const auth = getAuth16();
        const user = auth.currentUser;
        if (!user) {
          return;
        }
        const docRef = yield this.db.collection("business").add(this.formGroup.value);
        const userRolesRef = this.db.collection("userRoles").ref.where("userId", "==", user.uid);
        const snapshot = yield userRolesRef.get();
        if (!snapshot.empty) {
          const doc5 = snapshot.docs[0];
          yield this.db.collection("userRoles").doc(doc5.id).update({
            businessRoles: arrayUnion2({
              businessId: docRef.id,
              role: "ADMIN"
            })
          });
        } else {
          yield this.db.collection("userRoles").add({
            userId: user.uid,
            businessRoles: [{
              businessId: docRef.id,
              role: "ADMIN"
            }]
          });
        }
        yield this.db.collection("user").doc(user.uid).update({
          selectedBusiness: docRef.id
        });
        this.toaster.success("Business created successfully", "Success");
      }
      this.dialogRef.close();
    });
  }
  onCancel() {
    this.dialogRef.close();
  }
};
_BusinessComponent.\u0275fac = function BusinessComponent_Factory(t) {
  return new (t || _BusinessComponent)(i025.\u0275\u0275directiveInject(i140.HttpClient), i025.\u0275\u0275directiveInject(i217.MatDialogRef), i025.\u0275\u0275directiveInject(i310.FormBuilder), i025.\u0275\u0275directiveInject(MAT_DIALOG_DATA9), i025.\u0275\u0275directiveInject(i410.AngularFirestore));
};
_BusinessComponent.\u0275cmp = /* @__PURE__ */ i025.\u0275\u0275defineComponent({ type: _BusinessComponent, selectors: [["app-business"]], standalone: true, features: [i025.\u0275\u0275StandaloneFeature], decls: 25, vars: 9, consts: [["auto", "matAutocomplete"], [1, "form", 3, "formGroup"], [1, "form-row"], ["appearance", "outline", 1, "form-element"], ["matInput", "", "formControlName", "name"], [4, "ngIf"], ["matInput", "", "formControlName", "website"], ["type", "text", "placeholder", "Select your country", "formControlName", "country", "aria-label", "country", "matInput", "", 3, "matAutocomplete"], [3, "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "description"], ["class", "form-element footer", 4, "ngIf"], [3, "value"], [1, "form-element", "footer"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "button", "form-button", 3, "click"], ["mat-raised-button", "", "class", "button", 3, "click", 4, "ngIf"], ["mat-raised-button", "", 1, "button", 3, "click"]], template: function BusinessComponent_Template(rf, ctx) {
  if (rf & 1) {
    i025.\u0275\u0275elementStart(0, "form", 1)(1, "h1");
    i025.\u0275\u0275text(2);
    i025.\u0275\u0275elementEnd();
    i025.\u0275\u0275elementStart(3, "div", 2)(4, "mat-form-field", 3)(5, "mat-label");
    i025.\u0275\u0275text(6, "Name");
    i025.\u0275\u0275elementEnd();
    i025.\u0275\u0275element(7, "input", 4);
    i025.\u0275\u0275template(8, BusinessComponent_mat_error_8_Template, 2, 0, "mat-error", 5);
    i025.\u0275\u0275elementEnd();
    i025.\u0275\u0275elementStart(9, "mat-form-field", 3)(10, "mat-label");
    i025.\u0275\u0275text(11, "Website");
    i025.\u0275\u0275elementEnd();
    i025.\u0275\u0275element(12, "input", 6);
    i025.\u0275\u0275elementEnd()();
    i025.\u0275\u0275elementStart(13, "div", 2)(14, "mat-form-field", 3);
    i025.\u0275\u0275element(15, "input", 7);
    i025.\u0275\u0275elementStart(16, "mat-autocomplete", 8, 0);
    i025.\u0275\u0275template(18, BusinessComponent_mat_option_18_Template, 3, 2, "mat-option", 9);
    i025.\u0275\u0275pipe(19, "async");
    i025.\u0275\u0275elementEnd()();
    i025.\u0275\u0275elementStart(20, "mat-form-field", 3)(21, "mat-label");
    i025.\u0275\u0275text(22, "Description");
    i025.\u0275\u0275elementEnd();
    i025.\u0275\u0275element(23, "textarea", 10);
    i025.\u0275\u0275elementEnd()();
    i025.\u0275\u0275template(24, BusinessComponent_div_24_Template, 5, 2, "div", 11);
    i025.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const auto_r5 = i025.\u0275\u0275reference(17);
    i025.\u0275\u0275property("formGroup", ctx.formGroup);
    i025.\u0275\u0275advance(2);
    i025.\u0275\u0275textInterpolate(ctx.isEditMode ? "Edit " + ctx.originalData.name : "Create business");
    i025.\u0275\u0275advance(6);
    i025.\u0275\u0275property("ngIf", (tmp_3_0 = ctx.formGroup.get("name")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    i025.\u0275\u0275advance(7);
    i025.\u0275\u0275property("matAutocomplete", auto_r5);
    i025.\u0275\u0275advance();
    i025.\u0275\u0275property("displayWith", ctx.displayFn);
    i025.\u0275\u0275advance(2);
    i025.\u0275\u0275property("ngForOf", i025.\u0275\u0275pipeBind1(19, 7, ctx.countries$));
    i025.\u0275\u0275advance(6);
    i025.\u0275\u0275property("ngIf", ctx.data.isAdmin);
  }
}, dependencies: [
  HttpClientModule,
  CommonModule14,
  i59.NgForOf,
  i59.NgIf,
  i59.AsyncPipe,
  ReactiveFormsModule13,
  i310.\u0275NgNoValidate,
  i310.DefaultValueAccessor,
  i310.NgControlStatus,
  i310.NgControlStatusGroup,
  i310.FormGroupDirective,
  i310.FormControlName,
  FormsModule8,
  MatInputModule13,
  i612.MatInput,
  i712.MatFormField,
  i712.MatLabel,
  i712.MatError,
  MatSelectModule9,
  i812.MatOption,
  MatButtonModule10,
  i911.MatButton,
  MatAutocompleteModule7,
  i107.MatAutocomplete,
  i107.MatAutocompleteTrigger
], styles: ["\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 3%;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n}\n.form-element[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.button[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5%;\n}\n/*# sourceMappingURL=business.component.css.map */"] });
var BusinessComponent = _BusinessComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i025.\u0275setClassDebugInfo(BusinessComponent, { className: "BusinessComponent" });
})();

// src/app/components/accounts/accounts.component.ts
import { MatButtonModule as MatButtonModule11 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import { MatIconModule as MatIconModule12 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import { MatCardModule as MatCardModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_card.js?v=478e822e";
import { switchMap as switchMap7, catchError as catchError4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs_operators.js?v=478e822e";
import { of as of12, tap as tap3, take as take3, map as map5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import { ToastrService as ToastrService17 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import * as i026 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i141 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import * as i311 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
import * as i411 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_router.js?v=478e822e";
import * as i510 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i613 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import * as i713 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import * as i813 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_card.js?v=478e822e";
function AccountsComponent_mat_card_5_span_15_Template(rf, ctx) {
  if (rf & 1) {
    i026.\u0275\u0275elementStart(0, "span");
    i026.\u0275\u0275text(1);
    i026.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r2 = i026.\u0275\u0275nextContext().$implicit;
    i026.\u0275\u0275advance();
    i026.\u0275\u0275textInterpolate1(" ", account_r2.alerts.total, " ");
  }
}
function AccountsComponent_mat_card_5_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    i026.\u0275\u0275text(0, "0");
  }
}
function AccountsComponent_mat_card_5_span_21_Template(rf, ctx) {
  if (rf & 1) {
    i026.\u0275\u0275elementStart(0, "span");
    i026.\u0275\u0275text(1);
    i026.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r2 = i026.\u0275\u0275nextContext().$implicit;
    i026.\u0275\u0275advance();
    i026.\u0275\u0275textInterpolate1(" ", account_r2.alerts.ok, " ");
  }
}
function AccountsComponent_mat_card_5_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    i026.\u0275\u0275text(0, "0");
  }
}
function AccountsComponent_mat_card_5_span_27_Template(rf, ctx) {
  if (rf & 1) {
    i026.\u0275\u0275elementStart(0, "span");
    i026.\u0275\u0275text(1);
    i026.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r2 = i026.\u0275\u0275nextContext().$implicit;
    i026.\u0275\u0275advance();
    i026.\u0275\u0275textInterpolate1(" ", account_r2.alerts.warning, " ");
  }
}
function AccountsComponent_mat_card_5_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    i026.\u0275\u0275text(0, "0");
  }
}
function AccountsComponent_mat_card_5_span_33_Template(rf, ctx) {
  if (rf & 1) {
    i026.\u0275\u0275elementStart(0, "span");
    i026.\u0275\u0275text(1);
    i026.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r2 = i026.\u0275\u0275nextContext().$implicit;
    i026.\u0275\u0275advance();
    i026.\u0275\u0275textInterpolate1(" ", account_r2.alerts.error, " ");
  }
}
function AccountsComponent_mat_card_5_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    i026.\u0275\u0275text(0, "0");
  }
}
function AccountsComponent_mat_card_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i026.\u0275\u0275getCurrentView();
    i026.\u0275\u0275elementStart(0, "mat-card")(1, "mat-card-content")(2, "div", 7)(3, "div", 8)(4, "span", 9);
    i026.\u0275\u0275listener("click", function AccountsComponent_mat_card_5_Template_span_click_4_listener() {
      const account_r2 = i026.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i026.\u0275\u0275nextContext();
      return i026.\u0275\u0275resetView(ctx_r2.selectAccount(account_r2));
    });
    i026.\u0275\u0275text(5);
    i026.\u0275\u0275elementEnd();
    i026.\u0275\u0275elementStart(6, "div")(7, "button", 10);
    i026.\u0275\u0275listener("click", function AccountsComponent_mat_card_5_Template_button_click_7_listener() {
      const account_r2 = i026.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i026.\u0275\u0275nextContext();
      return i026.\u0275\u0275resetView(ctx_r2.addUsers(account_r2.id));
    });
    i026.\u0275\u0275elementStart(8, "mat-icon");
    i026.\u0275\u0275text(9, "add");
    i026.\u0275\u0275elementEnd();
    i026.\u0275\u0275text(10, "Users ");
    i026.\u0275\u0275elementEnd();
    i026.\u0275\u0275elementStart(11, "button", 11);
    i026.\u0275\u0275listener("click", function AccountsComponent_mat_card_5_Template_button_click_11_listener() {
      const account_r2 = i026.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i026.\u0275\u0275nextContext();
      return i026.\u0275\u0275resetView(ctx_r2.deleteAccount(account_r2));
    });
    i026.\u0275\u0275text(12, " Delete ");
    i026.\u0275\u0275elementEnd()()();
    i026.\u0275\u0275elementStart(13, "div", 12)(14, "div", 13);
    i026.\u0275\u0275template(15, AccountsComponent_mat_card_5_span_15_Template, 2, 1, "span", 14)(16, AccountsComponent_mat_card_5_ng_template_16_Template, 1, 0, "ng-template", null, 0, i026.\u0275\u0275templateRefExtractor);
    i026.\u0275\u0275elementStart(18, "mat-icon", 15);
    i026.\u0275\u0275text(19, "priority_high");
    i026.\u0275\u0275elementEnd()();
    i026.\u0275\u0275elementStart(20, "div", 13);
    i026.\u0275\u0275template(21, AccountsComponent_mat_card_5_span_21_Template, 2, 1, "span", 14)(22, AccountsComponent_mat_card_5_ng_template_22_Template, 1, 0, "ng-template", null, 1, i026.\u0275\u0275templateRefExtractor);
    i026.\u0275\u0275elementStart(24, "mat-icon", 16);
    i026.\u0275\u0275text(25, "check_circle_outline");
    i026.\u0275\u0275elementEnd()();
    i026.\u0275\u0275elementStart(26, "div", 13);
    i026.\u0275\u0275template(27, AccountsComponent_mat_card_5_span_27_Template, 2, 1, "span", 14)(28, AccountsComponent_mat_card_5_ng_template_28_Template, 1, 0, "ng-template", null, 2, i026.\u0275\u0275templateRefExtractor);
    i026.\u0275\u0275elementStart(30, "mat-icon", 17);
    i026.\u0275\u0275text(31, "warning_amber");
    i026.\u0275\u0275elementEnd()();
    i026.\u0275\u0275elementStart(32, "div", 13);
    i026.\u0275\u0275template(33, AccountsComponent_mat_card_5_span_33_Template, 2, 1, "span", 14)(34, AccountsComponent_mat_card_5_ng_template_34_Template, 1, 0, "ng-template", null, 3, i026.\u0275\u0275templateRefExtractor);
    i026.\u0275\u0275elementStart(36, "mat-icon", 18);
    i026.\u0275\u0275text(37, "close");
    i026.\u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const account_r2 = ctx.$implicit;
    const noTotal_r4 = i026.\u0275\u0275reference(17);
    const noOk_r5 = i026.\u0275\u0275reference(23);
    const noWarning_r6 = i026.\u0275\u0275reference(29);
    const noError_r7 = i026.\u0275\u0275reference(35);
    i026.\u0275\u0275advance(5);
    i026.\u0275\u0275textInterpolate1(" ", account_r2.name, " ");
    i026.\u0275\u0275advance(10);
    i026.\u0275\u0275property("ngIf", account_r2.alerts && account_r2.alerts.total)("ngIfElse", noTotal_r4);
    i026.\u0275\u0275advance(6);
    i026.\u0275\u0275property("ngIf", account_r2.alerts && account_r2.alerts.ok)("ngIfElse", noOk_r5);
    i026.\u0275\u0275advance(6);
    i026.\u0275\u0275property("ngIf", account_r2.alerts && account_r2.alerts.warning)("ngIfElse", noWarning_r6);
    i026.\u0275\u0275advance(6);
    i026.\u0275\u0275property("ngIf", account_r2.alerts && account_r2.alerts.error)("ngIfElse", noError_r7);
  }
}
var _AccountsComponent = class _AccountsComponent {
  constructor(matDialog, authService, afs, router) {
    this.matDialog = matDialog;
    this.authService = authService;
    this.afs = afs;
    this.router = router;
    this.toaster = inject17(ToastrService17);
    this.accounts = [];
    this.isDialogOpen = false;
  }
  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.getAccounts(user.uid);
        this.checkRolesAndOpenDialog(user.uid);
      }
    });
  }
  addUsers(accountId) {
  }
  deleteAccount(account) {
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      width: "20%",
      data: { message: "Are you sure to delete " + account.name + "?" }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.authService.user$.subscribe((user) => {
          if (user) {
            this.afs.doc(`account/${account.id}`).delete().then(() => {
              this.getAccounts(user.uid);
            }).catch((error) => {
              this.toaster.error("Failed to delete account");
              console.error("Error deleting account:", error);
            });
          }
        });
      }
    });
  }
  getAccounts(userId) {
    this.afs.doc(`user/${userId}`).valueChanges().pipe(switchMap7((user) => {
      if (!user || !user.selectedBusiness) {
        console.error("No selected business available");
        return of12([]);
      }
      const selectedBusinessId = user.selectedBusiness;
      return this.afs.collection("userRoles", (ref) => ref.where("userId", "==", userId)).valueChanges().pipe(switchMap7((userRoles) => {
        if (!userRoles.length)
          return of12([]);
        const hasRoleOnSelectedBusiness = userRoles.some((role) => role.businessRoles?.some((br) => br.businessId === selectedBusinessId));
        if (hasRoleOnSelectedBusiness) {
          return this.afs.collection("account", (ref) => ref.where("businessId", "==", selectedBusinessId)).snapshotChanges().pipe(map5((changes) => changes.map((a) => __spreadValues({ id: a.payload.doc.id }, a.payload.doc.data()))));
        } else {
          const accountIds = userRoles.flatMap((ur) => ur.accountRoles ? ur.accountRoles.map((ar) => ar.accountId) : []);
          return this.afs.collection("account", (ref) => ref.where("businessId", "==", selectedBusinessId).where(documentId(), "in", accountIds)).snapshotChanges().pipe(map5((changes) => changes.map((a) => __spreadValues({ id: a.payload.doc.id }, a.payload.doc.data()))));
        }
      }), catchError4((error) => {
        console.error("Failed to fetch accounts for user roles:", error);
        return of12([]);
      }));
    }), catchError4((error) => {
      console.error("Error fetching user data:", error);
      return of12([]);
    })).subscribe((accounts) => __async(this, null, function* () {
      this.accounts = accounts;
      this.accounts = this.accounts.sort((a, b) => a.name.localeCompare(b.name));
      yield this.getAlerts();
    }));
  }
  getAlerts() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.accounts.forEach((account) => {
          this.afs.collection("userSearch", (ref) => ref.where("accountId", "==", account.id)).get().subscribe((querySnapshot) => {
            let okCount = 0;
            let warningCount = 0;
            let errorCount = 0;
            querySnapshot.docs.forEach((doc5) => {
              const data = doc5.data();
              data.platforms.forEach((platform) => {
                const overallDelta = platform.pacingAlerts[platform.platform + "_overall_delta_value"];
                if (overallDelta > -5 && overallDelta < 5) {
                  okCount++;
                }
                if ((overallDelta <= -5 || overallDelta >= 5) && overallDelta > -10 && overallDelta < 10) {
                  warningCount++;
                }
                if (overallDelta <= -10 || overallDelta >= 10) {
                  errorCount++;
                }
              });
            });
            account.alerts = {
              total: okCount + warningCount + errorCount,
              ok: okCount,
              warning: warningCount,
              error: errorCount
            };
            resolve();
          }, (error) => {
            reject(error);
          });
        });
      });
    });
  }
  createAccount() {
    this.matDialog.open(AccountComponent, {
      width: "70%",
      height: "90vh"
    });
  }
  checkRolesAndOpenDialog(userId) {
    if (this.isDialogOpen) {
      return;
    }
    this.isDialogOpen = true;
    this.afs.collection("userRoles", (ref) => ref.where("userId", "==", userId)).get().pipe(take3(1)).subscribe((result) => {
      if (result.empty) {
        this.openBusinessDialog();
      } else {
        this.isDialogOpen = false;
      }
    }, (error) => {
      console.error("Error checking roles:", error);
      this.isDialogOpen = false;
    });
  }
  openBusinessDialog() {
    const dialogRef = this.matDialog.open(BusinessComponent, {
      width: "70%",
      height: "90vh",
      disableClose: true,
      data: {
        disableCancel: true
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.isDialogOpen = false;
    });
  }
  selectAccount(account) {
    this.authService.user$.pipe(tap3((user) => {
      if (user) {
        const userDoc = this.afs.doc(`user/${user.uid}`);
        userDoc.update({ selectedAccount: account.id }).then(() => {
          this.router.navigate(["/alerts", account.id]);
        }).catch(() => this.toaster.error("Failed to update account selection"));
      }
    }), take3(1)).subscribe();
  }
};
_AccountsComponent.\u0275fac = function AccountsComponent_Factory(t) {
  return new (t || _AccountsComponent)(i026.\u0275\u0275directiveInject(i141.MatDialog), i026.\u0275\u0275directiveInject(AuthService), i026.\u0275\u0275directiveInject(i311.AngularFirestore), i026.\u0275\u0275directiveInject(i411.Router));
};
_AccountsComponent.\u0275cmp = /* @__PURE__ */ i026.\u0275\u0275defineComponent({ type: _AccountsComponent, selectors: [["app-accounts"]], standalone: true, features: [i026.\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [["noTotal", ""], ["noOk", ""], ["noWarning", ""], ["noError", ""], [1, "create-container"], ["mat-raised-button", "", "color", "primary", 1, "create", 3, "click"], [4, "ngFor", "ngForOf"], [1, "info-alerts-container"], [1, "info"], [1, "title", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "delete", 3, "click"], [1, "alerts"], [1, "icon"], [4, "ngIf", "ngIfElse"], [2, "color", "black"], [2, "color", "green"], [2, "color", "rgb(189, 176, 3)"], [2, "color", "red"]], template: function AccountsComponent_Template(rf, ctx) {
  if (rf & 1) {
    i026.\u0275\u0275elementStart(0, "div", 4)(1, "button", 5);
    i026.\u0275\u0275listener("click", function AccountsComponent_Template_button_click_1_listener() {
      return ctx.createAccount();
    });
    i026.\u0275\u0275elementStart(2, "mat-icon");
    i026.\u0275\u0275text(3, "add");
    i026.\u0275\u0275elementEnd();
    i026.\u0275\u0275text(4, "Account ");
    i026.\u0275\u0275elementEnd()();
    i026.\u0275\u0275template(5, AccountsComponent_mat_card_5_Template, 38, 9, "mat-card", 6);
  }
  if (rf & 2) {
    i026.\u0275\u0275advance(5);
    i026.\u0275\u0275property("ngForOf", ctx.accounts);
  }
}, dependencies: [CommonModule15, i510.NgForOf, i510.NgIf, MatButtonModule11, i613.MatButton, MatIconModule12, i713.MatIcon, MatCardModule2, i813.MatCard, i813.MatCardContent], styles: ["\n\n.create-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 30px;\n  margin-right: 20px;\n}\n.create[_ngcontent-%COMP%] {\n  text-align: center;\n}\nmat-icon[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nmat-card[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  margin-left: 20px;\n  margin-bottom: 20px;\n}\n.info-alerts-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n}\n.title[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.alerts[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-left: 10px;\n}\n.delete[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  border-left: solid 1.5px rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=accounts.component.css.map */"] });
var AccountsComponent = _AccountsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i026.\u0275setClassDebugInfo(AccountsComponent, { className: "AccountsComponent" });
})();

// src/app/components/platforms-integration/platforms-integration.component.ts
import { Component as Component19, inject as inject21 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule16 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { getFirestore as getFirestore4, doc as doc4, updateDoc as updateDoc4, deleteField as deleteField5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@firebase_firestore.js?v=478e822e";
import { MatCardModule as MatCardModule3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_card.js?v=478e822e";
import { MatExpansionModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_expansion.js?v=478e822e";
import { MatIconModule as MatIconModule13 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import { MatButtonModule as MatButtonModule12 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import { ToastrService as ToastrService21 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import { getAuth as getAuth20 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_auth.js?v=478e822e";
import { firstValueFrom as firstValueFrom11 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import * as i030 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i147 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import * as i219 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_router.js?v=478e822e";
import * as i313 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_functions.js?v=478e822e";
import * as i412 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";

// src/app/services/platforms/google/google.service.ts
import { Injectable as Injectable9, inject as inject18 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { ToastrService as ToastrService18 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import { getFirestore, doc, updateDoc, deleteField as deleteField2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@firebase_firestore.js?v=478e822e";
import { getAuth as getAuth17 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_auth.js?v=478e822e";
import * as i027 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
var _GoogleService = class _GoogleService {
  constructor(externalPlatformService) {
    this.externalPlatformService = externalPlatformService;
    this.toaster = inject18(ToastrService18);
  }
  googleAdsConnect() {
    var clientId = "552619214593-phjqlsgv1kqkq2nadui8rsuknjudo9lv.apps.googleusercontent.com";
    var hostname = window.location.hostname;
    var redirectUri = hostname === "localhost" ? "https://localhost:4200/integrations/googleAds" : "https://alert-project-xy52mshrpa-nn.a.run.app/integrations/googleAds";
    var scope = "profile email https://www.googleapis.com/auth/adwords";
    var authUrl = "https://accounts.google.com/o/oauth2/v2/auth?client_id=" + clientId + "&response_type=code&scope=" + scope + "&redirect_uri=" + redirectUri + "&access_type=offline&prompt=consent";
    window.location.href = authUrl;
  }
  dv360Connect() {
    var clientId = "552619214593-mem060ud6j7gspg7mt8tgmee7qhjv1j1.apps.googleusercontent.com";
    var hostname = window.location.hostname;
    var redirectUri = hostname === "localhost" ? "https://localhost:4200/integrations/dv360" : "https://alert-project-xy52mshrpa-nn.a.run.app/integrations/dv360";
    var scope = "profile email https://www.googleapis.com/auth/display-video https://www.googleapis.com/auth/doubleclickbidmanager";
    var authUrl = "https://accounts.google.com/o/oauth2/v2/auth?client_id=" + clientId + "&response_type=code&scope=" + scope + "&redirect_uri=" + redirectUri + "&access_type=offline&prompt=consent";
    window.location.href = authUrl;
  }
  googleDisconnect(platform, retryCount = 2) {
    return __async(this, null, function* () {
      const accessToken = localStorage.getItem(`${platform}AccessToken`);
      if (accessToken) {
        try {
          const response = yield fetch(`https://accounts.google.com/o/oauth2/revoke?token=${accessToken}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          });
          if (!response.ok) {
            throw new Error("Failed to revoke token");
          }
        } catch (error) {
          if (retryCount > 0) {
            yield this.externalPlatformService.handleGoogleError(error, platform);
            return this.googleDisconnect(platform, retryCount - 1);
          } else {
            console.error(error);
            this.toaster.error(`Error revoking Google token: ${error}`, "Error");
          }
        }
      }
      localStorage.removeItem(`${platform}AccessToken`);
      const db = getFirestore();
      const user = getAuth17().currentUser;
      if (user) {
        try {
          yield updateDoc(doc(db, "user", user.uid), {
            [`${platform}RefreshToken`]: deleteField2(),
            [`${platform}AccessToken`]: deleteField2()
          });
          this.toaster.success("Google has been successfully disconnected", "Success");
        } catch (error) {
          this.toaster.error(`Error disconnecting Google: ${error}`, "Error");
        }
      } else {
        console.log("User not logged in");
      }
    });
  }
};
_GoogleService.\u0275fac = function GoogleService_Factory(t) {
  return new (t || _GoogleService)(i027.\u0275\u0275inject(ExternalPlatformsService));
};
_GoogleService.\u0275prov = /* @__PURE__ */ i027.\u0275\u0275defineInjectable({ token: _GoogleService, factory: _GoogleService.\u0275fac, providedIn: "root" });
var GoogleService = _GoogleService;

// src/app/services/platforms/facebook/facebook.service.ts
import { Injectable as Injectable10, inject as inject19 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { ToastrService as ToastrService19 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import { getFirestore as getFirestore2, doc as doc2, updateDoc as updateDoc2, deleteField as deleteField3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@firebase_firestore.js?v=478e822e";
import { getAuth as getAuth18 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_auth.js?v=478e822e";
import { firstValueFrom as firstValueFrom10 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import * as i028 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i146 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
import * as i218 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_functions.js?v=478e822e";
import * as i312 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common_http.js?v=478e822e";
var _FacebookService = class _FacebookService {
  constructor(db, fns, http) {
    this.db = db;
    this.fns = fns;
    this.http = http;
    this.toaster = inject19(ToastrService19);
  }
  facebookConnect() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        FB.login((response) => __async(this, null, function* () {
          if (response.authResponse) {
            const user = getAuth18().currentUser;
            if (user) {
              const exchangeTokenFunction = this.fns.httpsCallable("exchangeFacebookToken");
              try {
                const result = yield firstValueFrom10(exchangeTokenFunction({ shortLivedToken: response.authResponse.accessToken }));
                const longLivedToken = result.longLivedToken;
                yield this.db.collection("user").doc(user.uid).update({
                  facebookAccessToken: longLivedToken
                });
                localStorage.setItem("facebookAccessToken", longLivedToken);
                this.toaster.success("Successfully connected with Facebook", "Success");
                console.log("Successfully connected with Facebook", response);
                resolve(response);
              } catch (error) {
                this.toaster.error("Error exchanging Facebook token", "Error");
                reject(error);
              }
            } else {
              this.toaster.error("No Firebase user logged in", "Error");
              reject("No Firebase user logged in");
            }
          } else {
            this.toaster.error("User cancelled login or did not fully authorize", "Error");
            reject("User cancelled login or did not fully authorize.");
          }
        }), { scope: "email,ads_read,business_management" });
      });
    });
  }
  facebookDisconnect() {
    const url = `https://graph.facebook.com/me/permissions?access_token=${localStorage.getItem("facebookAccessToken")}`;
    this.http.delete(url).subscribe({
      next: () => {
        const db = getFirestore2();
        const user = getAuth18().currentUser;
        if (user) {
          try {
            updateDoc2(doc2(db, "user", user.uid), {
              facebookAccessToken: deleteField3()
            });
          } catch (error) {
            this.toaster.error(`Error disconnecting Facebook: ${error}`, "Error");
          }
        } else {
          this.toaster.error("User not logged in");
        }
        localStorage.removeItem("facebookAccessToken");
        this.toaster.success("Facebook has been successfully disconnected", "Success");
      },
      error: (error) => {
        this.toaster.error("Error disconnecting Facebook", error);
      }
    });
  }
};
_FacebookService.\u0275fac = function FacebookService_Factory(t) {
  return new (t || _FacebookService)(i028.\u0275\u0275inject(i146.AngularFirestore), i028.\u0275\u0275inject(i218.AngularFireFunctions), i028.\u0275\u0275inject(i312.HttpClient));
};
_FacebookService.\u0275prov = /* @__PURE__ */ i028.\u0275\u0275defineInjectable({ token: _FacebookService, factory: _FacebookService.\u0275fac, providedIn: "root" });
var FacebookService = _FacebookService;

// src/app/services/platforms/bing/bing.service.ts
import { Injectable as Injectable11, inject as inject20 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { HttpClient as HttpClient9 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common_http.js?v=478e822e";
import { getFirestore as getFirestore3, doc as doc3, getDoc, updateDoc as updateDoc3, deleteField as deleteField4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@firebase_firestore.js?v=478e822e";
import { getAuth as getAuth19 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_auth.js?v=478e822e";
import { ToastrService as ToastrService20 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import { v4 as uuidv4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/uuid.js?v=478e822e";
import * as i029 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
var _BingService = class _BingService {
  constructor() {
    this.toaster = inject20(ToastrService20);
    this.httpClient = inject20(HttpClient9);
    this.clientId = "c0398004-411f-4e05-8478-4e57f2f63503";
    this.hostname = window.location.hostname;
    this.redirectUri = this.hostname === "localhost" ? "https://localhost:4200/integrations/microsoft" : "https://alert-project-xy52mshrpa-nn.a.run.app/integrations/microsoft";
    this.scope = "https://ads.microsoft.com/msads.manage offline_access";
    this.state = uuidv4();
  }
  bingConnect() {
    window.location.href = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize/?source=microsoft&response_type=code&state=${this.state}&client_id=${this.clientId}&scope=${encodeURIComponent(this.scope)}&redirect_uri=${encodeURIComponent(this.redirectUri)}`;
  }
  bingDisconnect() {
    return __async(this, null, function* () {
      const db = getFirestore3();
      const auth = getAuth19();
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc3(db, "user", user.uid);
        try {
          const userDoc = yield getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            const refreshToken = userData["microsoftRefreshToken"];
            if (refreshToken) {
              const logoutUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=${encodeURIComponent(this.redirectUri)}&client_id=${this.clientId}&token=${encodeURIComponent(refreshToken)}`;
              window.location.href = logoutUrl;
              yield updateDoc3(userDocRef, {
                microsoftAccessToken: deleteField4(),
                microsoftRefreshToken: deleteField4()
              });
              localStorage.removeItem("microsoftAccessToken");
              this.toaster.success("Bing has been successfully disconnected", "Success");
            } else {
              this.toaster.error("No refresh token found", "Error");
            }
          } else {
            this.toaster.error("User document does not exist", "Error");
          }
        } catch (error) {
          console.error(`Error disconnecting Bing: ${error}`);
          this.toaster.error(`Error disconnecting Bing: ${error}`, "Error");
        }
      } else {
        this.toaster.error("User not logged in", "Error");
      }
    });
  }
};
_BingService.\u0275fac = function BingService_Factory(t) {
  return new (t || _BingService)();
};
_BingService.\u0275prov = /* @__PURE__ */ i029.\u0275\u0275defineInjectable({ token: _BingService, factory: _BingService.\u0275fac, providedIn: "root" });
var BingService = _BingService;

// src/app/components/platforms-integration/platforms-integration.component.ts
import * as i912 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i108 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_card.js?v=478e822e";
import * as i1113 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import * as i1210 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
function PlatformsIntegrationComponent_mat_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    i030.\u0275\u0275elementStart(0, "mat-icon", 14);
    i030.\u0275\u0275text(1, "check");
    i030.\u0275\u0275elementEnd();
  }
}
function PlatformsIntegrationComponent_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    i030.\u0275\u0275elementStart(0, "mat-icon", 15);
    i030.\u0275\u0275text(1, "close");
    i030.\u0275\u0275elementEnd();
  }
}
function PlatformsIntegrationComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i030.\u0275\u0275getCurrentView();
    i030.\u0275\u0275elementStart(0, "button", 16);
    i030.\u0275\u0275listener("click", function PlatformsIntegrationComponent_button_13_Template_button_click_0_listener() {
      i030.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i030.\u0275\u0275nextContext();
      return i030.\u0275\u0275resetView(ctx_r1.googleService.dv360Connect());
    });
    i030.\u0275\u0275text(1, "Connect");
    i030.\u0275\u0275elementEnd();
  }
}
function PlatformsIntegrationComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = i030.\u0275\u0275getCurrentView();
    i030.\u0275\u0275elementStart(0, "button", 16);
    i030.\u0275\u0275listener("click", function PlatformsIntegrationComponent_button_14_Template_button_click_0_listener() {
      i030.\u0275\u0275restoreView(_r3);
      const ctx_r1 = i030.\u0275\u0275nextContext();
      return i030.\u0275\u0275resetView(ctx_r1.googleDisconnect("dv360"));
    });
    i030.\u0275\u0275text(1, "Disconnect");
    i030.\u0275\u0275elementEnd();
  }
}
function PlatformsIntegrationComponent_mat_icon_22_Template(rf, ctx) {
  if (rf & 1) {
    i030.\u0275\u0275elementStart(0, "mat-icon", 14);
    i030.\u0275\u0275text(1, "check");
    i030.\u0275\u0275elementEnd();
  }
}
function PlatformsIntegrationComponent_mat_icon_23_Template(rf, ctx) {
  if (rf & 1) {
    i030.\u0275\u0275elementStart(0, "mat-icon", 15);
    i030.\u0275\u0275text(1, "close");
    i030.\u0275\u0275elementEnd();
  }
}
function PlatformsIntegrationComponent_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i030.\u0275\u0275getCurrentView();
    i030.\u0275\u0275elementStart(0, "button", 16);
    i030.\u0275\u0275listener("click", function PlatformsIntegrationComponent_button_24_Template_button_click_0_listener() {
      i030.\u0275\u0275restoreView(_r4);
      const ctx_r1 = i030.\u0275\u0275nextContext();
      return i030.\u0275\u0275resetView(ctx_r1.googleService.googleAdsConnect());
    });
    i030.\u0275\u0275text(1, "Connect");
    i030.\u0275\u0275elementEnd();
  }
}
function PlatformsIntegrationComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = i030.\u0275\u0275getCurrentView();
    i030.\u0275\u0275elementStart(0, "button", 16);
    i030.\u0275\u0275listener("click", function PlatformsIntegrationComponent_button_25_Template_button_click_0_listener() {
      i030.\u0275\u0275restoreView(_r5);
      const ctx_r1 = i030.\u0275\u0275nextContext();
      return i030.\u0275\u0275resetView(ctx_r1.googleDisconnect("googleAds"));
    });
    i030.\u0275\u0275text(1, "Disconnect");
    i030.\u0275\u0275elementEnd();
  }
}
function PlatformsIntegrationComponent_mat_icon_33_Template(rf, ctx) {
  if (rf & 1) {
    i030.\u0275\u0275elementStart(0, "mat-icon", 14);
    i030.\u0275\u0275text(1, "check");
    i030.\u0275\u0275elementEnd();
  }
}
function PlatformsIntegrationComponent_mat_icon_34_Template(rf, ctx) {
  if (rf & 1) {
    i030.\u0275\u0275elementStart(0, "mat-icon", 15);
    i030.\u0275\u0275text(1, "close");
    i030.\u0275\u0275elementEnd();
  }
}
function PlatformsIntegrationComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = i030.\u0275\u0275getCurrentView();
    i030.\u0275\u0275elementStart(0, "button", 16);
    i030.\u0275\u0275listener("click", function PlatformsIntegrationComponent_button_35_Template_button_click_0_listener() {
      i030.\u0275\u0275restoreView(_r6);
      const ctx_r1 = i030.\u0275\u0275nextContext();
      return i030.\u0275\u0275resetView(ctx_r1.facebookService.facebookConnect());
    });
    i030.\u0275\u0275text(1, "Connect");
    i030.\u0275\u0275elementEnd();
  }
}
function PlatformsIntegrationComponent_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = i030.\u0275\u0275getCurrentView();
    i030.\u0275\u0275elementStart(0, "button", 16);
    i030.\u0275\u0275listener("click", function PlatformsIntegrationComponent_button_36_Template_button_click_0_listener() {
      i030.\u0275\u0275restoreView(_r7);
      const ctx_r1 = i030.\u0275\u0275nextContext();
      return i030.\u0275\u0275resetView(ctx_r1.facebookService.facebookDisconnect());
    });
    i030.\u0275\u0275text(1, "Disconnect");
    i030.\u0275\u0275elementEnd();
  }
}
function PlatformsIntegrationComponent_mat_icon_44_Template(rf, ctx) {
  if (rf & 1) {
    i030.\u0275\u0275elementStart(0, "mat-icon", 14);
    i030.\u0275\u0275text(1, "check");
    i030.\u0275\u0275elementEnd();
  }
}
function PlatformsIntegrationComponent_mat_icon_45_Template(rf, ctx) {
  if (rf & 1) {
    i030.\u0275\u0275elementStart(0, "mat-icon", 15);
    i030.\u0275\u0275text(1, "close");
    i030.\u0275\u0275elementEnd();
  }
}
function PlatformsIntegrationComponent_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = i030.\u0275\u0275getCurrentView();
    i030.\u0275\u0275elementStart(0, "button", 16);
    i030.\u0275\u0275listener("click", function PlatformsIntegrationComponent_button_46_Template_button_click_0_listener() {
      i030.\u0275\u0275restoreView(_r8);
      const ctx_r1 = i030.\u0275\u0275nextContext();
      return i030.\u0275\u0275resetView(ctx_r1.bingService.bingConnect());
    });
    i030.\u0275\u0275text(1, "Connect");
    i030.\u0275\u0275elementEnd();
  }
}
function PlatformsIntegrationComponent_button_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = i030.\u0275\u0275getCurrentView();
    i030.\u0275\u0275elementStart(0, "button", 16);
    i030.\u0275\u0275listener("click", function PlatformsIntegrationComponent_button_47_Template_button_click_0_listener() {
      i030.\u0275\u0275restoreView(_r9);
      const ctx_r1 = i030.\u0275\u0275nextContext();
      return i030.\u0275\u0275resetView(ctx_r1.bingService.bingDisconnect());
    });
    i030.\u0275\u0275text(1, "Disconnect");
    i030.\u0275\u0275elementEnd();
  }
}
var _PlatformsIntegrationComponent = class _PlatformsIntegrationComponent {
  constructor(matDialog, route, fns, db, googleService, facebookService, bingService, commonService) {
    this.matDialog = matDialog;
    this.route = route;
    this.fns = fns;
    this.db = db;
    this.googleService = googleService;
    this.facebookService = facebookService;
    this.bingService = bingService;
    this.commonService = commonService;
    this.toaster = inject21(ToastrService21);
  }
  ngOnInit() {
    this.handleQueryParams();
  }
  googleDisconnect(platform) {
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      width: "20%",
      data: { message: "You will be disconnected from all Google platforms. Are you sure?" }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.googleService.googleDisconnect(platform);
        const db = getFirestore4();
        const user = getAuth20().currentUser;
        let googlePlatforms = ["googleAds", "dv360"];
        googlePlatforms = googlePlatforms.filter((p) => p !== platform);
        googlePlatforms.forEach((p) => __async(this, null, function* () {
          localStorage.removeItem(`${p}AccessToken`);
          if (user) {
            try {
              yield updateDoc4(doc4(db, "user", user.uid), {
                [`${p}RefreshToken`]: deleteField5(),
                [`${p}AccessToken`]: deleteField5()
              });
            } catch (error) {
              this.toaster.error(`Error disconnecting Google: ${error}`, "Error");
            }
          } else {
            console.log("User not logged in");
          }
        }));
      }
    });
  }
  handleQueryParams() {
    let source = "";
    this.route.params.forEach((params) => {
      source = params.oauthProvider;
    });
    this.route.queryParams.subscribe((params) => {
      const authCode = params["code"];
      if (authCode) {
        if (source === "dv360") {
          this.exchangeGoogleTokens(authCode, source).catch((error) => console.error("Error calling cloud function", error));
        } else if (source === "googleAds") {
          this.exchangeGoogleTokens(authCode, source).catch((error) => console.error("Error calling cloud function", error));
        } else if (source === "microsoft") {
          this.exchangeMicrosoftTokens(authCode).catch((error) => console.error("Error calling cloud function", error));
        }
      }
    });
  }
  exchangeMicrosoftTokens(authCode) {
    return __async(this, null, function* () {
      const callable = this.fns.httpsCallable("exchangeMicrosoftTokens");
      try {
        const result = yield firstValueFrom11(callable({ code: authCode, redirectUri: window.location.hostname === "localhost" ? "https://localhost:4200/integrations/microsoft" : "https://alert-project-xy52mshrpa-nn.a.run.app/integrations/microsoft" }));
        const currentUser = getAuth20().currentUser;
        if (!currentUser)
          throw new Error("User not logged in");
        this.db.collection("user").doc(currentUser.uid).update({
          microsoftAccessToken: result.access_token,
          microsoftRefreshToken: result.refresh_token
        });
        localStorage.setItem("microsoftAccessToken", result.access_token);
        history.replaceState(null, "", window.location.pathname);
        this.toaster.success("Microsoft account connected successfully");
      } catch (error) {
        console.error("Error calling cloud function", error);
      }
    });
  }
  exchangeGoogleTokens(authCode, platform) {
    return __async(this, null, function* () {
      const callable = this.fns.httpsCallable("exchangeGoogleTokens");
      try {
        const result = yield firstValueFrom11(callable({ code: authCode, redirectUri: window.location.hostname === "localhost" ? "https://localhost:4200/integrations/" + platform : "https://alert-project-xy52mshrpa-nn.a.run.app/integrations/" + platform, platform }));
        const currentUser = getAuth20().currentUser;
        if (!currentUser)
          throw new Error("User not logged in");
        this.db.collection("user").doc(currentUser.uid).update({
          [`${platform}AccessToken`]: result.access_token,
          [`${platform}RefreshToken`]: result.refresh_token
        });
        localStorage.setItem(`${platform}AccessToken`, result.access_token);
        history.replaceState(null, "", window.location.pathname);
        this.toaster.success(`${platform === "dv360" ? "Display & Video 360" : "Google Ads"} account connected successfully`);
      } catch (error) {
        console.error("Error calling cloud function", error);
      }
    });
  }
};
_PlatformsIntegrationComponent.\u0275fac = function PlatformsIntegrationComponent_Factory(t) {
  return new (t || _PlatformsIntegrationComponent)(i030.\u0275\u0275directiveInject(i147.MatDialog), i030.\u0275\u0275directiveInject(i219.ActivatedRoute), i030.\u0275\u0275directiveInject(i313.AngularFireFunctions), i030.\u0275\u0275directiveInject(i412.AngularFirestore), i030.\u0275\u0275directiveInject(GoogleService), i030.\u0275\u0275directiveInject(FacebookService), i030.\u0275\u0275directiveInject(BingService), i030.\u0275\u0275directiveInject(CommonService));
};
_PlatformsIntegrationComponent.\u0275cmp = /* @__PURE__ */ i030.\u0275\u0275defineComponent({ type: _PlatformsIntegrationComponent, selectors: [["app-platforms-integration"]], standalone: true, features: [i030.\u0275\u0275StandaloneFeature], decls: 48, vars: 16, consts: [[1, "title"], [1, "container"], [1, "platform-card"], [1, "mat-card-content"], ["src", "../../../assets/dv360-logo.png", "alt", "Google logo", 1, "logo"], [1, "bottom"], [1, "status-group"], [1, "status"], ["style", "color: green;", 4, "ngIf"], ["style", "color: red;", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "class", "reconnect", 3, "click", 4, "ngIf"], ["src", "../../../assets/google-ads-logo.png", "alt", "Google logo", 1, "logo"], ["src", "../../../assets/facebook-logo.png", "alt", "Facebook logo", 1, "logo"], ["src", "../../../assets/bing-logo.png", "alt", "Bing logo", 1, "logo"], [2, "color", "green"], [2, "color", "red"], ["mat-raised-button", "", "color", "primary", 1, "reconnect", 3, "click"]], template: function PlatformsIntegrationComponent_Template(rf, ctx) {
  if (rf & 1) {
    i030.\u0275\u0275elementStart(0, "div", 0)(1, "h1");
    i030.\u0275\u0275text(2, "Platforms integration");
    i030.\u0275\u0275elementEnd()();
    i030.\u0275\u0275elementStart(3, "div", 1)(4, "mat-card", 2)(5, "mat-card-content", 3);
    i030.\u0275\u0275element(6, "img", 4);
    i030.\u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "span", 7);
    i030.\u0275\u0275text(10, "Status:");
    i030.\u0275\u0275elementEnd();
    i030.\u0275\u0275template(11, PlatformsIntegrationComponent_mat_icon_11_Template, 2, 0, "mat-icon", 8)(12, PlatformsIntegrationComponent_mat_icon_12_Template, 2, 0, "mat-icon", 9);
    i030.\u0275\u0275elementEnd();
    i030.\u0275\u0275template(13, PlatformsIntegrationComponent_button_13_Template, 2, 0, "button", 10)(14, PlatformsIntegrationComponent_button_14_Template, 2, 0, "button", 10);
    i030.\u0275\u0275elementEnd()()();
    i030.\u0275\u0275elementStart(15, "mat-card", 2)(16, "mat-card-content", 3);
    i030.\u0275\u0275element(17, "img", 11);
    i030.\u0275\u0275elementStart(18, "div", 5)(19, "div", 6)(20, "span", 7);
    i030.\u0275\u0275text(21, "Status:");
    i030.\u0275\u0275elementEnd();
    i030.\u0275\u0275template(22, PlatformsIntegrationComponent_mat_icon_22_Template, 2, 0, "mat-icon", 8)(23, PlatformsIntegrationComponent_mat_icon_23_Template, 2, 0, "mat-icon", 9);
    i030.\u0275\u0275elementEnd();
    i030.\u0275\u0275template(24, PlatformsIntegrationComponent_button_24_Template, 2, 0, "button", 10)(25, PlatformsIntegrationComponent_button_25_Template, 2, 0, "button", 10);
    i030.\u0275\u0275elementEnd()()();
    i030.\u0275\u0275elementStart(26, "mat-card", 2)(27, "mat-card-content", 3);
    i030.\u0275\u0275element(28, "img", 12);
    i030.\u0275\u0275elementStart(29, "div", 5)(30, "div", 6)(31, "span", 7);
    i030.\u0275\u0275text(32, "Status:");
    i030.\u0275\u0275elementEnd();
    i030.\u0275\u0275template(33, PlatformsIntegrationComponent_mat_icon_33_Template, 2, 0, "mat-icon", 8)(34, PlatformsIntegrationComponent_mat_icon_34_Template, 2, 0, "mat-icon", 9);
    i030.\u0275\u0275elementEnd();
    i030.\u0275\u0275template(35, PlatformsIntegrationComponent_button_35_Template, 2, 0, "button", 10)(36, PlatformsIntegrationComponent_button_36_Template, 2, 0, "button", 10);
    i030.\u0275\u0275elementEnd()()();
    i030.\u0275\u0275elementStart(37, "mat-card", 2)(38, "mat-card-content", 3);
    i030.\u0275\u0275element(39, "img", 13);
    i030.\u0275\u0275elementStart(40, "div", 5)(41, "div", 6)(42, "span", 7);
    i030.\u0275\u0275text(43, "Status:");
    i030.\u0275\u0275elementEnd();
    i030.\u0275\u0275template(44, PlatformsIntegrationComponent_mat_icon_44_Template, 2, 0, "mat-icon", 8)(45, PlatformsIntegrationComponent_mat_icon_45_Template, 2, 0, "mat-icon", 9);
    i030.\u0275\u0275elementEnd();
    i030.\u0275\u0275template(46, PlatformsIntegrationComponent_button_46_Template, 2, 0, "button", 10)(47, PlatformsIntegrationComponent_button_47_Template, 2, 0, "button", 10);
    i030.\u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    i030.\u0275\u0275advance(11);
    i030.\u0275\u0275property("ngIf", ctx.commonService.isConnected("dv360"));
    i030.\u0275\u0275advance();
    i030.\u0275\u0275property("ngIf", !ctx.commonService.isConnected("dv360"));
    i030.\u0275\u0275advance();
    i030.\u0275\u0275property("ngIf", !ctx.commonService.isConnected("dv360"));
    i030.\u0275\u0275advance();
    i030.\u0275\u0275property("ngIf", ctx.commonService.isConnected("dv360"));
    i030.\u0275\u0275advance(8);
    i030.\u0275\u0275property("ngIf", ctx.commonService.isConnected("googleAds"));
    i030.\u0275\u0275advance();
    i030.\u0275\u0275property("ngIf", !ctx.commonService.isConnected("googleAds"));
    i030.\u0275\u0275advance();
    i030.\u0275\u0275property("ngIf", !ctx.commonService.isConnected("googleAds"));
    i030.\u0275\u0275advance();
    i030.\u0275\u0275property("ngIf", ctx.commonService.isConnected("googleAds"));
    i030.\u0275\u0275advance(8);
    i030.\u0275\u0275property("ngIf", ctx.commonService.isConnected("facebook"));
    i030.\u0275\u0275advance();
    i030.\u0275\u0275property("ngIf", !ctx.commonService.isConnected("facebook"));
    i030.\u0275\u0275advance();
    i030.\u0275\u0275property("ngIf", !ctx.commonService.isConnected("facebook"));
    i030.\u0275\u0275advance();
    i030.\u0275\u0275property("ngIf", ctx.commonService.isConnected("facebook"));
    i030.\u0275\u0275advance(8);
    i030.\u0275\u0275property("ngIf", ctx.commonService.isConnected("bing"));
    i030.\u0275\u0275advance();
    i030.\u0275\u0275property("ngIf", !ctx.commonService.isConnected("bing"));
    i030.\u0275\u0275advance();
    i030.\u0275\u0275property("ngIf", !ctx.commonService.isConnected("bing"));
    i030.\u0275\u0275advance();
    i030.\u0275\u0275property("ngIf", ctx.commonService.isConnected("bing"));
  }
}, dependencies: [
  CommonModule16,
  i912.NgIf,
  MatCardModule3,
  i108.MatCard,
  i108.MatCardContent,
  MatExpansionModule,
  MatIconModule13,
  i1113.MatIcon,
  MatButtonModule12,
  i1210.MatButton
], styles: ["\n\n.title[_ngcontent-%COMP%] {\n  display: block;\n  text-align: left;\n  margin-left: 20px;\n  margin-bottom: 20px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  margin: 0;\n}\n.logo[_ngcontent-%COMP%] {\n  height: auto;\n  width: 200px;\n  margin-top: 10px;\n  margin: auto;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n.container[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  gap: 10px;\n}\n.platform-card[_ngcontent-%COMP%] {\n  flex: 0 0 calc(33.333% - 20px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n}\n.left[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.right[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.status[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.reconnect[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\n.mat-card-content[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 20px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.bottom[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n.status-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  width: 100%;\n  margin: auto;\n}\nmat-panel-description[_ngcontent-%COMP%] {\n  margin: auto;\n  color: black;\n  font-weight: normal;\n}\n.reconnect[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\nmat-icon[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.google-scope[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%], .google-scope[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  line-height: 0;\n  display: inline-block;\n  vertical-align: middle;\n}\n.google-scope[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  padding-bottom: 18px;\n}\n/*# sourceMappingURL=platforms-integration.component.css.map */"] });
var PlatformsIntegrationComponent = _PlatformsIntegrationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i030.\u0275setClassDebugInfo(PlatformsIntegrationComponent, { className: "PlatformsIntegrationComponent" });
})();

// src/app/components/alerts/alerts.component.ts
import { Component as Component20, inject as inject22 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule17 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { FormsModule as FormsModule9 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import { ToastrService as ToastrService22 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import { firstValueFrom as firstValueFrom12 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import { MatIconModule as MatIconModule14 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import { MatButtonModule as MatButtonModule13 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import { MatExpansionModule as MatExpansionModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_expansion.js?v=478e822e";
import { MatTableModule as MatTableModule3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_table.js?v=478e822e";
import { MatDividerModule as MatDividerModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_divider.js?v=478e822e";
import { MatTooltipModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_tooltip.js?v=478e822e";
import { MatProgressSpinnerModule as MatProgressSpinnerModule6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_progress-spinner.js?v=478e822e";
import { MatFormFieldModule as MatFormFieldModule5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import { MatSelectModule as MatSelectModule10 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import { MatInputModule as MatInputModule14 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import * as i031 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i148 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
import * as i220 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_functions.js?v=478e822e";
import * as i314 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import * as i413 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_router.js?v=478e822e";
import * as i109 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i1114 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import * as i1211 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import * as i1310 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import * as i149 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_expansion.js?v=478e822e";
import * as i156 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_divider.js?v=478e822e";
import * as i166 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_tooltip.js?v=478e822e";
import * as i174 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_progress-spinner.js?v=478e822e";
import * as i183 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import * as i193 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import * as i202 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_core.js?v=478e822e";
import * as i2110 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
function AlertsComponent_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "mat-option", 33);
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subaccount_r1 = ctx.$implicit;
    i031.\u0275\u0275property("value", subaccount_r1.id);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", subaccount_r1.name, " ");
  }
}
function AlertsComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "mat-option", 33);
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r2 = ctx.$implicit;
    const ctx_r2 = i031.\u0275\u0275nextContext();
    i031.\u0275\u0275property("value", key_r2);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", ctx_r2.platforms[key_r2], " ");
  }
}
function AlertsComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "mat-option", 33);
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    i031.\u0275\u0275property("value", user_r4.id);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", user_r4.email, " ");
  }
}
function AlertsComponent_div_25_div_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = i031.\u0275\u0275getCurrentView();
    i031.\u0275\u0275elementStart(0, "button", 43);
    i031.\u0275\u0275listener("click", function AlertsComponent_div_25_div_1_button_5_Template_button_click_0_listener() {
      i031.\u0275\u0275restoreView(_r5);
      const subaccount_r6 = i031.\u0275\u0275nextContext().$implicit;
      const ctx_r2 = i031.\u0275\u0275nextContext(2);
      return i031.\u0275\u0275resetView(ctx_r2.editSubaccount(subaccount_r6));
    });
    i031.\u0275\u0275text(1, "Edit");
    i031.\u0275\u0275elementEnd();
  }
}
function AlertsComponent_div_25_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = i031.\u0275\u0275getCurrentView();
    i031.\u0275\u0275elementStart(0, "button", 43);
    i031.\u0275\u0275listener("click", function AlertsComponent_div_25_div_1_button_7_Template_button_click_0_listener() {
      i031.\u0275\u0275restoreView(_r7);
      const subaccount_r6 = i031.\u0275\u0275nextContext().$implicit;
      const ctx_r2 = i031.\u0275\u0275nextContext(2);
      return i031.\u0275\u0275resetView(ctx_r2.deleteSubaccount(subaccount_r6));
    });
    i031.\u0275\u0275text(1, "Delete");
    i031.\u0275\u0275elementEnd();
  }
}
function AlertsComponent_div_25_div_1_mat_expansion_panel_9_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "mat-expansion-panel", 44)(1, "mat-expansion-panel-header")(2, "table")(3, "td");
    i031.\u0275\u0275text(4, " Name ");
    i031.\u0275\u0275elementStart(5, "mat-icon", 45);
    i031.\u0275\u0275text(6, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(7, "td", 46);
    i031.\u0275\u0275text(8, " Platforms ");
    i031.\u0275\u0275elementStart(9, "mat-icon", 45);
    i031.\u0275\u0275text(10, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(11, "td", 46);
    i031.\u0275\u0275text(12, " Start Date ");
    i031.\u0275\u0275elementStart(13, "mat-icon", 45);
    i031.\u0275\u0275text(14, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(15, "td", 46);
    i031.\u0275\u0275text(16, " End Date ");
    i031.\u0275\u0275elementStart(17, "mat-icon", 45);
    i031.\u0275\u0275text(18, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(19, "td", 46);
    i031.\u0275\u0275text(20, " Budget ");
    i031.\u0275\u0275elementStart(21, "mat-icon", 45);
    i031.\u0275\u0275text(22, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(23, "td", 46);
    i031.\u0275\u0275text(24, " Spend ");
    i031.\u0275\u0275elementStart(25, "mat-icon", 45);
    i031.\u0275\u0275text(26, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(27, "td", 46);
    i031.\u0275\u0275text(28, " Estimated Spend ");
    i031.\u0275\u0275elementStart(29, "mat-icon", 45);
    i031.\u0275\u0275text(30, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(31, "td", 46);
    i031.\u0275\u0275text(32, " Overall Pacing ");
    i031.\u0275\u0275elementStart(33, "mat-icon", 45);
    i031.\u0275\u0275text(34, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(35, "td", 46);
    i031.\u0275\u0275text(36, " Yesterday Spent ");
    i031.\u0275\u0275elementStart(37, "mat-icon", 45);
    i031.\u0275\u0275text(38, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(39, "td", 46);
    i031.\u0275\u0275text(40, " Pacing ");
    i031.\u0275\u0275elementStart(41, "mat-icon", 45);
    i031.\u0275\u0275text(42, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(43, "td", 46);
    i031.\u0275\u0275text(44, " Spend/day ");
    i031.\u0275\u0275elementStart(45, "mat-icon", 45);
    i031.\u0275\u0275text(46, "question_mark");
    i031.\u0275\u0275elementEnd()()()()();
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span", 57);
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const platform_r9 = i031.\u0275\u0275nextContext().$implicit;
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", platform_r9.formData[platform_r9.platform + "Label"], " ");
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_div_13_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "div", 58);
    i031.\u0275\u0275element(1, "mat-spinner", 59);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("diameter", 30);
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_14_span_0_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275pipe(2, "number");
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const platform_r9 = i031.\u0275\u0275nextContext(2).$implicit;
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", i031.\u0275\u0275pipeBind2(2, 1, platform_r9.pacingAlerts[platform_r9.platform + "_campaign_cost"], "1.0-2"), "$ ");
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1, "Not available");
    i031.\u0275\u0275elementEnd();
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275template(0, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_14_span_0_Template, 3, 4, "span", 60)(1, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_14_ng_template_1_Template, 2, 0, "ng-template", null, 6, i031.\u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noSpend_r10 = i031.\u0275\u0275reference(2);
    const platform_r9 = i031.\u0275\u0275nextContext().$implicit;
    i031.\u0275\u0275property("ngIf", platform_r9.pacingAlerts && platform_r9.pacingAlerts[platform_r9.platform + "_campaign_cost"])("ngIfElse", noSpend_r10);
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_div_17_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "div", 58);
    i031.\u0275\u0275element(1, "mat-spinner", 59);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("diameter", 30);
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_18_span_0_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275pipe(2, "number");
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const platform_r9 = i031.\u0275\u0275nextContext(2).$implicit;
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", i031.\u0275\u0275pipeBind2(2, 1, platform_r9.pacingAlerts[platform_r9.platform + "_estimated_cost"], "1.0-2"), "$ ");
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_18_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1, "Not available");
    i031.\u0275\u0275elementEnd();
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275template(0, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_18_span_0_Template, 3, 4, "span", 60)(1, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_18_ng_template_1_Template, 2, 0, "ng-template", null, 7, i031.\u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noEstimatedSpend_r11 = i031.\u0275\u0275reference(2);
    const platform_r9 = i031.\u0275\u0275nextContext().$implicit;
    i031.\u0275\u0275property("ngIf", platform_r9.pacingAlerts && platform_r9.pacingAlerts[platform_r9.platform + "_estimated_cost"])("ngIfElse", noEstimatedSpend_r11);
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_div_21_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "div", 58);
    i031.\u0275\u0275element(1, "mat-spinner", 59);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("diameter", 30);
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_22_span_0_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275pipe(2, "number");
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const platform_r9 = i031.\u0275\u0275nextContext(2).$implicit;
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", i031.\u0275\u0275pipeBind2(2, 1, platform_r9.pacingAlerts[platform_r9.platform + "_overall_delta_value"], "1.0-2"), "% ");
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_22_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1, "Not available");
    i031.\u0275\u0275elementEnd();
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275template(0, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_22_span_0_Template, 3, 4, "span", 60)(1, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_22_ng_template_1_Template, 2, 0, "ng-template", null, 8, i031.\u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noOverall_r12 = i031.\u0275\u0275reference(2);
    const platform_r9 = i031.\u0275\u0275nextContext().$implicit;
    i031.\u0275\u0275property("ngIf", platform_r9.pacingAlerts && platform_r9.pacingAlerts[platform_r9.platform + "_overall_delta_value"])("ngIfElse", noOverall_r12);
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_div_25_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "div", 58);
    i031.\u0275\u0275element(1, "mat-spinner", 59);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("diameter", 30);
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_26_span_0_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275pipe(2, "number");
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const platform_r9 = i031.\u0275\u0275nextContext(2).$implicit;
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", i031.\u0275\u0275pipeBind2(2, 1, platform_r9.pacingAlerts[platform_r9.platform + "_yesterday_spent"], "1.0-2"), "$ ");
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_26_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1, "Not available");
    i031.\u0275\u0275elementEnd();
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275template(0, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_26_span_0_Template, 3, 4, "span", 60)(1, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_26_ng_template_1_Template, 2, 0, "ng-template", null, 9, i031.\u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noYesterdaySpent_r13 = i031.\u0275\u0275reference(2);
    const platform_r9 = i031.\u0275\u0275nextContext().$implicit;
    i031.\u0275\u0275property("ngIf", platform_r9.pacingAlerts && platform_r9.pacingAlerts[platform_r9.platform + "_yesterday_spent"])("ngIfElse", noYesterdaySpent_r13);
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_div_29_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "div", 58);
    i031.\u0275\u0275element(1, "mat-spinner", 59);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("diameter", 30);
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_30_span_0_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275pipe(2, "number");
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const platform_r9 = i031.\u0275\u0275nextContext(2).$implicit;
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", i031.\u0275\u0275pipeBind2(2, 1, platform_r9.pacingAlerts[platform_r9.platform + "_yesterday_delta_value"], "1.0-2"), "% ");
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_30_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1, "Not available");
    i031.\u0275\u0275elementEnd();
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275template(0, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_30_span_0_Template, 3, 4, "span", 60)(1, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_30_ng_template_1_Template, 2, 0, "ng-template", null, 10, i031.\u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noYesterdayPacing_r14 = i031.\u0275\u0275reference(2);
    const platform_r9 = i031.\u0275\u0275nextContext().$implicit;
    i031.\u0275\u0275property("ngIf", platform_r9.pacingAlerts && platform_r9.pacingAlerts[platform_r9.platform + "_yesterday_delta_value"])("ngIfElse", noYesterdayPacing_r14);
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_div_33_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "div", 58);
    i031.\u0275\u0275element(1, "mat-spinner", 59);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("diameter", 30);
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_34_span_0_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275pipe(2, "number");
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const platform_r9 = i031.\u0275\u0275nextContext(2).$implicit;
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", i031.\u0275\u0275pipeBind2(2, 1, platform_r9.pacingAlerts[platform_r9.platform + "_daily_estimated_cost"], "1.0-2"), "$ ");
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_34_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1, "Not available");
    i031.\u0275\u0275elementEnd();
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275template(0, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_34_span_0_Template, 3, 4, "span", 60)(1, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_34_ng_template_1_Template, 2, 0, "ng-template", null, 11, i031.\u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noSpendPerDay_r15 = i031.\u0275\u0275reference(2);
    const platform_r9 = i031.\u0275\u0275nextContext().$implicit;
    i031.\u0275\u0275property("ngIf", platform_r9.pacingAlerts && platform_r9.pacingAlerts[platform_r9.platform + "_daily_estimated_cost"])("ngIfElse", noSpendPerDay_r15);
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementContainerStart(0);
    i031.\u0275\u0275elementStart(1, "tr")(2, "td", 54);
    i031.\u0275\u0275text(3);
    i031.\u0275\u0275element(4, "br");
    i031.\u0275\u0275template(5, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_span_5_Template, 2, 1, "span", 55);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(6, "td", 54);
    i031.\u0275\u0275text(7);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(8, "td", 54);
    i031.\u0275\u0275text(9);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(10, "td", 54);
    i031.\u0275\u0275text(11);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(12, "td", 54);
    i031.\u0275\u0275template(13, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_div_13_Template, 2, 1, "div", 56)(14, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_14_Template, 3, 2, "ng-template", null, 0, i031.\u0275\u0275templateRefExtractor);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(16, "td", 54);
    i031.\u0275\u0275template(17, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_div_17_Template, 2, 1, "div", 56)(18, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_18_Template, 3, 2, "ng-template", null, 1, i031.\u0275\u0275templateRefExtractor);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(20, "td", 54);
    i031.\u0275\u0275template(21, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_div_21_Template, 2, 1, "div", 56)(22, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_22_Template, 3, 2, "ng-template", null, 2, i031.\u0275\u0275templateRefExtractor);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(24, "td", 54);
    i031.\u0275\u0275template(25, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_div_25_Template, 2, 1, "div", 56)(26, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_26_Template, 3, 2, "ng-template", null, 3, i031.\u0275\u0275templateRefExtractor);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(28, "td", 54);
    i031.\u0275\u0275template(29, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_div_29_Template, 2, 1, "div", 56)(30, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_30_Template, 3, 2, "ng-template", null, 4, i031.\u0275\u0275templateRefExtractor);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(32, "td", 54);
    i031.\u0275\u0275template(33, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_div_33_Template, 2, 1, "div", 56)(34, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_ng_template_34_Template, 3, 2, "ng-template", null, 5, i031.\u0275\u0275templateRefExtractor);
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const platform_r9 = ctx.$implicit;
    const last_r16 = ctx.last;
    const noBudgetLoading_r17 = i031.\u0275\u0275reference(15);
    const noEstimatedSpendLoading_r18 = i031.\u0275\u0275reference(19);
    const noOverallLoading_r19 = i031.\u0275\u0275reference(23);
    const noYesterdaySpentLoading_r20 = i031.\u0275\u0275reference(27);
    const noYesterdayPacingLoading_r21 = i031.\u0275\u0275reference(31);
    const noSpendPerDayLoading_r22 = i031.\u0275\u0275reference(35);
    const ctx_r2 = i031.\u0275\u0275nextContext(4);
    i031.\u0275\u0275advance(2);
    i031.\u0275\u0275classProp("border-cell", !last_r16);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", ctx_r2.platforms[platform_r9.platform], "");
    i031.\u0275\u0275advance(2);
    i031.\u0275\u0275property("ngIf", platform_r9.formData[platform_r9.platform + "Label"]);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275classProp("border-cell", !last_r16);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate(platform_r9.formData[platform_r9.platform + "StartDate"]);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275classProp("border-cell", !last_r16);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate(platform_r9.formData[platform_r9.platform + "EndDate"]);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275classProp("border-cell", !last_r16);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate(platform_r9.formData[platform_r9.platform + "Budget"]);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275classProp("border-cell", !last_r16);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngIf", platform_r9.loading)("ngIfElse", noBudgetLoading_r17);
    i031.\u0275\u0275advance(3);
    i031.\u0275\u0275classProp("border-cell", !last_r16);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngIf", platform_r9.loading)("ngIfElse", noEstimatedSpendLoading_r18);
    i031.\u0275\u0275advance(3);
    i031.\u0275\u0275classProp("border-cell", !last_r16);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngIf", platform_r9.loading)("ngIfElse", noOverallLoading_r19);
    i031.\u0275\u0275advance(3);
    i031.\u0275\u0275classProp("border-cell", !last_r16);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngIf", platform_r9.loading)("ngIfElse", noYesterdaySpentLoading_r20);
    i031.\u0275\u0275advance(3);
    i031.\u0275\u0275classProp("border-cell", !last_r16);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngIf", platform_r9.loading)("ngIfElse", noYesterdayPacingLoading_r21);
    i031.\u0275\u0275advance(3);
    i031.\u0275\u0275classProp("border-cell", !last_r16);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngIf", platform_r9.loading)("ngIfElse", noSpendPerDayLoading_r22);
  }
}
function AlertsComponent_div_25_div_1_mat_accordion_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = i031.\u0275\u0275getCurrentView();
    i031.\u0275\u0275elementStart(0, "mat-accordion", 47)(1, "mat-expansion-panel")(2, "mat-expansion-panel-header", 48)(3, "table")(4, "tr")(5, "td", 49);
    i031.\u0275\u0275text(6);
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275template(7, AlertsComponent_div_25_div_1_mat_accordion_10_ng_container_7_Template, 36, 37, "ng-container", 50);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(8, "div", 51)(9, "button", 52);
    i031.\u0275\u0275listener("click", function AlertsComponent_div_25_div_1_mat_accordion_10_Template_button_click_9_listener($event) {
      const pacingAlert_r23 = i031.\u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = i031.\u0275\u0275nextContext(3);
      return i031.\u0275\u0275resetView(ctx_r2.editAlert(pacingAlert_r23, $event));
    });
    i031.\u0275\u0275elementStart(10, "mat-icon");
    i031.\u0275\u0275text(11, "edit");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(12, "button", 53);
    i031.\u0275\u0275listener("click", function AlertsComponent_div_25_div_1_mat_accordion_10_Template_button_click_12_listener($event) {
      const pacingAlert_r23 = i031.\u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = i031.\u0275\u0275nextContext(3);
      return i031.\u0275\u0275resetView(ctx_r2.deleteAlert(pacingAlert_r23, $event));
    });
    i031.\u0275\u0275elementStart(13, "mat-icon");
    i031.\u0275\u0275text(14, "delete");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(15, "button", 53);
    i031.\u0275\u0275listener("click", function AlertsComponent_div_25_div_1_mat_accordion_10_Template_button_click_15_listener($event) {
      const pacingAlert_r23 = i031.\u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = i031.\u0275\u0275nextContext(3);
      return i031.\u0275\u0275resetView(ctx_r2.processReport(pacingAlert_r23, $event));
    });
    i031.\u0275\u0275elementStart(16, "mat-icon");
    i031.\u0275\u0275text(17, "play_arrow");
    i031.\u0275\u0275elementEnd()()()();
    i031.\u0275\u0275elementStart(18, "div");
    i031.\u0275\u0275text(19, " D\xE9tails de la campagne et plus... ");
    i031.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pacingAlert_r23 = ctx.$implicit;
    i031.\u0275\u0275advance(5);
    i031.\u0275\u0275attribute("rowspan", pacingAlert_r23.platforms.length * 3 + 1);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", pacingAlert_r23.campaignName, " ");
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngForOf", pacingAlert_r23.platforms);
  }
}
function AlertsComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "span", 38);
    i031.\u0275\u0275text(3);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(4, "span", 39);
    i031.\u0275\u0275template(5, AlertsComponent_div_25_div_1_button_5_Template, 2, 0, "button", 40);
    i031.\u0275\u0275text(6, " \xA0 ");
    i031.\u0275\u0275template(7, AlertsComponent_div_25_div_1_button_7_Template, 2, 0, "button", 40);
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275element(8, "mat-divider");
    i031.\u0275\u0275template(9, AlertsComponent_div_25_div_1_mat_expansion_panel_9_Template, 47, 0, "mat-expansion-panel", 41)(10, AlertsComponent_div_25_div_1_mat_accordion_10_Template, 20, 3, "mat-accordion", 42);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subaccount_r6 = ctx.$implicit;
    const ctx_r2 = i031.\u0275\u0275nextContext(2);
    i031.\u0275\u0275advance(3);
    i031.\u0275\u0275textInterpolate(subaccount_r6.name);
    i031.\u0275\u0275advance(2);
    i031.\u0275\u0275property("ngIf", subaccount_r6.id);
    i031.\u0275\u0275advance(2);
    i031.\u0275\u0275property("ngIf", subaccount_r6.id);
    i031.\u0275\u0275advance(2);
    i031.\u0275\u0275property("ngIf", ctx_r2.getFilteredAlerts(subaccount_r6.id).length > 0);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngForOf", ctx_r2.getFilteredAlerts(subaccount_r6.id));
  }
}
function AlertsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "div", 34);
    i031.\u0275\u0275template(1, AlertsComponent_div_25_div_1_Template, 11, 5, "div", 35);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = i031.\u0275\u0275nextContext();
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngForOf", ctx_r2.filteredSubaccounts());
  }
}
function AlertsComponent_div_26_mat_expansion_panel_1_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "mat-expansion-panel", 44)(1, "mat-expansion-panel-header")(2, "table")(3, "td");
    i031.\u0275\u0275text(4, " Name ");
    i031.\u0275\u0275elementStart(5, "mat-icon", 45);
    i031.\u0275\u0275text(6, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(7, "td", 46);
    i031.\u0275\u0275text(8, " Platforms ");
    i031.\u0275\u0275elementStart(9, "mat-icon", 45);
    i031.\u0275\u0275text(10, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(11, "td", 46);
    i031.\u0275\u0275text(12, " Start Date ");
    i031.\u0275\u0275elementStart(13, "mat-icon", 45);
    i031.\u0275\u0275text(14, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(15, "td", 46);
    i031.\u0275\u0275text(16, " End Date ");
    i031.\u0275\u0275elementStart(17, "mat-icon", 45);
    i031.\u0275\u0275text(18, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(19, "td", 46);
    i031.\u0275\u0275text(20, " Budget ");
    i031.\u0275\u0275elementStart(21, "mat-icon", 45);
    i031.\u0275\u0275text(22, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(23, "td", 46);
    i031.\u0275\u0275text(24, " Spend ");
    i031.\u0275\u0275elementStart(25, "mat-icon", 45);
    i031.\u0275\u0275text(26, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(27, "td", 46);
    i031.\u0275\u0275text(28, " Estimated Spend ");
    i031.\u0275\u0275elementStart(29, "mat-icon", 45);
    i031.\u0275\u0275text(30, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(31, "td", 46);
    i031.\u0275\u0275text(32, " Overall Pacing ");
    i031.\u0275\u0275elementStart(33, "mat-icon", 45);
    i031.\u0275\u0275text(34, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(35, "td", 46);
    i031.\u0275\u0275text(36, " Yesterday Spent ");
    i031.\u0275\u0275elementStart(37, "mat-icon", 45);
    i031.\u0275\u0275text(38, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(39, "td", 46);
    i031.\u0275\u0275text(40, " Pacing ");
    i031.\u0275\u0275elementStart(41, "mat-icon", 45);
    i031.\u0275\u0275text(42, "question_mark");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(43, "td", 46);
    i031.\u0275\u0275text(44, " Spend/day ");
    i031.\u0275\u0275elementStart(45, "mat-icon", 45);
    i031.\u0275\u0275text(46, "question_mark");
    i031.\u0275\u0275elementEnd()()()()();
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span", 57);
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const platform_r25 = i031.\u0275\u0275nextContext().$implicit;
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", platform_r25.formData[platform_r25.platform + "Label"], " ");
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_div_13_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "div", 58);
    i031.\u0275\u0275element(1, "mat-spinner", 59);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("diameter", 30);
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_14_span_0_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275pipe(2, "number");
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const platform_r25 = i031.\u0275\u0275nextContext(2).$implicit;
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", i031.\u0275\u0275pipeBind2(2, 1, platform_r25.pacingAlerts[platform_r25.platform + "_campaign_cost"], "1.0-2"), "$ ");
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1, "Not available");
    i031.\u0275\u0275elementEnd();
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275template(0, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_14_span_0_Template, 3, 4, "span", 60)(1, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_14_ng_template_1_Template, 2, 0, "ng-template", null, 18, i031.\u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noSpendBis_r26 = i031.\u0275\u0275reference(2);
    const platform_r25 = i031.\u0275\u0275nextContext().$implicit;
    i031.\u0275\u0275property("ngIf", platform_r25.pacingAlerts && platform_r25.pacingAlerts[platform_r25.platform + "_campaign_cost"])("ngIfElse", noSpendBis_r26);
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_div_17_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "div", 58);
    i031.\u0275\u0275element(1, "mat-spinner", 59);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("diameter", 30);
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_18_span_0_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275pipe(2, "number");
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const platform_r25 = i031.\u0275\u0275nextContext(2).$implicit;
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", i031.\u0275\u0275pipeBind2(2, 1, platform_r25.pacingAlerts[platform_r25.platform + "_estimated_cost"], "1.0-2"), "$ ");
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_18_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1, "Not available");
    i031.\u0275\u0275elementEnd();
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275template(0, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_18_span_0_Template, 3, 4, "span", 60)(1, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_18_ng_template_1_Template, 2, 0, "ng-template", null, 19, i031.\u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noEstimatedSpendBis_r27 = i031.\u0275\u0275reference(2);
    const platform_r25 = i031.\u0275\u0275nextContext().$implicit;
    i031.\u0275\u0275property("ngIf", platform_r25.pacingAlerts && platform_r25.pacingAlerts[platform_r25.platform + "_estimated_cost"])("ngIfElse", noEstimatedSpendBis_r27);
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_div_21_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "div", 58);
    i031.\u0275\u0275element(1, "mat-spinner", 59);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("diameter", 30);
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_22_span_0_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275pipe(2, "number");
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const platform_r25 = i031.\u0275\u0275nextContext(2).$implicit;
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", i031.\u0275\u0275pipeBind2(2, 1, platform_r25.pacingAlerts[platform_r25.platform + "_overall_delta_value"], "1.0-2"), "% ");
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_22_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1, "Not available");
    i031.\u0275\u0275elementEnd();
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275template(0, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_22_span_0_Template, 3, 4, "span", 60)(1, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_22_ng_template_1_Template, 2, 0, "ng-template", null, 20, i031.\u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noOverallBis_r28 = i031.\u0275\u0275reference(2);
    const platform_r25 = i031.\u0275\u0275nextContext().$implicit;
    i031.\u0275\u0275property("ngIf", platform_r25.pacingAlerts && platform_r25.pacingAlerts[platform_r25.platform + "_overall_delta_value"])("ngIfElse", noOverallBis_r28);
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_div_25_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "div", 58);
    i031.\u0275\u0275element(1, "mat-spinner", 59);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("diameter", 30);
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_26_span_0_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275pipe(2, "number");
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const platform_r25 = i031.\u0275\u0275nextContext(2).$implicit;
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", i031.\u0275\u0275pipeBind2(2, 1, platform_r25.pacingAlerts[platform_r25.platform + "_yesterday_spent"], "1.0-2"), "$ ");
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_26_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1, "Not available");
    i031.\u0275\u0275elementEnd();
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275template(0, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_26_span_0_Template, 3, 4, "span", 60)(1, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_26_ng_template_1_Template, 2, 0, "ng-template", null, 21, i031.\u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noYesterdaySpentBis_r29 = i031.\u0275\u0275reference(2);
    const platform_r25 = i031.\u0275\u0275nextContext().$implicit;
    i031.\u0275\u0275property("ngIf", platform_r25.pacingAlerts && platform_r25.pacingAlerts[platform_r25.platform + "_yesterday_spent"])("ngIfElse", noYesterdaySpentBis_r29);
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_div_29_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "div", 58);
    i031.\u0275\u0275element(1, "mat-spinner", 59);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("diameter", 30);
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_30_span_0_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275pipe(2, "number");
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const platform_r25 = i031.\u0275\u0275nextContext(2).$implicit;
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", i031.\u0275\u0275pipeBind2(2, 1, platform_r25.pacingAlerts[platform_r25.platform + "_yesterday_delta_value"], "1.0-2"), "% ");
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_30_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1, "Not available");
    i031.\u0275\u0275elementEnd();
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275template(0, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_30_span_0_Template, 3, 4, "span", 60)(1, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_30_ng_template_1_Template, 2, 0, "ng-template", null, 22, i031.\u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noYesterdayPacingBis_r30 = i031.\u0275\u0275reference(2);
    const platform_r25 = i031.\u0275\u0275nextContext().$implicit;
    i031.\u0275\u0275property("ngIf", platform_r25.pacingAlerts && platform_r25.pacingAlerts[platform_r25.platform + "_yesterday_delta_value"])("ngIfElse", noYesterdayPacingBis_r30);
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_div_33_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "div", 58);
    i031.\u0275\u0275element(1, "mat-spinner", 59);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("diameter", 30);
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_34_span_0_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1);
    i031.\u0275\u0275pipe(2, "number");
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const platform_r25 = i031.\u0275\u0275nextContext(2).$implicit;
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", i031.\u0275\u0275pipeBind2(2, 1, platform_r25.pacingAlerts[platform_r25.platform + "_daily_estimated_cost"], "1.0-2"), "$ ");
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_34_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "span");
    i031.\u0275\u0275text(1, "Not available");
    i031.\u0275\u0275elementEnd();
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275template(0, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_34_span_0_Template, 3, 4, "span", 60)(1, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_34_ng_template_1_Template, 2, 0, "ng-template", null, 23, i031.\u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const noSpendPerDayBis_r31 = i031.\u0275\u0275reference(2);
    const platform_r25 = i031.\u0275\u0275nextContext().$implicit;
    i031.\u0275\u0275property("ngIf", platform_r25.pacingAlerts && platform_r25.pacingAlerts[platform_r25.platform + "_daily_estimated_cost"])("ngIfElse", noSpendPerDayBis_r31);
  }
}
function AlertsComponent_div_26_mat_accordion_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementContainerStart(0);
    i031.\u0275\u0275elementStart(1, "tr")(2, "td", 54);
    i031.\u0275\u0275text(3);
    i031.\u0275\u0275element(4, "br");
    i031.\u0275\u0275template(5, AlertsComponent_div_26_mat_accordion_2_ng_container_7_span_5_Template, 2, 1, "span", 55);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(6, "td", 54);
    i031.\u0275\u0275text(7);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(8, "td", 54);
    i031.\u0275\u0275text(9);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(10, "td", 54);
    i031.\u0275\u0275text(11);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(12, "td", 54);
    i031.\u0275\u0275template(13, AlertsComponent_div_26_mat_accordion_2_ng_container_7_div_13_Template, 2, 1, "div", 56)(14, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_14_Template, 3, 2, "ng-template", null, 12, i031.\u0275\u0275templateRefExtractor);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(16, "td", 54);
    i031.\u0275\u0275template(17, AlertsComponent_div_26_mat_accordion_2_ng_container_7_div_17_Template, 2, 1, "div", 56)(18, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_18_Template, 3, 2, "ng-template", null, 13, i031.\u0275\u0275templateRefExtractor);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(20, "td", 54);
    i031.\u0275\u0275template(21, AlertsComponent_div_26_mat_accordion_2_ng_container_7_div_21_Template, 2, 1, "div", 56)(22, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_22_Template, 3, 2, "ng-template", null, 14, i031.\u0275\u0275templateRefExtractor);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(24, "td", 54);
    i031.\u0275\u0275template(25, AlertsComponent_div_26_mat_accordion_2_ng_container_7_div_25_Template, 2, 1, "div", 56)(26, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_26_Template, 3, 2, "ng-template", null, 15, i031.\u0275\u0275templateRefExtractor);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(28, "td", 54);
    i031.\u0275\u0275template(29, AlertsComponent_div_26_mat_accordion_2_ng_container_7_div_29_Template, 2, 1, "div", 56)(30, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_30_Template, 3, 2, "ng-template", null, 16, i031.\u0275\u0275templateRefExtractor);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(32, "td", 54);
    i031.\u0275\u0275template(33, AlertsComponent_div_26_mat_accordion_2_ng_container_7_div_33_Template, 2, 1, "div", 56)(34, AlertsComponent_div_26_mat_accordion_2_ng_container_7_ng_template_34_Template, 3, 2, "ng-template", null, 17, i031.\u0275\u0275templateRefExtractor);
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const platform_r25 = ctx.$implicit;
    const last_r32 = ctx.last;
    const noBudgetLoadingBis_r33 = i031.\u0275\u0275reference(15);
    const noEstimatedSpendLoadingBis_r34 = i031.\u0275\u0275reference(19);
    const noOverallLoadingBis_r35 = i031.\u0275\u0275reference(23);
    const noYesterdaySpentLoadingBis_r36 = i031.\u0275\u0275reference(27);
    const noYesterdayPacingLoadingBis_r37 = i031.\u0275\u0275reference(31);
    const noSpendPerDayLoadingBis_r38 = i031.\u0275\u0275reference(35);
    const ctx_r2 = i031.\u0275\u0275nextContext(3);
    i031.\u0275\u0275advance(2);
    i031.\u0275\u0275classProp("border-cell", !last_r32);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", ctx_r2.platforms[platform_r25.platform], "");
    i031.\u0275\u0275advance(2);
    i031.\u0275\u0275property("ngIf", platform_r25.formData[platform_r25.platform + "Label"]);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275classProp("border-cell", !last_r32);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate(platform_r25.formData[platform_r25.platform + "StartDate"]);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275classProp("border-cell", !last_r32);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate(platform_r25.formData[platform_r25.platform + "EndDate"]);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275classProp("border-cell", !last_r32);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate(platform_r25.formData[platform_r25.platform + "Budget"]);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275classProp("border-cell", !last_r32);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngIf", platform_r25.loading)("ngIfElse", noBudgetLoadingBis_r33);
    i031.\u0275\u0275advance(3);
    i031.\u0275\u0275classProp("border-cell", !last_r32);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngIf", platform_r25.loading)("ngIfElse", noEstimatedSpendLoadingBis_r34);
    i031.\u0275\u0275advance(3);
    i031.\u0275\u0275classProp("border-cell", !last_r32);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngIf", platform_r25.loading)("ngIfElse", noOverallLoadingBis_r35);
    i031.\u0275\u0275advance(3);
    i031.\u0275\u0275classProp("border-cell", !last_r32);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngIf", platform_r25.loading)("ngIfElse", noYesterdaySpentLoadingBis_r36);
    i031.\u0275\u0275advance(3);
    i031.\u0275\u0275classProp("border-cell", !last_r32);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngIf", platform_r25.loading)("ngIfElse", noYesterdayPacingLoadingBis_r37);
    i031.\u0275\u0275advance(3);
    i031.\u0275\u0275classProp("border-cell", !last_r32);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngIf", platform_r25.loading)("ngIfElse", noSpendPerDayLoadingBis_r38);
  }
}
function AlertsComponent_div_26_mat_accordion_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = i031.\u0275\u0275getCurrentView();
    i031.\u0275\u0275elementStart(0, "mat-accordion", 47)(1, "mat-expansion-panel")(2, "mat-expansion-panel-header", 48)(3, "table")(4, "tr")(5, "td", 49);
    i031.\u0275\u0275text(6);
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275template(7, AlertsComponent_div_26_mat_accordion_2_ng_container_7_Template, 36, 37, "ng-container", 50);
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(8, "div", 51)(9, "button", 52);
    i031.\u0275\u0275listener("click", function AlertsComponent_div_26_mat_accordion_2_Template_button_click_9_listener($event) {
      const pacingAlert_r39 = i031.\u0275\u0275restoreView(_r24).$implicit;
      const ctx_r2 = i031.\u0275\u0275nextContext(2);
      return i031.\u0275\u0275resetView(ctx_r2.editAlert(pacingAlert_r39, $event));
    });
    i031.\u0275\u0275elementStart(10, "mat-icon");
    i031.\u0275\u0275text(11, "edit");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(12, "button", 52);
    i031.\u0275\u0275listener("click", function AlertsComponent_div_26_mat_accordion_2_Template_button_click_12_listener($event) {
      const pacingAlert_r39 = i031.\u0275\u0275restoreView(_r24).$implicit;
      const ctx_r2 = i031.\u0275\u0275nextContext(2);
      return i031.\u0275\u0275resetView(ctx_r2.deleteAlert(pacingAlert_r39, $event));
    });
    i031.\u0275\u0275elementStart(13, "mat-icon");
    i031.\u0275\u0275text(14, "delete");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(15, "button", 52);
    i031.\u0275\u0275listener("click", function AlertsComponent_div_26_mat_accordion_2_Template_button_click_15_listener($event) {
      const pacingAlert_r39 = i031.\u0275\u0275restoreView(_r24).$implicit;
      const ctx_r2 = i031.\u0275\u0275nextContext(2);
      return i031.\u0275\u0275resetView(ctx_r2.processReport(pacingAlert_r39, $event));
    });
    i031.\u0275\u0275elementStart(16, "mat-icon");
    i031.\u0275\u0275text(17, "play_arrow");
    i031.\u0275\u0275elementEnd()()()();
    i031.\u0275\u0275elementStart(18, "div");
    i031.\u0275\u0275text(19, " D\xE9tails de la campagne et plus... ");
    i031.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pacingAlert_r39 = ctx.$implicit;
    i031.\u0275\u0275advance(5);
    i031.\u0275\u0275attribute("rowspan", pacingAlert_r39.platforms.length * 3 + 1);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275textInterpolate1(" ", pacingAlert_r39.campaignName, " ");
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngForOf", pacingAlert_r39.platforms);
  }
}
function AlertsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "div", 34);
    i031.\u0275\u0275template(1, AlertsComponent_div_26_mat_expansion_panel_1_Template, 47, 0, "mat-expansion-panel", 41)(2, AlertsComponent_div_26_mat_accordion_2_Template, 20, 3, "mat-accordion", 42);
    i031.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = i031.\u0275\u0275nextContext();
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngIf", ctx_r2.alertsService.pacingAlerts.length > 0);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngForOf", ctx_r2.alertsService.pacingAlerts);
  }
}
var _AlertsComponent = class _AlertsComponent {
  constructor(db, fns, matDialog, route, DV360ReportService2, facebookReportService, bingReportService, googleAdsReportService, alertsService) {
    this.db = db;
    this.fns = fns;
    this.matDialog = matDialog;
    this.route = route;
    this.DV360ReportService = DV360ReportService2;
    this.facebookReportService = facebookReportService;
    this.bingReportService = bingReportService;
    this.googleAdsReportService = googleAdsReportService;
    this.alertsService = alertsService;
    this.toaster = inject22(ToastrService22);
    this.selectedAccountId = "";
    this.users = [];
    this.displayedColumns = [
      "name",
      "startDate",
      "endDate",
      "platforms",
      "budget",
      "spend",
      "estimatedSpend",
      "overallPacing",
      "pacing",
      "spendPerDay",
      "yesterdaySpent"
    ];
    this.headerColumns = [{
      name: "Campaign Name",
      startDate: "Start Date",
      endDate: "End Date",
      platforms: "Platforms",
      budget: "Budget"
    }];
    this.platforms = {
      "facebook": "Facebook",
      "googleAds": "Google Ads",
      "bing": "Bing",
      "dv360": "Display & Video 360"
    };
    this.panelOpenState = false;
    this.selectedSubaccounts = [];
    this.selectedPlatforms = [];
    this.selectedUsers = [];
    this.filterName = "";
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const accountId = params.get("accountId");
      if (accountId !== this.selectedAccountId) {
        this.selectedAccountId = accountId;
        yield this.getData();
      }
    }));
  }
  getData() {
    return __async(this, null, function* () {
      yield this.getAlerts();
      yield this.getSubaccounts();
      this.applyFilters();
    });
  }
  getFilteredAlerts(subaccountId) {
    return this.alertsService.pacingAlerts.filter((alert2) => {
      if (this.selectedSubaccounts.length > 0 && subaccountId !== null && !this.selectedSubaccounts.includes(subaccountId)) {
        return false;
      }
      if (this.filterName && !alert2.campaignName.toLowerCase().includes(this.filterName.toLowerCase())) {
        return false;
      }
      if (this.selectedUsers.length > 0 && !alert2.platforms.some((platform) => this.selectedUsers.includes(platform.formData.userId))) {
        return false;
      }
      return true;
    }).map((alert2) => {
      if (this.selectedPlatforms.length > 0) {
        alert2.platforms = alert2.originalPlatforms.filter((p) => this.selectedPlatforms.includes(p.platform));
      } else {
        alert2.platforms = alert2.originalPlatforms;
      }
      return alert2;
    }).filter((alert2) => alert2.platforms.length > 0 && (subaccountId ? alert2.subaccount && alert2.subaccount.id === subaccountId : !alert2.subaccount)).sort((a, b) => a.campaignName.localeCompare(b.campaignName));
  }
  filteredSubaccounts() {
    if (this.selectedSubaccounts.length > 0) {
      return this.alertsService.subaccounts.filter((subaccount) => this.selectedSubaccounts.includes(subaccount.id));
    }
    return this.alertsService.subaccounts;
  }
  getAlerts() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.alertsService.pacingAlerts = [];
        this.db.collection("userSearch", (ref) => ref.where("accountId", "==", this.selectedAccountId)).get().subscribe((querySnapshot) => __async(this, null, function* () {
          querySnapshot.forEach((doc5) => {
            const pacingAlert = __spreadProps(__spreadValues({
              id: doc5.id
            }, doc5.data()), {
              originalPlatforms: doc5.data().platforms
            });
            this.alertsService.pacingAlerts.push(pacingAlert);
          });
          yield this.getUsers();
          resolve();
        }), (error) => {
          reject(error);
        });
      });
    });
  }
  getUsers() {
    return __async(this, null, function* () {
      this.users = [];
      const userIds = Array.from(new Set(this.alertsService.pacingAlerts.flatMap((alert2) => alert2.platforms.map((platform) => platform.formData.userId))));
      if (userIds.length > 0) {
        const getUserEmails = this.fns.httpsCallable("getUserEmails");
        const emailResponse = yield firstValueFrom12(getUserEmails({ userIds }));
        this.users = emailResponse.emails.map((user) => ({
          id: user.uid,
          email: user.email
        }));
      }
    });
  }
  getSubaccounts() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.alertsService.subaccounts = [];
        this.db.collection("subaccount", (ref) => ref.where("accountId", "==", this.selectedAccountId)).get().subscribe((querySnapshot) => {
          querySnapshot.forEach((doc5) => {
            const subaccount = __spreadValues({
              id: doc5.id
            }, doc5.data());
            this.alertsService.subaccounts.push(subaccount);
          });
          this.alertsService.subaccounts.sort((a, b) => a.name.localeCompare(b.name));
          if (this.alertsService.subaccounts.length > 0 && this.getFilteredAlerts(null).length > 0) {
            this.alertsService.subaccounts.push({ id: 0, name: "Without Subaccounts" });
          }
          resolve();
        }, (error) => {
          reject(error);
        });
      });
    });
  }
  createAlert() {
    this.matDialog.open(DialogComponent, {
      width: "70%",
      height: "90vh"
    }).afterClosed().subscribe(() => __async(this, null, function* () {
      yield this.getData();
    }));
  }
  deleteAlert(row, event) {
    event.stopPropagation();
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      width: "20%",
      data: { message: "Are you sure to delete " + row.campaignName + "?" }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.db.doc(`userSearch/${row.id}`).delete().then(() => __async(this, null, function* () {
          yield this.getData();
        })).catch((error) => {
          this.toaster.error("Failed to delete alert rule");
          console.error("Error deleting alert rule:", error);
        });
      }
    });
  }
  editAlert(row, event) {
    event.stopPropagation();
    const dataCopy = JSON.parse(JSON.stringify(row));
    const dialogRef = this.matDialog.open(DialogComponent, {
      width: "70%",
      height: "90vh",
      data: dataCopy
    });
    dialogRef.afterClosed().subscribe((result) => __async(this, null, function* () {
      if (result) {
        yield this.getData();
      }
    }));
  }
  deleteSubaccount(row) {
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      width: "25%",
      data: { message: "Are you sure to delete " + row.name + "?" }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const searchRef = this.db.collection("userSearch", (ref) => ref.where("subaccount.id", "==", row.id));
        searchRef.get().subscribe((querySnapshot) => {
          const batch = this.db.firestore.batch();
          querySnapshot.forEach((doc5) => {
            batch.update(doc5.ref, { subaccount: null });
          });
          batch.commit().then(() => {
            this.db.doc(`subaccount/${row.id}`).delete().then(() => __async(this, null, function* () {
              yield this.getData();
            })).catch((error) => {
              this.toaster.error("Failed to delete subaccount");
              console.error("Error deleting subaccount:", error);
            });
          }).catch((error) => {
            this.toaster.error("Failed to update userSearch entries");
            console.error("Error updating userSearch entries:", error);
          });
        });
      }
    });
  }
  editSubaccount(row) {
    const dataCopy = JSON.parse(JSON.stringify(row));
    const dialogRef = this.matDialog.open(SubaccountComponent, {
      width: "40%",
      data: dataCopy
    });
    dialogRef.afterClosed().subscribe((result) => __async(this, null, function* () {
      if (result) {
        yield this.getData();
      }
    }));
  }
  processReport(campaign, event) {
    event.stopPropagation();
    campaign.platforms.forEach((platform, index) => __async(this, null, function* () {
      let data = campaign;
      data.platforms[index].loading = true;
      const pacingAlert = this.alertsService.pacingAlerts.find((p) => p.id === campaign.id);
      if (pacingAlert && pacingAlert.platforms[index]) {
        pacingAlert.platforms[index].loading = true;
      }
      this.db.collection(`userSearch`).doc(campaign.id).update(data).then(() => {
        if (platform.platform === "dv360") {
          this.DV360ReportService.processReport(campaign, index).then((success) => {
            if (success) {
              this.alertsService.updateData(campaign.id, index);
            }
          });
        }
        if (platform.platform === "facebook") {
          this.facebookReportService.processReport(campaign, index).then((success) => {
            if (success) {
              this.alertsService.updateData(campaign.id, index);
            }
          });
        }
        if (platform.platform === "bing") {
          this.bingReportService.processReport(campaign, index).then((success) => {
            if (success) {
              this.alertsService.updateData(campaign.id, index);
            }
          });
        }
        if (platform.platform === "googleAds") {
          this.googleAdsReportService.processReport(campaign, index).then((success) => {
            if (success) {
              this.alertsService.updateData(campaign.id, index);
            }
          });
        }
      });
    }));
  }
  platformKeys() {
    return Object.keys(this.platforms).sort();
  }
  applyFilters() {
    this.alertsService.pacingAlerts = this.alertsService.pacingAlerts.map((alert2) => {
      if (this.selectedPlatforms.length > 0) {
        alert2.platforms = alert2.originalPlatforms.filter((p) => this.selectedPlatforms.includes(p.platform));
      } else {
        alert2.platforms = alert2.originalPlatforms;
      }
      return alert2;
    }).filter((alert2) => {
      if (this.selectedUsers.length > 0) {
        return alert2.platforms.some((platform) => this.selectedUsers.includes(platform.formData.userId));
      }
      return true;
    });
  }
};
_AlertsComponent.\u0275fac = function AlertsComponent_Factory(t) {
  return new (t || _AlertsComponent)(i031.\u0275\u0275directiveInject(i148.AngularFirestore), i031.\u0275\u0275directiveInject(i220.AngularFireFunctions), i031.\u0275\u0275directiveInject(i314.MatDialog), i031.\u0275\u0275directiveInject(i413.ActivatedRoute), i031.\u0275\u0275directiveInject(DV360ReportService), i031.\u0275\u0275directiveInject(FacebookReportService), i031.\u0275\u0275directiveInject(BingReportService), i031.\u0275\u0275directiveInject(GoogleAdsReportService), i031.\u0275\u0275directiveInject(AlertsService));
};
_AlertsComponent.\u0275cmp = /* @__PURE__ */ i031.\u0275\u0275defineComponent({ type: _AlertsComponent, selectors: [["app-alerts"]], standalone: true, features: [i031.\u0275\u0275StandaloneFeature], decls: 27, vars: 9, consts: [["noBudgetLoading", ""], ["noEstimatedSpendLoading", ""], ["noOverallLoading", ""], ["noYesterdaySpentLoading", ""], ["noYesterdayPacingLoading", ""], ["noSpendPerDayLoading", ""], ["noSpend", ""], ["noEstimatedSpend", ""], ["noOverall", ""], ["noYesterdaySpent", ""], ["noYesterdayPacing", ""], ["noSpendPerDay", ""], ["noBudgetLoadingBis", ""], ["noEstimatedSpendLoadingBis", ""], ["noOverallLoadingBis", ""], ["noYesterdaySpentLoadingBis", ""], ["noYesterdayPacingLoadingBis", ""], ["noSpendPerDayLoadingBis", ""], ["noSpendBis", ""], ["noEstimatedSpendBis", ""], ["noOverallBis", ""], ["noYesterdaySpentBis", ""], ["noYesterdayPacingBis", ""], ["noSpendPerDayBis", ""], [1, "container"], [1, "filters"], ["appearance", "fill"], ["multiple", "", 3, "valueChange", "value"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "filter"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["mat-raised-button", "", "color", "primary", 1, "create", 3, "click"], ["class", "subaccount-list", 4, "ngIf"], [3, "value"], [1, "subaccount-list"], ["class", "subaccount-item", 4, "ngFor", "ngForOf"], [1, "subaccount-item"], [1, "subaccount-header"], [1, "subaccount"], [1, "subaccount-button"], ["mat-stroked-button", "", 3, "click", 4, "ngIf"], ["disabled", "", 4, "ngIf"], ["hideToggle", "", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", 3, "click"], ["disabled", ""], ["matTooltip", "Info about the action", 1, "tooltip"], [1, "subcell"], ["hideToggle", ""], [1, "panel-header"], [1, "cell"], [4, "ngFor", "ngForOf"], [1, "icons"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", 1, "icon", 3, "click"], [1, "cell", "subcell"], ["class", "label", 4, "ngIf"], ["class", "loader-overlay", 4, "ngIf", "ngIfElse"], [1, "label"], [1, "loader-overlay"], [3, "diameter"], [4, "ngIf", "ngIfElse"]], template: function AlertsComponent_Template(rf, ctx) {
  if (rf & 1) {
    i031.\u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "mat-form-field", 26)(3, "mat-label");
    i031.\u0275\u0275text(4, "Subaccounts");
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(5, "mat-select", 27);
    i031.\u0275\u0275twoWayListener("valueChange", function AlertsComponent_Template_mat_select_valueChange_5_listener($event) {
      i031.\u0275\u0275twoWayBindingSet(ctx.selectedSubaccounts, $event) || (ctx.selectedSubaccounts = $event);
      return $event;
    });
    i031.\u0275\u0275template(6, AlertsComponent_mat_option_6_Template, 2, 2, "mat-option", 28);
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(7, "mat-form-field", 29)(8, "mat-label");
    i031.\u0275\u0275text(9, "Platforms");
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(10, "mat-select", 27);
    i031.\u0275\u0275twoWayListener("valueChange", function AlertsComponent_Template_mat_select_valueChange_10_listener($event) {
      i031.\u0275\u0275twoWayBindingSet(ctx.selectedPlatforms, $event) || (ctx.selectedPlatforms = $event);
      return $event;
    });
    i031.\u0275\u0275template(11, AlertsComponent_mat_option_11_Template, 2, 2, "mat-option", 28);
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(12, "mat-form-field", 29)(13, "mat-label");
    i031.\u0275\u0275text(14, "Users");
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(15, "mat-select", 27);
    i031.\u0275\u0275twoWayListener("valueChange", function AlertsComponent_Template_mat_select_valueChange_15_listener($event) {
      i031.\u0275\u0275twoWayBindingSet(ctx.selectedUsers, $event) || (ctx.selectedUsers = $event);
      return $event;
    });
    i031.\u0275\u0275template(16, AlertsComponent_mat_option_16_Template, 2, 2, "mat-option", 28);
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275elementStart(17, "mat-form-field", 29)(18, "mat-label");
    i031.\u0275\u0275text(19, "Alert Name");
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275elementStart(20, "input", 30);
    i031.\u0275\u0275twoWayListener("ngModelChange", function AlertsComponent_Template_input_ngModelChange_20_listener($event) {
      i031.\u0275\u0275twoWayBindingSet(ctx.filterName, $event) || (ctx.filterName = $event);
      return $event;
    });
    i031.\u0275\u0275elementEnd()()();
    i031.\u0275\u0275elementStart(21, "button", 31);
    i031.\u0275\u0275listener("click", function AlertsComponent_Template_button_click_21_listener() {
      return ctx.createAlert();
    });
    i031.\u0275\u0275elementStart(22, "mat-icon");
    i031.\u0275\u0275text(23, "add");
    i031.\u0275\u0275elementEnd();
    i031.\u0275\u0275text(24, "Alert ");
    i031.\u0275\u0275elementEnd()();
    i031.\u0275\u0275template(25, AlertsComponent_div_25_Template, 2, 1, "div", 32)(26, AlertsComponent_div_26_Template, 3, 2, "div", 32);
  }
  if (rf & 2) {
    i031.\u0275\u0275advance(5);
    i031.\u0275\u0275twoWayProperty("value", ctx.selectedSubaccounts);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngForOf", ctx.alertsService.subaccounts);
    i031.\u0275\u0275advance(4);
    i031.\u0275\u0275twoWayProperty("value", ctx.selectedPlatforms);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngForOf", ctx.platformKeys());
    i031.\u0275\u0275advance(4);
    i031.\u0275\u0275twoWayProperty("value", ctx.selectedUsers);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngForOf", ctx.users);
    i031.\u0275\u0275advance(4);
    i031.\u0275\u0275twoWayProperty("ngModel", ctx.filterName);
    i031.\u0275\u0275advance(5);
    i031.\u0275\u0275property("ngIf", ctx.alertsService.subaccounts.length > 0);
    i031.\u0275\u0275advance();
    i031.\u0275\u0275property("ngIf", ctx.alertsService.subaccounts.length === 0);
  }
}, dependencies: [
  CommonModule17,
  i109.NgForOf,
  i109.NgIf,
  i109.DecimalPipe,
  FormsModule9,
  i1114.DefaultValueAccessor,
  i1114.NgControlStatus,
  i1114.NgModel,
  MatIconModule14,
  i1211.MatIcon,
  MatButtonModule13,
  i1310.MatButton,
  i1310.MatIconButton,
  MatExpansionModule2,
  i149.MatAccordion,
  i149.MatExpansionPanel,
  i149.MatExpansionPanelHeader,
  MatTableModule3,
  MatDividerModule2,
  i156.MatDivider,
  MatTooltipModule,
  i166.MatTooltip,
  MatProgressSpinnerModule6,
  i174.MatProgressSpinner,
  MatFormFieldModule5,
  i183.MatFormField,
  i183.MatLabel,
  MatSelectModule10,
  i193.MatSelect,
  i202.MatOption,
  MatInputModule14,
  i2110.MatInput
], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n  margin-right: 20px;\n  margin-left: 20px;\n}\n.filter[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.create[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.subaccount-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.subaccount-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-right: auto;\n  width: 100%;\n  margin-bottom: 50px;\n}\n.subaccount[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n}\n.subaccount-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.subaccount-button[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\nmat-expansion-panel-header[_ngcontent-%COMP%] {\n  align-items: center;\n  height: auto !important;\n  min-height: 48px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.header[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-spacing: 10px;\n  overflow-x: auto;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 10px;\n  color: black;\n  text-align: center;\n}\n.cell[_ngcontent-%COMP%] {\n  font-weight: normal;\n  padding: 10px;\n  color: black;\n  text-align: center;\n  overflow-x: scroll;\n}\n.subcell[_ngcontent-%COMP%] {\n  border-left: 1px solid rgba(0, 0, 0, 0.2);\n  overflow-x: scroll;\n}\n.border-cell[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\n.panel-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.panel-header[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.icons[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  padding-right: 20px;\n  padding-left: 20px;\n  height: 100%;\n  width: auto;\n  align-items: center;\n  justify-content: flex-end;\n  background-color: rgb(164, 164, 164);\n  flex-direction: row;\n}\nmat-accordion[_ngcontent-%COMP%]:hover   .icons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.tooltip[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\nmat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgb(67, 67, 67);\n}\n/*# sourceMappingURL=alerts.component.css.map */"] });
var AlertsComponent = _AlertsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i031.\u0275setClassDebugInfo(AlertsComponent, { className: "AlertsComponent" });
})();

// src/app/components/user-management/user-management.component.ts
import { Component as Component22 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule19 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { MatCardModule as MatCardModule4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_card.js?v=478e822e";
import { MatProgressSpinnerModule as MatProgressSpinnerModule7 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_progress-spinner.js?v=478e822e";
import { MatIconModule as MatIconModule16 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import { MatButtonModule as MatButtonModule15 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";

// src/app/components/form/user-management-form/user-management-form.component.ts
import { Component as Component21 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule18 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { FormsModule as FormsModule10 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import { MatButtonModule as MatButtonModule14 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import { MatSelectModule as MatSelectModule11 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import { MatFormFieldModule as MatFormFieldModule6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import { MatInputModule as MatInputModule15 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import { MatIconModule as MatIconModule15 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import { MatCheckboxModule as MatCheckboxModule6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_checkbox.js?v=478e822e";
import { MatDividerModule as MatDividerModule3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_divider.js?v=478e822e";
import * as i032 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i150 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import * as i221 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
import * as i414 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i511 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_forms.js?v=478e822e";
import * as i614 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import * as i714 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_form-field.js?v=478e822e";
import * as i814 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_select.js?v=478e822e";
import * as i913 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_core.js?v=478e822e";
import * as i1010 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_input.js?v=478e822e";
import * as i1115 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import * as i1212 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_checkbox.js?v=478e822e";
import * as i1311 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_divider.js?v=478e822e";
function UserManagementFormComponent_div_1_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    i032.\u0275\u0275elementStart(0, "mat-error");
    i032.\u0275\u0275text(1, " Email is required. ");
    i032.\u0275\u0275elementEnd();
  }
}
function UserManagementFormComponent_div_1_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = i032.\u0275\u0275getCurrentView();
    i032.\u0275\u0275elementStart(0, "mat-option", 13);
    i032.\u0275\u0275listener("click", function UserManagementFormComponent_div_1_mat_option_15_Template_mat_option_click_0_listener($event) {
      i032.\u0275\u0275restoreView(_r5);
      i032.\u0275\u0275nextContext();
      const selector_r3 = i032.\u0275\u0275reference(10);
      $event.stopPropagation();
      return i032.\u0275\u0275resetView(selector_r3.open());
    });
    i032.\u0275\u0275elementStart(1, "mat-checkbox", 14);
    i032.\u0275\u0275twoWayListener("ngModelChange", function UserManagementFormComponent_div_1_mat_option_15_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const option_r6 = i032.\u0275\u0275restoreView(_r5).$implicit;
      i032.\u0275\u0275twoWayBindingSet(option_r6.selected, $event) || (option_r6.selected = $event);
      return i032.\u0275\u0275resetView($event);
    });
    i032.\u0275\u0275listener("change", function UserManagementFormComponent_div_1_mat_option_15_Template_mat_checkbox_change_1_listener() {
      const option_r6 = i032.\u0275\u0275restoreView(_r5).$implicit;
      const user_r2 = i032.\u0275\u0275nextContext().$implicit;
      const ctx_r3 = i032.\u0275\u0275nextContext();
      return i032.\u0275\u0275resetView(ctx_r3.updateAllSelected(user_r2, option_r6));
    });
    i032.\u0275\u0275text(2);
    i032.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    i032.\u0275\u0275advance();
    i032.\u0275\u0275twoWayProperty("ngModel", option_r6.selected);
    i032.\u0275\u0275advance();
    i032.\u0275\u0275textInterpolate1(" ", option_r6.name, " ");
  }
}
function UserManagementFormComponent_div_1_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    i032.\u0275\u0275elementStart(0, "mat-error");
    i032.\u0275\u0275text(1, " Rattachment is required. ");
    i032.\u0275\u0275elementEnd();
  }
}
function UserManagementFormComponent_div_1_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    i032.\u0275\u0275elementStart(0, "mat-error");
    i032.\u0275\u0275text(1, " Role is required. ");
    i032.\u0275\u0275elementEnd();
  }
}
function UserManagementFormComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i032.\u0275\u0275getCurrentView();
    i032.\u0275\u0275elementStart(0, "div", 8)(1, "mat-form-field", 9)(2, "mat-label");
    i032.\u0275\u0275text(3, "Email");
    i032.\u0275\u0275elementEnd();
    i032.\u0275\u0275elementStart(4, "input", 10);
    i032.\u0275\u0275twoWayListener("ngModelChange", function UserManagementFormComponent_div_1_Template_input_ngModelChange_4_listener($event) {
      const user_r2 = i032.\u0275\u0275restoreView(_r1).$implicit;
      i032.\u0275\u0275twoWayBindingSet(user_r2.email, $event) || (user_r2.email = $event);
      return i032.\u0275\u0275resetView($event);
    });
    i032.\u0275\u0275elementEnd();
    i032.\u0275\u0275template(5, UserManagementFormComponent_div_1_mat_error_5_Template, 2, 0, "mat-error", 11);
    i032.\u0275\u0275elementEnd();
    i032.\u0275\u0275elementStart(6, "mat-form-field", 9)(7, "mat-label");
    i032.\u0275\u0275text(8, "Rattachment");
    i032.\u0275\u0275elementEnd();
    i032.\u0275\u0275elementStart(9, "mat-select", 12, 0);
    i032.\u0275\u0275twoWayListener("ngModelChange", function UserManagementFormComponent_div_1_Template_mat_select_ngModelChange_9_listener($event) {
      const user_r2 = i032.\u0275\u0275restoreView(_r1).$implicit;
      i032.\u0275\u0275twoWayBindingSet(user_r2.rattachment, $event) || (user_r2.rattachment = $event);
      return i032.\u0275\u0275resetView($event);
    });
    i032.\u0275\u0275elementStart(11, "mat-option", 13);
    i032.\u0275\u0275listener("click", function UserManagementFormComponent_div_1_Template_mat_option_click_11_listener() {
      i032.\u0275\u0275restoreView(_r1);
      const selector_r3 = i032.\u0275\u0275reference(10);
      return i032.\u0275\u0275resetView(selector_r3.open());
    });
    i032.\u0275\u0275elementStart(12, "mat-checkbox", 14);
    i032.\u0275\u0275twoWayListener("ngModelChange", function UserManagementFormComponent_div_1_Template_mat_checkbox_ngModelChange_12_listener($event) {
      i032.\u0275\u0275restoreView(_r1);
      const ctx_r3 = i032.\u0275\u0275nextContext();
      i032.\u0275\u0275twoWayBindingSet(ctx_r3.allSelected, $event) || (ctx_r3.allSelected = $event);
      return i032.\u0275\u0275resetView($event);
    });
    i032.\u0275\u0275listener("change", function UserManagementFormComponent_div_1_Template_mat_checkbox_change_12_listener($event) {
      const user_r2 = i032.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = i032.\u0275\u0275nextContext();
      return i032.\u0275\u0275resetView(ctx_r3.selectAllAccounts($event, user_r2));
    });
    i032.\u0275\u0275text(13, " All Accounts ");
    i032.\u0275\u0275elementEnd()();
    i032.\u0275\u0275element(14, "mat-divider");
    i032.\u0275\u0275template(15, UserManagementFormComponent_div_1_mat_option_15_Template, 3, 2, "mat-option", 15);
    i032.\u0275\u0275elementEnd();
    i032.\u0275\u0275template(16, UserManagementFormComponent_div_1_mat_error_16_Template, 2, 0, "mat-error", 11);
    i032.\u0275\u0275elementEnd();
    i032.\u0275\u0275elementStart(17, "mat-form-field", 9)(18, "mat-label");
    i032.\u0275\u0275text(19, "Role");
    i032.\u0275\u0275elementEnd();
    i032.\u0275\u0275elementStart(20, "mat-select", 16);
    i032.\u0275\u0275twoWayListener("ngModelChange", function UserManagementFormComponent_div_1_Template_mat_select_ngModelChange_20_listener($event) {
      const user_r2 = i032.\u0275\u0275restoreView(_r1).$implicit;
      i032.\u0275\u0275twoWayBindingSet(user_r2.role, $event) || (user_r2.role = $event);
      return i032.\u0275\u0275resetView($event);
    });
    i032.\u0275\u0275elementStart(21, "mat-option", 17);
    i032.\u0275\u0275text(22, "Admin");
    i032.\u0275\u0275elementEnd();
    i032.\u0275\u0275elementStart(23, "mat-option", 18);
    i032.\u0275\u0275text(24, "Standard");
    i032.\u0275\u0275elementEnd()();
    i032.\u0275\u0275template(25, UserManagementFormComponent_div_1_mat_error_25_Template, 2, 0, "mat-error", 11);
    i032.\u0275\u0275elementEnd();
    i032.\u0275\u0275elementStart(26, "button", 19);
    i032.\u0275\u0275listener("click", function UserManagementFormComponent_div_1_Template_button_click_26_listener() {
      const user_r2 = i032.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = i032.\u0275\u0275nextContext();
      return i032.\u0275\u0275resetView(ctx_r3.removeUser(user_r2));
    });
    i032.\u0275\u0275elementStart(27, "mat-icon");
    i032.\u0275\u0275text(28, "delete");
    i032.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r3 = i032.\u0275\u0275nextContext();
    i032.\u0275\u0275advance(4);
    i032.\u0275\u0275twoWayProperty("ngModel", user_r2.email);
    i032.\u0275\u0275advance();
    i032.\u0275\u0275property("ngIf", !user_r2.email);
    i032.\u0275\u0275advance(4);
    i032.\u0275\u0275twoWayProperty("ngModel", user_r2.rattachment);
    i032.\u0275\u0275advance(3);
    i032.\u0275\u0275twoWayProperty("ngModel", ctx_r3.allSelected);
    i032.\u0275\u0275advance(3);
    i032.\u0275\u0275property("ngForOf", ctx_r3.options);
    i032.\u0275\u0275advance();
    i032.\u0275\u0275property("ngIf", !user_r2.rattachment);
    i032.\u0275\u0275advance(4);
    i032.\u0275\u0275twoWayProperty("ngModel", user_r2.role);
    i032.\u0275\u0275advance(5);
    i032.\u0275\u0275property("ngIf", !user_r2.role);
  }
}
var _UserManagementFormComponent = class _UserManagementFormComponent {
  constructor(dialogRef, db, commonService) {
    this.dialogRef = dialogRef;
    this.db = db;
    this.commonService = commonService;
    this.users = [{ rattachment: [{ name: "All accounts", selected: false }] }];
    this.options = [];
    this.allSelected = false;
  }
  ngOnInit() {
    this.getOptions();
  }
  getOptions() {
    const businessId = this.commonService.selectedBusinessId;
    this.db.collection("account", (ref) => ref.where("businessId", "==", businessId)).snapshotChanges().subscribe((accountSnapshots) => {
      this.options = accountSnapshots.map((accountSnapshot) => {
        const accountData = accountSnapshot.payload.doc.data();
        return __spreadProps(__spreadValues({}, accountData), { id: accountSnapshot.payload.doc.id, selected: false });
      });
    });
  }
  sendInvitations() {
  }
  addUser() {
    this.users.push({});
  }
  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }
  onCancel() {
    this.dialogRef.close();
  }
  selectAllAccounts(event, user) {
    this.allSelected = event.checked;
    this.options.forEach((option) => option.selected = this.allSelected);
    if (this.allSelected) {
      user.rattachment = "All accounts";
    } else {
      user.rattachment = [];
    }
  }
  updateAllSelected(user, option) {
    this.allSelected = this.options.every((option2) => option2.selected);
    if (!user.rattachment) {
      user.rattachment = [];
    }
    if (this.allSelected) {
      user.rattachment = "All accounts";
    } else {
      console.log("option", option);
      if (option.selected) {
        user.rattachment.push(option);
        console.log("option1", user.rattachment);
      } else {
        const index = user.rattachment.indexOf(option);
        if (index >= 0) {
          user.rattachment.splice(index, 1);
        }
        console.log("option2", user.rattachment);
      }
    }
  }
};
_UserManagementFormComponent.\u0275fac = function UserManagementFormComponent_Factory(t) {
  return new (t || _UserManagementFormComponent)(i032.\u0275\u0275directiveInject(i150.MatDialogRef), i032.\u0275\u0275directiveInject(i221.AngularFirestore), i032.\u0275\u0275directiveInject(CommonService));
};
_UserManagementFormComponent.\u0275cmp = /* @__PURE__ */ i032.\u0275\u0275defineComponent({ type: _UserManagementFormComponent, selectors: [["app-user-management-form"]], standalone: true, features: [i032.\u0275\u0275StandaloneFeature], decls: 11, vars: 1, consts: [["selector", ""], [1, "container"], ["class", "user-form", 4, "ngFor", "ngForOf"], [1, "add"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [1, "footer"], ["mat-raised-button", "", "type", "submit", "color", "primary", 1, "button", "form-button", 3, "click"], ["mat-raised-button", "", 1, "button", 3, "click"], [1, "user-form"], [1, "form-field"], ["matInput", "", "placeholder", "Email", "required", "", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["placeholder", "Rattachment", "required", "", 3, "ngModelChange", "ngModel"], [3, "click"], [3, "ngModelChange", "change", "ngModel"], [3, "click", 4, "ngFor", "ngForOf"], ["placeholder", "Role", "required", "", 3, "ngModelChange", "ngModel"], ["value", "ADMIN"], ["value", "STANDARD"], ["mat-icon-button", "", 1, "button", 3, "click"]], template: function UserManagementFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    i032.\u0275\u0275elementStart(0, "div", 1);
    i032.\u0275\u0275template(1, UserManagementFormComponent_div_1_Template, 29, 8, "div", 2);
    i032.\u0275\u0275elementStart(2, "div", 3)(3, "button", 4);
    i032.\u0275\u0275listener("click", function UserManagementFormComponent_Template_button_click_3_listener() {
      return ctx.addUser();
    });
    i032.\u0275\u0275text(4, "Add user");
    i032.\u0275\u0275elementEnd()();
    i032.\u0275\u0275elementStart(5, "div", 5)(6, "button", 6);
    i032.\u0275\u0275listener("click", function UserManagementFormComponent_Template_button_click_6_listener() {
      return ctx.sendInvitations();
    });
    i032.\u0275\u0275text(7, "Add");
    i032.\u0275\u0275elementEnd();
    i032.\u0275\u0275text(8, " \xA0 ");
    i032.\u0275\u0275elementStart(9, "button", 7);
    i032.\u0275\u0275listener("click", function UserManagementFormComponent_Template_button_click_9_listener() {
      return ctx.onCancel();
    });
    i032.\u0275\u0275text(10, "Cancel");
    i032.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    i032.\u0275\u0275advance();
    i032.\u0275\u0275property("ngForOf", ctx.users);
  }
}, dependencies: [
  CommonModule18,
  i414.NgForOf,
  i414.NgIf,
  FormsModule10,
  i511.DefaultValueAccessor,
  i511.NgControlStatus,
  i511.RequiredValidator,
  i511.NgModel,
  MatButtonModule14,
  i614.MatButton,
  i614.MatIconButton,
  MatSelectModule11,
  i714.MatFormField,
  i714.MatLabel,
  i714.MatError,
  i814.MatSelect,
  i913.MatOption,
  MatFormFieldModule6,
  MatInputModule15,
  i1010.MatInput,
  MatIconModule15,
  i1115.MatIcon,
  MatCheckboxModule6,
  i1212.MatCheckbox,
  MatDividerModule3,
  i1311.MatDivider
], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.user-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.form-field[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  flex: 1;\n}\n.add[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 20px;\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 20px;\n}\n.button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.option-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 0;\n}\n.sub-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 20px;\n}\n/*# sourceMappingURL=user-management-form.component.css.map */"] });
var UserManagementFormComponent = _UserManagementFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i032.\u0275setClassDebugInfo(UserManagementFormComponent, { className: "UserManagementFormComponent" });
})();

// src/app/components/user-management/user-management.component.ts
import { documentId as documentId2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_firestore.js?v=478e822e";
import { firstValueFrom as firstValueFrom13 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import * as i033 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i151 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import * as i222 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
import * as i315 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_functions.js?v=478e822e";
import * as i512 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import * as i615 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_card.js?v=478e822e";
import * as i715 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_progress-spinner.js?v=478e822e";
import * as i815 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import * as i914 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
function UserManagementComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i033.\u0275\u0275elementStart(0, "div", 4);
    i033.\u0275\u0275element(1, "mat-spinner");
    i033.\u0275\u0275elementEnd();
  }
}
function UserManagementComponent_mat_card_6_Template(rf, ctx) {
  if (rf & 1) {
    i033.\u0275\u0275elementStart(0, "mat-card")(1, "mat-card-content")(2, "span");
    i033.\u0275\u0275text(3);
    i033.\u0275\u0275elementEnd();
    i033.\u0275\u0275elementStart(4, "span");
    i033.\u0275\u0275text(5);
    i033.\u0275\u0275elementEnd();
    i033.\u0275\u0275elementStart(6, "span");
    i033.\u0275\u0275text(7);
    i033.\u0275\u0275elementEnd();
    i033.\u0275\u0275elementStart(8, "span");
    i033.\u0275\u0275text(9);
    i033.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const ctx_r1 = i033.\u0275\u0275nextContext();
    i033.\u0275\u0275advance(3);
    i033.\u0275\u0275textInterpolate(user_r1.displayName);
    i033.\u0275\u0275advance(2);
    i033.\u0275\u0275textInterpolate(user_r1.email);
    i033.\u0275\u0275advance(2);
    i033.\u0275\u0275textInterpolate(ctx_r1.roles[user_r1.role]);
    i033.\u0275\u0275advance(2);
    i033.\u0275\u0275textInterpolate(ctx_r1.getAccountNames(user_r1));
  }
}
var _UserManagementComponent = class _UserManagementComponent {
  constructor(matDialog, db, fns, commonService) {
    this.matDialog = matDialog;
    this.db = db;
    this.fns = fns;
    this.commonService = commonService;
    this.users = [];
    this.isLoading = false;
    this.roles = {
      "ADMIN": "Admin",
      "STANDARD": "Standard"
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.getUsers();
    });
  }
  addUsers() {
    const dialogRef = this.matDialog.open(UserManagementFormComponent, {
      width: "50%"
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getUsers();
      }
    });
  }
  getUsers() {
    return __async(this, null, function* () {
      this.isLoading = true;
      const userRolesRef = this.db.collection("userRoles");
      const querySnapshot = yield userRolesRef.get().toPromise();
      let userIds = [];
      const promises = querySnapshot.docs.map((doc5) => __async(this, null, function* () {
        const userRole = doc5.data();
        if (userRole.businessRoles && userRole.businessRoles.find((br) => br.businessId === this.commonService.selectedBusinessId)) {
          userIds.push(userRole.userId);
        } else if (userRole.accountRoles) {
          const accountRolePromises = userRole.accountRoles.map((ar) => __async(this, null, function* () {
            const account = yield this.db.doc(`account/${ar.accountId}`).get().toPromise();
            if (account.data().businessId === this.commonService.selectedBusinessId) {
              userIds.push(userRole.userId);
            }
          }));
          yield Promise.all(accountRolePromises);
        }
      }));
      yield Promise.all(promises);
      if (userIds.length > 0) {
        yield this.fetchUsers(userIds);
      }
      this.isLoading = false;
    });
  }
  fetchUsers(userIds) {
    return __async(this, null, function* () {
      const userSnapshots = yield this.db.collection("user", (ref) => ref.where(documentId2(), "in", userIds)).get().toPromise();
      const users = userSnapshots.docs.map((doc5) => __spreadValues({ id: doc5.id }, doc5.data()));
      const getUserEmails = this.fns.httpsCallable("getUserEmails");
      const emailResponse = yield firstValueFrom13(getUserEmails({ userIds }));
      const emailsMap = new Map(emailResponse.emails.map((user) => [user.uid, user.email]));
      const updatedUsers = yield Promise.all(users.map((user) => __async(this, null, function* () {
        let role = "STANDARD";
        let accounts = [];
        let email = emailsMap.get(user.id) || "";
        const userRoleSnapshot = yield this.db.collection("userRoles", (ref) => ref.where("userId", "==", user.id)).get().toPromise();
        if (!userRoleSnapshot.empty) {
          const userRole = userRoleSnapshot.docs[0].data();
          let businessRole = null;
          if (userRole.businessRoles) {
            businessRole = userRole.businessRoles.find((br) => br.businessId === this.commonService.selectedBusinessId);
          }
          if (businessRole) {
            role = businessRole.role;
            const accountSnapshot = yield this.db.collection("account", (ref) => ref.where("businessId", "==", this.commonService.selectedBusinessId)).get().toPromise();
            accounts = accountSnapshot.docs.map((doc5) => doc5.data());
          } else {
            let accountRoleIds = [];
            if (userRole.accountRoles) {
              accountRoleIds = userRole.accountRoles.map((ar) => ar.accountId);
            }
            if (accountRoleIds.length > 0) {
              const accountSnapshot = yield this.db.collection("account", (ref) => ref.where(documentId2(), "in", accountRoleIds).where("businessId", "==", this.commonService.selectedBusinessId)).get().toPromise();
              accounts = accountSnapshot.docs.map((doc5) => doc5.data());
            }
          }
        }
        return __spreadProps(__spreadValues({}, user), { role, accounts, email });
      })));
      this.users = updatedUsers;
    });
  }
  getAccountNames(user) {
    return user.accounts.map((account) => account.name).join(", ");
  }
};
_UserManagementComponent.\u0275fac = function UserManagementComponent_Factory(t) {
  return new (t || _UserManagementComponent)(i033.\u0275\u0275directiveInject(i151.MatDialog), i033.\u0275\u0275directiveInject(i222.AngularFirestore), i033.\u0275\u0275directiveInject(i315.AngularFireFunctions), i033.\u0275\u0275directiveInject(CommonService));
};
_UserManagementComponent.\u0275cmp = /* @__PURE__ */ i033.\u0275\u0275defineComponent({ type: _UserManagementComponent, selectors: [["app-user-management"]], standalone: true, features: [i033.\u0275\u0275StandaloneFeature], decls: 7, vars: 2, consts: [["class", "loader-overlay", 4, "ngIf"], [1, "button-container"], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngFor", "ngForOf"], [1, "loader-overlay"]], template: function UserManagementComponent_Template(rf, ctx) {
  if (rf & 1) {
    i033.\u0275\u0275template(0, UserManagementComponent_div_0_Template, 2, 0, "div", 0);
    i033.\u0275\u0275elementStart(1, "div", 1)(2, "button", 2);
    i033.\u0275\u0275listener("click", function UserManagementComponent_Template_button_click_2_listener() {
      return ctx.addUsers();
    });
    i033.\u0275\u0275elementStart(3, "mat-icon");
    i033.\u0275\u0275text(4, "add");
    i033.\u0275\u0275elementEnd();
    i033.\u0275\u0275text(5, "Users ");
    i033.\u0275\u0275elementEnd()();
    i033.\u0275\u0275template(6, UserManagementComponent_mat_card_6_Template, 10, 4, "mat-card", 3);
  }
  if (rf & 2) {
    i033.\u0275\u0275property("ngIf", ctx.isLoading);
    i033.\u0275\u0275advance(6);
    i033.\u0275\u0275property("ngForOf", ctx.users);
  }
}, dependencies: [CommonModule19, i512.NgForOf, i512.NgIf, MatCardModule4, i615.MatCard, i615.MatCardContent, MatProgressSpinnerModule7, i715.MatProgressSpinner, MatIconModule16, i815.MatIcon, MatButtonModule15, i914.MatButton], styles: ["\n\n.loader-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px;\n  margin-right: 10px;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 20px;\n}\nmat-card[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n/*# sourceMappingURL=user-management.component.css.map */"] });
var UserManagementComponent = _UserManagementComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i033.\u0275setClassDebugInfo(UserManagementComponent, { className: "UserManagementComponent" });
})();

// src/app/guards/logged-in/logged-in.guard.ts
import { inject as inject23 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { Router as Router5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_router.js?v=478e822e";
import { map as map6, take as take4, tap as tap4 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs_operators.js?v=478e822e";
var loggedInGuard = (route, state) => {
  const authService = inject23(AuthService);
  const router = inject23(Router5);
  return authService.user$.pipe(take4(1), map6((user) => !!user), tap4((loggedIn) => {
    if (!loggedIn) {
      console.log("Not logged in, access denied");
      router.navigate([""]);
    }
  }));
};

// src/app/guards/not-logged-in/not-logged-in.guard.ts
import { inject as inject24 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { Router as Router6 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_router.js?v=478e822e";
import { map as map7, take as take5, tap as tap5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs_operators.js?v=478e822e";
var notLoggedInGuard = (route, state) => {
  const authService = inject24(AuthService);
  const router = inject24(Router6);
  return authService.user$.pipe(take5(1), map7((user) => !user), tap5((notLoggedIn) => {
    if (!notLoggedIn) {
      console.log("Already logged in, redirecting to home");
      router.navigate(["/accounts"]);
    }
  }));
};

// src/app/app.routes.ts
var routes = [
  { path: "accounts", component: AccountsComponent, canActivate: [loggedInGuard] },
  { path: "integrations", component: PlatformsIntegrationComponent, canActivate: [loggedInGuard] },
  { path: "alerts/:accountId", component: AlertsComponent, canActivate: [loggedInGuard] },
  { path: "profile", component: ProfileComponent, canActivate: [loggedInGuard] },
  { path: "integrations/:oauthProvider", component: PlatformsIntegrationComponent, canActivate: [loggedInGuard] },
  { path: "user_management", component: UserManagementComponent, canActivate: [loggedInGuard] },
  { path: "", component: SignInComponent, canActivate: [notLoggedInGuard] },
  // To delete
  { path: "home", component: HomeComponent, canActivate: [loggedInGuard] },
  { path: "alerts", component: PacingAlertsComponent, canActivate: [loggedInGuard] },
  { path: "pacing/:campaignName", component: PacingAlertsComponent, canActivate: [loggedInGuard] },
  { path: "pacing", component: PacingTemplateComponent, canActivate: [loggedInGuard] }
];

// src/environments/environment.ts
var environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyB-15r3DoNoDQ3Z-BIgSl7BHCpJqFw2hzQ",
    authDomain: "glassroom-firebase.firebaseapp.com",
    projectId: "glassroom-firebase",
    storageBucket: "glassroom-firebase.appspot.com",
    messagingSenderId: "552619214593",
    appId: "1:552619214593:web:7476ec603b48f3eb35bd00"
  }
};

// src/app/app.config.ts
import { provideAnimationsAsync } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_platform-browser_animations_async.js?v=478e822e";
import { HttpClientModule as HttpClientModule2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common_http.js?v=478e822e";
import { provideFirebaseApp, initializeApp } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_app.js?v=478e822e";
import { provideFirestore, getFirestore as getFirestore5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_firestore.js?v=478e822e";
import { provideStorage, getStorage } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_storage.js?v=478e822e";
import { provideAuth, getAuth as getAuth21 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_auth.js?v=478e822e";
import { FIREBASE_OPTIONS } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat.js?v=478e822e";
import { REGION } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_functions.js?v=478e822e";
import { provideNativeDateAdapter } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_core.js?v=478e822e";
import { provideToastr } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
var appConfig = {
  providers: [
    provideToastr(),
    provideNativeDateAdapter(),
    provideRouter(routes),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
    { provide: REGION, useValue: "northamerica-northeast1" },
    provideAnimationsAsync(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      provideAuth(() => getAuth21()),
      provideFirestore(() => getFirestore5()),
      provideStorage(() => getStorage()),
      HttpClientModule2
    ])
  ]
};

// src/app/app.component.ts
import { Component as Component24 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { RouterOutlet as RouterOutlet2 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_router.js?v=478e822e";

// src/app/components/header/header.component.ts
import { Component as Component23, ViewChild as ViewChild6, computed, inject as inject25, signal, ChangeDetectorRef as ChangeDetectorRef5 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import { CommonModule as CommonModule20 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
import { RouterOutlet } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_router.js?v=478e822e";
import { documentId as documentId3 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/firebase_firestore.js?v=478e822e";
import { ToastrService as ToastrService23 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/ngx-toastr.js?v=478e822e";
import { MatIconModule as MatIconModule17 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import { MatButtonModule as MatButtonModule16 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import { MatToolbarModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_toolbar.js?v=478e822e";
import { MatListModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_list.js?v=478e822e";
import { MatSidenavModule } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_sidenav.js?v=478e822e";
import { MatMenuModule, MatMenuTrigger } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_menu.js?v=478e822e";
import { switchMap as switchMap8, catchError as catchError5, takeUntil } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs_operators.js?v=478e822e";
import { of as of13, combineLatest, tap as tap6, map as map8, take as take6, Subscription, Subject } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/rxjs.js?v=478e822e";
import * as i034 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i316 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_router.js?v=478e822e";
import * as i415 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_firestore.js?v=478e822e";
import * as i513 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_fire_compat_auth.js?v=478e822e";
import * as i616 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_dialog.js?v=478e822e";
import * as i716 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_toolbar.js?v=478e822e";
import * as i816 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_button.js?v=478e822e";
import * as i915 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_icon.js?v=478e822e";
import * as i1011 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_list.js?v=478e822e";
import * as i1116 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_sidenav.js?v=478e822e";
import * as i1213 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_material_menu.js?v=478e822e";
import * as i1312 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_common.js?v=478e822e";
var _c07 = ["sidemenu"];
function HeaderComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = i034.\u0275\u0275getCurrentView();
    i034.\u0275\u0275elementStart(0, "button", 25);
    i034.\u0275\u0275listener("click", function HeaderComponent_button_1_Template_button_click_0_listener() {
      i034.\u0275\u0275restoreView(_r2);
      const ctx_r2 = i034.\u0275\u0275nextContext();
      return i034.\u0275\u0275resetView(ctx_r2.toggleSidemenu());
    });
    i034.\u0275\u0275elementStart(1, "mat-icon");
    i034.\u0275\u0275text(2, "menu");
    i034.\u0275\u0275elementEnd()();
  }
}
function HeaderComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i034.\u0275\u0275getCurrentView();
    i034.\u0275\u0275elementStart(0, "button", 26);
    i034.\u0275\u0275listener("click", function HeaderComponent_button_7_Template_button_click_0_listener() {
      i034.\u0275\u0275restoreView(_r4);
      const ctx_r2 = i034.\u0275\u0275nextContext();
      return i034.\u0275\u0275resetView(ctx_r2.router.navigate(["/profile"]));
    });
    i034.\u0275\u0275elementStart(1, "mat-icon");
    i034.\u0275\u0275text(2, "account_circle");
    i034.\u0275\u0275elementEnd()();
  }
}
function HeaderComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = i034.\u0275\u0275getCurrentView();
    i034.\u0275\u0275elementStart(0, "button", 27);
    i034.\u0275\u0275listener("click", function HeaderComponent_button_9_Template_button_click_0_listener() {
      i034.\u0275\u0275restoreView(_r5);
      const ctx_r2 = i034.\u0275\u0275nextContext();
      return i034.\u0275\u0275resetView(ctx_r2.auth.signOut());
    });
    i034.\u0275\u0275elementStart(1, "mat-icon");
    i034.\u0275\u0275text(2, "exit_to_app");
    i034.\u0275\u0275elementEnd()();
  }
}
function HeaderComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    i034.\u0275\u0275elementStart(0, "span", 28);
    i034.\u0275\u0275text(1, "Businesses");
    i034.\u0275\u0275elementEnd();
  }
}
function HeaderComponent_mat_list_item_22_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i034.\u0275\u0275elementStart(0, "span", 28);
    i034.\u0275\u0275text(1, "Accounts");
    i034.\u0275\u0275elementEnd();
  }
}
function HeaderComponent_mat_list_item_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = i034.\u0275\u0275getCurrentView();
    i034.\u0275\u0275elementStart(0, "mat-list-item", 13, 4);
    i034.\u0275\u0275listener("mouseenter", function HeaderComponent_mat_list_item_22_Template_mat_list_item_mouseenter_0_listener() {
      i034.\u0275\u0275restoreView(_r7);
      const accountTrigger_r8 = i034.\u0275\u0275reference(1);
      const ctx_r2 = i034.\u0275\u0275nextContext();
      return i034.\u0275\u0275resetView(ctx_r2.openMenu(accountTrigger_r8));
    });
    i034.\u0275\u0275elementStart(2, "span", 14)(3, "mat-icon", 15);
    i034.\u0275\u0275text(4, "account_balance");
    i034.\u0275\u0275elementEnd();
    i034.\u0275\u0275template(5, HeaderComponent_mat_list_item_22_span_5_Template, 2, 0, "span", 16);
    i034.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = i034.\u0275\u0275nextContext();
    const account_r9 = i034.\u0275\u0275reference(48);
    i034.\u0275\u0275property("matMenuTriggerFor", account_r9);
    i034.\u0275\u0275advance(5);
    i034.\u0275\u0275property("ngIf", !ctx_r2.collapsed());
  }
}
function HeaderComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    i034.\u0275\u0275elementStart(0, "span", 28);
    i034.\u0275\u0275text(1, "Integrations");
    i034.\u0275\u0275elementEnd();
  }
}
function HeaderComponent_mat_list_item_31_span_4_Template(rf, ctx) {
  if (rf & 1) {
    i034.\u0275\u0275elementStart(0, "span", 28);
    i034.\u0275\u0275text(1, "User management");
    i034.\u0275\u0275elementEnd();
  }
}
function HeaderComponent_mat_list_item_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = i034.\u0275\u0275getCurrentView();
    i034.\u0275\u0275elementStart(0, "mat-list-item", 19);
    i034.\u0275\u0275listener("click", function HeaderComponent_mat_list_item_31_Template_mat_list_item_click_0_listener() {
      i034.\u0275\u0275restoreView(_r10);
      const ctx_r2 = i034.\u0275\u0275nextContext();
      return i034.\u0275\u0275resetView(ctx_r2.navigate("user_management"));
    });
    i034.\u0275\u0275elementStart(1, "span", 14)(2, "mat-icon", 15);
    i034.\u0275\u0275text(3, "supervised_user_circle");
    i034.\u0275\u0275elementEnd();
    i034.\u0275\u0275template(4, HeaderComponent_mat_list_item_31_span_4_Template, 2, 0, "span", 16);
    i034.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = i034.\u0275\u0275nextContext();
    i034.\u0275\u0275advance(4);
    i034.\u0275\u0275property("ngIf", !ctx_r2.collapsed());
  }
}
function HeaderComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    i034.\u0275\u0275elementStart(0, "span", 28);
    i034.\u0275\u0275text(1, "Settings");
    i034.\u0275\u0275elementEnd();
  }
}
function HeaderComponent_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = i034.\u0275\u0275getCurrentView();
    i034.\u0275\u0275elementStart(0, "button", 29);
    i034.\u0275\u0275listener("click", function HeaderComponent_button_42_Template_button_click_0_listener() {
      const business_r12 = i034.\u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = i034.\u0275\u0275nextContext();
      return i034.\u0275\u0275resetView(ctx_r2.selectBusiness(business_r12));
    });
    i034.\u0275\u0275text(1);
    i034.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const business_r12 = ctx.$implicit;
    const ctx_r2 = i034.\u0275\u0275nextContext();
    i034.\u0275\u0275classProp("selected", business_r12.id === ctx_r2.commonService.selectedBusinessId);
    i034.\u0275\u0275advance();
    i034.\u0275\u0275textInterpolate1(" ", business_r12.name, " ");
  }
}
function HeaderComponent_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = i034.\u0275\u0275getCurrentView();
    i034.\u0275\u0275elementStart(0, "button", 29);
    i034.\u0275\u0275listener("click", function HeaderComponent_button_49_Template_button_click_0_listener() {
      const account_r14 = i034.\u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = i034.\u0275\u0275nextContext();
      return i034.\u0275\u0275resetView(ctx_r2.selectAccount(account_r14));
    });
    i034.\u0275\u0275text(1);
    i034.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const account_r14 = ctx.$implicit;
    const ctx_r2 = i034.\u0275\u0275nextContext();
    i034.\u0275\u0275classProp("selected", account_r14.id === ctx_r2.commonService.selectedAccountId);
    i034.\u0275\u0275advance();
    i034.\u0275\u0275textInterpolate1(" ", account_r14.name, " ");
  }
}
var _HeaderComponent = class _HeaderComponent {
  constructor(auth, commonService, router, db, afAuth, matDialog) {
    this.auth = auth;
    this.commonService = commonService;
    this.router = router;
    this.db = db;
    this.afAuth = afAuth;
    this.matDialog = matDialog;
    this.toaster = inject25(ToastrService23);
    this.isDialogOpen = false;
    this.isAdmin = false;
    this.destroy$ = new Subject();
    this.collapsed = signal(true);
    this.sidenavWidth = computed(() => this.collapsed() ? "80px" : "230px");
    this.cdr = inject25(ChangeDetectorRef5);
    this.businesses = [];
    this.accounts = [];
    this.userSubscription = new Subscription();
  }
  isRouteAccounts() {
    return this.router.url === "/accounts";
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.getElements(true, true);
    });
  }
  navigate(route) {
    this.router.navigate([route]);
  }
  openMenu(trigger) {
    trigger.openMenu();
  }
  toggleSidemenu() {
    this.collapsed.set(!this.collapsed());
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 300);
  }
  openBusinessDialog() {
    this.matDialog.open(BusinessComponent, {
      width: "70%",
      height: "90vh"
    });
  }
  loadAccounts(userId) {
    return __async(this, null, function* () {
      this.db.doc(`user/${userId}`).valueChanges().pipe(switchMap8((user) => {
        if (!user || !user.selectedBusiness) {
          console.error("No selected business available");
          return of13([]);
        }
        if (user.selectedAccount) {
          this.commonService.selectedAccountId = user.selectedAccount;
        }
        const selectedBusinessId = user.selectedBusiness;
        return this.db.collection("userRoles", (ref) => ref.where("userId", "==", userId)).valueChanges().pipe(switchMap8((userRoles) => {
          if (!userRoles.length)
            return of13([]);
          const hasRoleOnSelectedBusiness = userRoles.some((role) => role.businessRoles?.some((br) => br.businessId === selectedBusinessId));
          if (hasRoleOnSelectedBusiness) {
            return this.db.collection("account", (ref) => ref.where("businessId", "==", selectedBusinessId)).snapshotChanges().pipe(map8((actions) => actions.map((a) => __spreadValues({ id: a.payload.doc.id }, a.payload.doc.data()))));
          } else {
            const accountIds = userRoles.flatMap((ur) => ur.accountRoles ? ur.accountRoles.map((ar) => ar.accountId) : []);
            return this.db.collection("account", (ref) => ref.where("businessId", "==", selectedBusinessId).where(documentId3(), "in", accountIds)).snapshotChanges().pipe(map8((actions) => actions.map((a) => __spreadValues({ id: a.payload.doc.id }, a.payload.doc.data()))));
          }
        }), catchError5((error) => {
          console.error("Failed to fetch accounts for user roles:", error);
          return of13([]);
        }));
      }), catchError5((error) => {
        console.error("Error fetching user data:", error);
        return of13([]);
      })).subscribe((accounts) => {
        this.accounts = accounts;
        this.accounts = this.accounts.sort((a, b) => a.name.localeCompare(b.name));
      });
    });
  }
  loadBusinesses(userId) {
    return __async(this, null, function* () {
      this.db.doc(`user/${userId}`).valueChanges().pipe(tap6((user) => {
        if (user.selectedBusiness) {
          this.commonService.selectedBusinessId = user.selectedBusiness;
        }
      }), switchMap8(() => {
        return this.db.collection("userRoles", (ref) => ref.where("userId", "==", userId)).valueChanges();
      }), switchMap8((userRoles) => {
        const businessIds = userRoles.flatMap((roles) => roles.businessRoles.map((br) => br.businessId));
        const accountIds = userRoles.flatMap((roles) => roles.accountRoles ? roles.accountRoles.map((ar) => ar.accountId) : []);
        const businesses$ = businessIds.map((id) => this.db.collection("business").doc(id).snapshotChanges().pipe(map8((action) => __spreadValues({ id: action.payload.id }, action.payload.data()))));
        const businessesFromAccounts$ = accountIds.length ? this.db.collection("account", (ref) => ref.where(documentId3(), "in", accountIds)).valueChanges().pipe(switchMap8((accounts) => {
          const indirectBusinessIds = accounts.map((acc) => acc.businessId);
          return this.db.collection("business", (ref) => ref.where(documentId3(), "in", indirectBusinessIds)).valueChanges();
        })) : of13([]);
        return combineLatest([
          businesses$.length ? combineLatest(businesses$) : of13([]),
          businessesFromAccounts$
        ]);
      }), map8(([directBusinesses, indirectBusinesses]) => {
        return [...directBusinesses, ...indirectBusinesses];
      }), take6(1)).subscribe((businesses) => {
        this.businesses = businesses;
        this.businesses = this.businesses.sort((a, b) => a.name.localeCompare(b.name));
        if (!this.commonService.selectedBusinessId && this.businesses.length > 0) {
          this.commonService.selectedAccountId = this.businesses[0].id;
        }
      }, (error) => console.error("Error loading businesses:", error));
    });
  }
  selectBusiness(business) {
    this.auth.user$.pipe(tap6((user) => {
      if (user) {
        const userDoc = this.db.doc(`user/${user.uid}`);
        if (this.commonService.selectedBusinessId !== business.id) {
          userDoc.update({ selectedBusiness: business.id, selectedAccount: null }).then(() => {
            this.router.navigate(["/accounts"]);
            this.commonService.selectedBusinessId = business.id;
            this.commonService.selectedAccountId = null;
          }).catch(() => this.toaster.error("Failed to update business selection"));
        } else {
          userDoc.update({ selectedAccount: null }).then(() => {
            this.commonService.selectedAccountId = null;
            this.router.navigate(["/accounts"]);
          });
        }
      }
    }), take6(1)).subscribe();
  }
  selectAccount(account) {
    this.auth.user$.pipe(tap6((user) => {
      if (user) {
        const userDoc = this.db.doc(`user/${user.uid}`);
        if (this.commonService.selectedAccountId !== account.id) {
          userDoc.update({ selectedAccount: account.id }).then(() => {
            this.router.navigate(["/alerts", account.id]);
            this.commonService.selectedAccountId = account.id;
          }).catch(() => this.toaster.error("Failed to update account selection"));
        } else {
          this.router.navigate(["/alerts", account.id]);
        }
      }
    }), take6(1)).subscribe();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.userSubscription.unsubscribe();
  }
  getElements(business, account) {
    this.userSubscription = this.auth.user$.pipe(switchMap8((user) => __async(this, null, function* () {
      if (!user) {
        return of13([]);
      }
      if (business) {
        yield this.loadBusinesses(user.uid);
      }
      if (account) {
        yield this.loadAccounts(user.uid);
      }
      yield this.getIsAdmin();
      return of13([]);
    }))).subscribe();
  }
  editElement(event) {
    event.stopPropagation();
    const id = this.commonService.selectedAccountId ? this.commonService.selectedAccountId : this.commonService.selectedBusinessId;
    const componentType = this.commonService.selectedAccountId ? AccountComponent : BusinessComponent;
    if (id) {
      this.db.collection(this.commonService.selectedAccountId ? "account" : "business").doc(id).valueChanges().pipe(takeUntil(this.destroy$)).subscribe((data) => {
        if (!this.isDialogOpen) {
          this.isDialogOpen = true;
          const dialogRef = this.matDialog.open(componentType, {
            width: "70%",
            height: "90vh",
            data: __spreadProps(__spreadValues({}, data), { id, isAdmin: this.isAdmin })
          });
          dialogRef.afterClosed().subscribe(() => {
            this.isDialogOpen = false;
            if (this.commonService.selectedAccountId) {
              this.getElements(false, true);
            } else {
              this.getElements(true, false);
            }
          });
        }
      });
    }
  }
  getIsAdmin() {
    return __async(this, null, function* () {
      return this.afAuth.currentUser.then((user) => {
        if (user) {
          return this.db.collection("userRoles", (ref) => ref.where("userId", "==", user.uid)).get().pipe(map8((querySnapshot) => {
            this.isAdmin = false;
            querySnapshot.forEach((doc5) => {
              const data = doc5.data();
              data.businessRoles?.forEach((role) => {
                if (role.businessId === this.commonService.selectedBusinessId && role.role === "ADMIN") {
                  this.isAdmin = true;
                }
              });
            });
            return this.isAdmin;
          })).toPromise();
        } else {
          return false;
        }
      });
    });
  }
};
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(t) {
  return new (t || _HeaderComponent)(i034.\u0275\u0275directiveInject(AuthService), i034.\u0275\u0275directiveInject(CommonService), i034.\u0275\u0275directiveInject(i316.Router), i034.\u0275\u0275directiveInject(i415.AngularFirestore), i034.\u0275\u0275directiveInject(i513.AngularFireAuth), i034.\u0275\u0275directiveInject(i616.MatDialog));
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ i034.\u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) {
  if (rf & 1) {
    i034.\u0275\u0275viewQuery(_c07, 5);
    i034.\u0275\u0275viewQuery(MatMenuTrigger, 5);
  }
  if (rf & 2) {
    let _t;
    i034.\u0275\u0275queryRefresh(_t = i034.\u0275\u0275loadQuery()) && (ctx.sidemenu = _t.first);
    i034.\u0275\u0275queryRefresh(_t = i034.\u0275\u0275loadQuery()) && (ctx.trigger = _t.first);
  }
}, standalone: true, features: [i034.\u0275\u0275StandaloneFeature], decls: 50, vars: 24, consts: [["sidemenu", ""], ["businessTrigger", "matMenuTrigger"], ["business", "matMenu"], ["account", "matMenu"], ["accountTrigger", "matMenuTrigger"], ["mat-icon-button", "", "class", "menu-button", 3, "click", 4, "ngIf"], ["src", "../../assets/glassroom-logo.png", 1, "link-home", "logo"], [1, "link-home"], [1, "spacer"], ["mat-icon-button", "", "class", "profile-icon", "aria-label", "Profile button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "class", "log-out-icon", "aria-label", "Log out button", 3, "click", 4, "ngIf"], ["autosize", ""], ["mode", "side", 3, "opened"], [3, "mouseenter", "matMenuTriggerFor"], [1, "list-item"], [1, "menu-icon"], ["class", "menu-label", 4, "ngIf"], [3, "matMenuTriggerFor", "mouseenter", 4, "ngIf"], [1, "bottom-list"], [3, "click"], [3, "click", 4, "ngIf"], [1, "content"], ["mat-menu-item", "", "class", "list", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], [1, "add"], ["mat-icon-button", "", 1, "menu-button", 3, "click"], ["mat-icon-button", "", "aria-label", "Profile button", 1, "profile-icon", 3, "click"], ["mat-icon-button", "", "aria-label", "Log out button", 1, "log-out-icon", 3, "click"], [1, "menu-label"], ["mat-menu-item", "", 1, "list", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i034.\u0275\u0275getCurrentView();
    i034.\u0275\u0275elementStart(0, "mat-toolbar");
    i034.\u0275\u0275template(1, HeaderComponent_button_1_Template, 3, 0, "button", 5);
    i034.\u0275\u0275pipe(2, "async");
    i034.\u0275\u0275element(3, "img", 6);
    i034.\u0275\u0275elementStart(4, "span", 7);
    i034.\u0275\u0275text(5, "Alert project");
    i034.\u0275\u0275elementEnd();
    i034.\u0275\u0275element(6, "span", 8);
    i034.\u0275\u0275template(7, HeaderComponent_button_7_Template, 3, 0, "button", 9);
    i034.\u0275\u0275pipe(8, "async");
    i034.\u0275\u0275template(9, HeaderComponent_button_9_Template, 3, 0, "button", 10);
    i034.\u0275\u0275pipe(10, "async");
    i034.\u0275\u0275elementEnd();
    i034.\u0275\u0275elementStart(11, "mat-drawer-container", 11)(12, "mat-drawer", 12, 0);
    i034.\u0275\u0275pipe(14, "async");
    i034.\u0275\u0275elementStart(15, "mat-nav-list")(16, "mat-list-item", 13, 1);
    i034.\u0275\u0275listener("mouseenter", function HeaderComponent_Template_mat_list_item_mouseenter_16_listener() {
      i034.\u0275\u0275restoreView(_r1);
      const businessTrigger_r6 = i034.\u0275\u0275reference(17);
      return i034.\u0275\u0275resetView(ctx.openMenu(businessTrigger_r6));
    });
    i034.\u0275\u0275elementStart(18, "span", 14)(19, "mat-icon", 15);
    i034.\u0275\u0275text(20, "business");
    i034.\u0275\u0275elementEnd();
    i034.\u0275\u0275template(21, HeaderComponent_span_21_Template, 2, 0, "span", 16);
    i034.\u0275\u0275elementEnd()();
    i034.\u0275\u0275template(22, HeaderComponent_mat_list_item_22_Template, 6, 2, "mat-list-item", 17);
    i034.\u0275\u0275elementEnd();
    i034.\u0275\u0275elementStart(23, "div", 18);
    i034.\u0275\u0275element(24, "hr");
    i034.\u0275\u0275elementStart(25, "mat-nav-list")(26, "mat-list-item", 19);
    i034.\u0275\u0275listener("click", function HeaderComponent_Template_mat_list_item_click_26_listener() {
      i034.\u0275\u0275restoreView(_r1);
      return i034.\u0275\u0275resetView(ctx.navigate("integrations"));
    });
    i034.\u0275\u0275elementStart(27, "span", 14)(28, "mat-icon", 15);
    i034.\u0275\u0275text(29, "integration_instructions");
    i034.\u0275\u0275elementEnd();
    i034.\u0275\u0275template(30, HeaderComponent_span_30_Template, 2, 0, "span", 16);
    i034.\u0275\u0275elementEnd()();
    i034.\u0275\u0275template(31, HeaderComponent_mat_list_item_31_Template, 5, 1, "mat-list-item", 20);
    i034.\u0275\u0275elementStart(32, "mat-list-item", 19);
    i034.\u0275\u0275listener("click", function HeaderComponent_Template_mat_list_item_click_32_listener($event) {
      i034.\u0275\u0275restoreView(_r1);
      return i034.\u0275\u0275resetView(ctx.editElement($event));
    });
    i034.\u0275\u0275elementStart(33, "span", 14)(34, "mat-icon", 15);
    i034.\u0275\u0275text(35, "settings");
    i034.\u0275\u0275elementEnd();
    i034.\u0275\u0275template(36, HeaderComponent_span_36_Template, 2, 0, "span", 16);
    i034.\u0275\u0275elementEnd()()()()();
    i034.\u0275\u0275elementStart(37, "mat-drawer-content")(38, "div", 21);
    i034.\u0275\u0275element(39, "router-outlet");
    i034.\u0275\u0275elementEnd()()();
    i034.\u0275\u0275elementStart(40, "mat-menu", null, 2);
    i034.\u0275\u0275template(42, HeaderComponent_button_42_Template, 2, 3, "button", 22);
    i034.\u0275\u0275elementStart(43, "button", 23);
    i034.\u0275\u0275listener("click", function HeaderComponent_Template_button_click_43_listener() {
      i034.\u0275\u0275restoreView(_r1);
      return i034.\u0275\u0275resetView(ctx.openBusinessDialog());
    });
    i034.\u0275\u0275elementStart(44, "mat-icon", 24);
    i034.\u0275\u0275text(45, "add");
    i034.\u0275\u0275elementEnd();
    i034.\u0275\u0275text(46, "Manager ");
    i034.\u0275\u0275elementEnd()();
    i034.\u0275\u0275elementStart(47, "mat-menu", null, 3);
    i034.\u0275\u0275template(49, HeaderComponent_button_49_Template, 2, 3, "button", 22);
    i034.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const business_r15 = i034.\u0275\u0275reference(41);
    i034.\u0275\u0275advance();
    i034.\u0275\u0275property("ngIf", i034.\u0275\u0275pipeBind1(2, 16, ctx.auth.user$));
    i034.\u0275\u0275advance(6);
    i034.\u0275\u0275property("ngIf", i034.\u0275\u0275pipeBind1(8, 18, ctx.auth.user$));
    i034.\u0275\u0275advance(2);
    i034.\u0275\u0275property("ngIf", i034.\u0275\u0275pipeBind1(10, 20, ctx.auth.user$));
    i034.\u0275\u0275advance(3);
    i034.\u0275\u0275styleProp("width", ctx.sidenavWidth());
    i034.\u0275\u0275property("opened", i034.\u0275\u0275pipeBind1(14, 22, ctx.auth.user$) ? true : false);
    i034.\u0275\u0275advance(4);
    i034.\u0275\u0275property("matMenuTriggerFor", business_r15);
    i034.\u0275\u0275advance(5);
    i034.\u0275\u0275property("ngIf", !ctx.collapsed());
    i034.\u0275\u0275advance();
    i034.\u0275\u0275property("ngIf", !ctx.isRouteAccounts() && ctx.accounts.length > 0);
    i034.\u0275\u0275advance();
    i034.\u0275\u0275styleProp("width", ctx.sidenavWidth());
    i034.\u0275\u0275advance(7);
    i034.\u0275\u0275property("ngIf", !ctx.collapsed());
    i034.\u0275\u0275advance();
    i034.\u0275\u0275property("ngIf", ctx.isAdmin);
    i034.\u0275\u0275advance(5);
    i034.\u0275\u0275property("ngIf", !ctx.collapsed());
    i034.\u0275\u0275advance(6);
    i034.\u0275\u0275property("ngForOf", ctx.businesses);
    i034.\u0275\u0275advance(7);
    i034.\u0275\u0275property("ngForOf", ctx.accounts);
  }
}, dependencies: [MatToolbarModule, i716.MatToolbar, MatButtonModule16, i816.MatIconButton, MatIconModule17, i915.MatIcon, MatListModule, i1011.MatNavList, i1011.MatListItem, MatSidenavModule, i1116.MatDrawer, i1116.MatDrawerContainer, i1116.MatDrawerContent, MatMenuModule, i1213.MatMenu, i1213.MatMenuItem, i1213.MatMenuTrigger, CommonModule20, i1312.NgForOf, i1312.NgIf, i1312.AsyncPipe, RouterOutlet], styles: ["\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\nimg[_ngcontent-%COMP%] {\n  height: 80%;\n  width: auto;\n}\n.log-out-icon[_ngcontent-%COMP%] {\n  margin-right: 1.5%;\n}\n.list-item[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  display: flex;\n  align-items: center;\n}\n.menu-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-left: 6px;\n}\n.bottom-list[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  overflow: auto;\n  min-width: 80px;\n}\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n  height: calc(100vh - 90px);\n  padding-top: 90px;\n}\nmat-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1000;\n}\nmat-nav-list[_ngcontent-%COMP%] {\n  padding-top: 70px;\n}\n.logo[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.add[_ngcontent-%COMP%] {\n  margin-right: 5px !important;\n}\n.list[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.selected[_ngcontent-%COMP%] {\n  background-color: #00796b;\n  color: white;\n}\n.list.selected[_ngcontent-%COMP%]:hover {\n  background-color: #303f9f;\n}\n.menu-label[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n*[_ngcontent-%COMP%] {\n  transition: all 300ms ease-in-out;\n}\n/*# sourceMappingURL=header.component.css.map */"] });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i034.\u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent" });
})();

// src/app/app.component.ts
import * as i036 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";

// src/app/services/idle/idle.service.ts
import { Injectable as Injectable12 } from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
import * as i035 from "/@fs/Users/rrachidi/Downloads/alert-project/.angular/cache/17.3.0/vite/deps/@angular_core.js?v=478e822e";
var _IdleService = class _IdleService {
  constructor(authService) {
    this.authService = authService;
    this.timeout = 18e5;
  }
  startWatching() {
    this.resetTimer();
    window.addEventListener("mousemove", this.resetTimer.bind(this));
    window.addEventListener("keydown", this.resetTimer.bind(this));
    window.addEventListener("scroll", this.resetTimer.bind(this));
  }
  stopWatching() {
    window.removeEventListener("mousemove", this.resetTimer.bind(this));
    window.removeEventListener("keydown", this.resetTimer.bind(this));
    window.removeEventListener("scroll", this.resetTimer.bind(this));
    this.stopTimer();
  }
  resetTimer() {
    this.stopTimer();
    this.timeoutId = setTimeout(() => {
      this.stopWatching();
      this.authService.signOut();
      alert("You have been logged out due to inactivity.");
    }, this.timeout);
  }
  stopTimer() {
    clearTimeout(this.timeoutId);
  }
};
_IdleService.\u0275fac = function IdleService_Factory(t) {
  return new (t || _IdleService)(i035.\u0275\u0275inject(AuthService));
};
_IdleService.\u0275prov = /* @__PURE__ */ i035.\u0275\u0275defineInjectable({ token: _IdleService, factory: _IdleService.\u0275fac, providedIn: "root" });
var IdleService = _IdleService;

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor(idleService) {
    this.idleService = idleService;
  }
  ngOnInit() {
    this.idleService.startWatching();
  }
  ngOnDestroy() {
    this.idleService.stopWatching();
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)(i036.\u0275\u0275directiveInject(IdleService));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ i036.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [i036.\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    i036.\u0275\u0275element(0, "app-header");
  }
}, dependencies: [HeaderComponent], styles: ["\n\napp-table[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i036.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent" });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

