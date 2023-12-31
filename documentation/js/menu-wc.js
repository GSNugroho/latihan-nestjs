'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">latihan-nestjs1 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-7dbb586307e8fe8b399aa1efed2a623ae90cb5f1101dcbd9911efab347d10c57951e6e520831edd629f44f090fd41052dc7b5ae910b41a5f80ecaf12ec35849d"' : 'data-bs-target="#xs-controllers-links-module-AppModule-7dbb586307e8fe8b399aa1efed2a623ae90cb5f1101dcbd9911efab347d10c57951e6e520831edd629f44f090fd41052dc7b5ae910b41a5f80ecaf12ec35849d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-7dbb586307e8fe8b399aa1efed2a623ae90cb5f1101dcbd9911efab347d10c57951e6e520831edd629f44f090fd41052dc7b5ae910b41a5f80ecaf12ec35849d"' :
                                            'id="xs-controllers-links-module-AppModule-7dbb586307e8fe8b399aa1efed2a623ae90cb5f1101dcbd9911efab347d10c57951e6e520831edd629f44f090fd41052dc7b5ae910b41a5f80ecaf12ec35849d"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-7dbb586307e8fe8b399aa1efed2a623ae90cb5f1101dcbd9911efab347d10c57951e6e520831edd629f44f090fd41052dc7b5ae910b41a5f80ecaf12ec35849d"' : 'data-bs-target="#xs-injectables-links-module-AppModule-7dbb586307e8fe8b399aa1efed2a623ae90cb5f1101dcbd9911efab347d10c57951e6e520831edd629f44f090fd41052dc7b5ae910b41a5f80ecaf12ec35849d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-7dbb586307e8fe8b399aa1efed2a623ae90cb5f1101dcbd9911efab347d10c57951e6e520831edd629f44f090fd41052dc7b5ae910b41a5f80ecaf12ec35849d"' :
                                        'id="xs-injectables-links-module-AppModule-7dbb586307e8fe8b399aa1efed2a623ae90cb5f1101dcbd9911efab347d10c57951e6e520831edd629f44f090fd41052dc7b5ae910b41a5f80ecaf12ec35849d"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-78e3e19efadfb36890a5a0a5ab5f4a27ff9554f9ebc62f333347769ebd9ffb9bd82386cd0770c87497f3860133fe4d32b3e686d6b4ba75f1e1471630b82f950c"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-78e3e19efadfb36890a5a0a5ab5f4a27ff9554f9ebc62f333347769ebd9ffb9bd82386cd0770c87497f3860133fe4d32b3e686d6b4ba75f1e1471630b82f950c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-78e3e19efadfb36890a5a0a5ab5f4a27ff9554f9ebc62f333347769ebd9ffb9bd82386cd0770c87497f3860133fe4d32b3e686d6b4ba75f1e1471630b82f950c"' :
                                            'id="xs-controllers-links-module-AuthModule-78e3e19efadfb36890a5a0a5ab5f4a27ff9554f9ebc62f333347769ebd9ffb9bd82386cd0770c87497f3860133fe4d32b3e686d6b4ba75f1e1471630b82f950c"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-78e3e19efadfb36890a5a0a5ab5f4a27ff9554f9ebc62f333347769ebd9ffb9bd82386cd0770c87497f3860133fe4d32b3e686d6b4ba75f1e1471630b82f950c"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-78e3e19efadfb36890a5a0a5ab5f4a27ff9554f9ebc62f333347769ebd9ffb9bd82386cd0770c87497f3860133fe4d32b3e686d6b4ba75f1e1471630b82f950c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-78e3e19efadfb36890a5a0a5ab5f4a27ff9554f9ebc62f333347769ebd9ffb9bd82386cd0770c87497f3860133fe4d32b3e686d6b4ba75f1e1471630b82f950c"' :
                                        'id="xs-injectables-links-module-AuthModule-78e3e19efadfb36890a5a0a5ab5f4a27ff9554f9ebc62f333347769ebd9ffb9bd82386cd0770c87497f3860133fe4d32b3e686d6b4ba75f1e1471630b82f950c"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LatihanModule.html" data-type="entity-link" >LatihanModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LatihanModule-0c591679a548c705e96075f4b4d8fa01cd3e12f493e8268dba62033d1b7dc5a3fa45df7aaa9a440f553ff150decfce7e934b2804f89249e7077739b7bf8b17e8"' : 'data-bs-target="#xs-controllers-links-module-LatihanModule-0c591679a548c705e96075f4b4d8fa01cd3e12f493e8268dba62033d1b7dc5a3fa45df7aaa9a440f553ff150decfce7e934b2804f89249e7077739b7bf8b17e8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LatihanModule-0c591679a548c705e96075f4b4d8fa01cd3e12f493e8268dba62033d1b7dc5a3fa45df7aaa9a440f553ff150decfce7e934b2804f89249e7077739b7bf8b17e8"' :
                                            'id="xs-controllers-links-module-LatihanModule-0c591679a548c705e96075f4b4d8fa01cd3e12f493e8268dba62033d1b7dc5a3fa45df7aaa9a440f553ff150decfce7e934b2804f89249e7077739b7bf8b17e8"' }>
                                            <li class="link">
                                                <a href="controllers/LatihanController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatihanController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LatihanModule-0c591679a548c705e96075f4b4d8fa01cd3e12f493e8268dba62033d1b7dc5a3fa45df7aaa9a440f553ff150decfce7e934b2804f89249e7077739b7bf8b17e8"' : 'data-bs-target="#xs-injectables-links-module-LatihanModule-0c591679a548c705e96075f4b4d8fa01cd3e12f493e8268dba62033d1b7dc5a3fa45df7aaa9a440f553ff150decfce7e934b2804f89249e7077739b7bf8b17e8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LatihanModule-0c591679a548c705e96075f4b4d8fa01cd3e12f493e8268dba62033d1b7dc5a3fa45df7aaa9a440f553ff150decfce7e934b2804f89249e7077739b7bf8b17e8"' :
                                        'id="xs-injectables-links-module-LatihanModule-0c591679a548c705e96075f4b4d8fa01cd3e12f493e8268dba62033d1b7dc5a3fa45df7aaa9a440f553ff150decfce7e934b2804f89249e7077739b7bf8b17e8"' }>
                                        <li class="link">
                                            <a href="injectables/LatihanService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatihanService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SekolahModule.html" data-type="entity-link" >SekolahModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SekolahModule-36ad53f33385ba1d19b1fd6d8f9748b3f9cd4c6706885bf68ae3d7ca9381b59312d47b5becd9a83998d524709c64291fa7b2fe058ed311246162819ef2407bbf"' : 'data-bs-target="#xs-controllers-links-module-SekolahModule-36ad53f33385ba1d19b1fd6d8f9748b3f9cd4c6706885bf68ae3d7ca9381b59312d47b5becd9a83998d524709c64291fa7b2fe058ed311246162819ef2407bbf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SekolahModule-36ad53f33385ba1d19b1fd6d8f9748b3f9cd4c6706885bf68ae3d7ca9381b59312d47b5becd9a83998d524709c64291fa7b2fe058ed311246162819ef2407bbf"' :
                                            'id="xs-controllers-links-module-SekolahModule-36ad53f33385ba1d19b1fd6d8f9748b3f9cd4c6706885bf68ae3d7ca9381b59312d47b5becd9a83998d524709c64291fa7b2fe058ed311246162819ef2407bbf"' }>
                                            <li class="link">
                                                <a href="controllers/SekolahController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SekolahController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SekolahModule-36ad53f33385ba1d19b1fd6d8f9748b3f9cd4c6706885bf68ae3d7ca9381b59312d47b5becd9a83998d524709c64291fa7b2fe058ed311246162819ef2407bbf"' : 'data-bs-target="#xs-injectables-links-module-SekolahModule-36ad53f33385ba1d19b1fd6d8f9748b3f9cd4c6706885bf68ae3d7ca9381b59312d47b5becd9a83998d524709c64291fa7b2fe058ed311246162819ef2407bbf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SekolahModule-36ad53f33385ba1d19b1fd6d8f9748b3f9cd4c6706885bf68ae3d7ca9381b59312d47b5becd9a83998d524709c64291fa7b2fe058ed311246162819ef2407bbf"' :
                                        'id="xs-injectables-links-module-SekolahModule-36ad53f33385ba1d19b1fd6d8f9748b3f9cd4c6706885bf68ae3d7ca9381b59312d47b5becd9a83998d524709c64291fa7b2fe058ed311246162819ef2407bbf"' }>
                                        <li class="link">
                                            <a href="injectables/SekolahService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SekolahService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' : 'data-bs-target="#xs-controllers-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' :
                                            'id="xs-controllers-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' : 'data-bs-target="#xs-injectables-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' :
                                        'id="xs-injectables-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' }>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateSekolahDto.html" data-type="entity-link" >CreateSekolahDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/createTaskDto.html" data-type="entity-link" >createTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/loginDto.html" data-type="entity-link" >loginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/registerDto.html" data-type="entity-link" >registerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Sekolah.html" data-type="entity-link" >Sekolah</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSekolahDto.html" data-type="entity-link" >UpdateSekolahDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/updateTaskDto.html" data-type="entity-link" >updateTaskDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Task.html" data-type="entity-link" >Task</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});