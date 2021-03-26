import React, { useCallback, useEffect, useState, Component } from 'react';
import { Modal, FlatList, string, View, Text, TouchableOpacity, Image, TextInput, ActivityIndicator, Alert, Button } from 'react-native'
import { FONTS, COLORS, SIZES, icons, images } from '../../constants'
//import * as booksAPI from '../../data/BooksAPI'
import { getbooksfromApi } from '../../data/SearchBookApi'
const SearchBox = props => {

    var abc = ["1", "2", "3", "4", "5"]

    const categoriesData = [
        {
            id: 1,
            categoryName: "Best Seller",
            books: "bookOtherWordsForHome"
        },
        {
            id: 2,
            categoryName: "The Latest",
            books: "bookOtherWordsForHome"
        },
        {
            id: 3,
            categoryName: "Coming Soon",
            books: "bookOtherWordsForHome"
        },
    ]

    var apitest2 = [
        {
            "kind": "books#volume",
            "id": "y6QNAAAAQAAJ",
            "etag": "Zm2pKyD49j4",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/y6QNAAAAQAAJ",
            "volumeInfo": {
                "title": "Java",
                "subtitle": "Or, How to Manage a Colony. Showing a Practical Solution of the Questions Now Affecting British India",
                "authors": [
                    "James William Bayley Money"
                ],
                "publishedDate": "1861",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "OXFORD:N10606956"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "printType": "BOOK",
                "categories": [
                    "Great Britain"
                ],
                "averageRating": 1,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.0.2.0.full.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=y6QNAAAAQAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=y6QNAAAAQAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=y6QNAAAAQAAJ&pg=PA42&dq=java&hl=&cd=1&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=y6QNAAAAQAAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=y6QNAAAAQAAJ"
            },
            "saleInfo": {
                "country": "PK",
                "saleability": "FREE",
                "isEbook": true,
                "buyLink": "https://play.google.com/store/books/details?id=y6QNAAAAQAAJ&rdid=book-y6QNAAAAQAAJ&rdot=1&source=gbs_api"
            },
            "accessInfo": {
                "country": "PK",
                "viewability": "ALL_PAGES",
                "embeddable": true,
                "publicDomain": true,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false,
                    "downloadLink": "http://books.google.com/books/download/Java.epub?id=y6QNAAAAQAAJ&hl=&output=epub&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "downloadLink": "http://books.google.com/books/download/Java.pdf?id=y6QNAAAAQAAJ&hl=&output=pdf&sig=ACfU3U30cczNI2BwTrk_kDmG9ZIDrbCFAw&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=y6QNAAAAQAAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "42 ANNUAL COLONIAL REPORTS. announcement secures the attention of the <br>\nDutch Parliament to the proper internal government of <b>Java</b>, to its present <br>\nmaterial and social condition, and to the future prospects of the country from <br>\nwhich so&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "eonVAAAAMAAJ",
            "etag": "vH7G9oR/u28",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/eonVAAAAMAAJ",
            "volumeInfo": {
                "title": "Java",
                "authors": [
                    "United States. Hydrographic Office"
                ],
                "publishedDate": "1944",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "WISC:89097451819"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 133,
                "printType": "BOOK",
                "categories": [
                    "Java (Indonesia)"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.1.2.0.full.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=eonVAAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=eonVAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=eonVAAAAMAAJ&pg=PA132&dq=java&hl=&cd=2&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=eonVAAAAMAAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=eonVAAAAMAAJ"
            },
            "saleInfo": {
                "country": "PK",
                "saleability": "FREE",
                "isEbook": true,
                "buyLink": "https://play.google.com/store/books/details?id=eonVAAAAMAAJ&rdid=book-eonVAAAAMAAJ&rdot=1&source=gbs_api"
            },
            "accessInfo": {
                "country": "PK",
                "viewability": "ALL_PAGES",
                "embeddable": true,
                "publicDomain": true,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false,
                    "downloadLink": "http://books.google.com/books/download/Java.epub?id=eonVAAAAMAAJ&hl=&output=epub&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=eonVAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "1170_Western Part of <b>Java</b> Sea and the Southern Passages to China , Nov. 1942 <br>\n. ac H.O. Chart No. 1188 — Batavia Roads , Jan. 1944 . ad H.O. Chart No. 3007 – <br>\nAnchorages on the North Coast of <b>Java</b> , June 1940 . ae H.O. Chart No."
            }
        },
        {
            "kind": "books#volume",
            "id": "tsjZDwAAQBAJ",
            "etag": "sV0FH+jJ57s",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/tsjZDwAAQBAJ",
            "volumeInfo": {
                "title": "Learning Java",
                "subtitle": "An Introduction to Real-World Programming with Java",
                "authors": [
                    "Marc Loy",
                    "Patrick Niemeyer",
                    "Daniel Leuck"
                ],
                "publisher": "O'Reilly Media",
                "publishedDate": "2020-03-30",
                "description": "If you’re new to Java—or new to programming—this best-selling book will guide you through the language features and APIs of Java 11. With fun, compelling, and realistic examples, authors Marc Loy, Patrick Niemeyer, and Daniel Leuck introduce you to Java fundamentals—including its class libraries, programming techniques, and idioms—with an eye toward building real applications. You’ll learn powerful new ways to manage resources and exceptions in your applications—along with core language features included in recent Java versions. Develop with Java, using the compiler, interpreter, and other tools Explore Java’s built-in thread facilities and concurrency package Learn text processing and the powerful regular expressions API Write advanced networked or web-based applications and services",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781492056249"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1492056243"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 518,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=tsjZDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=tsjZDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=tsjZDwAAQBAJ&pg=PA484&dq=java&hl=&cd=3&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=tsjZDwAAQBAJ&dq=java&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Learning_Java.html?hl=&id=tsjZDwAAQBAJ"
            },
            "saleInfo": {
                "country": "PK",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "PK",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=tsjZDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "<b>Java</b> Concurrency in Practice (AddisonWesley), 283 <b>Java</b> Database Connectivity <br>\n(JDBC), 465 <b>Java</b> Development Kit (see JDK) .<b>java</b> extension, 69 <b>Java</b> Media <br>\nFramework (JMF), 403 <b>Java</b> Native Interface (JNI), 91 <b>Java</b> new I/O (NIO) <br>\npackage&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "03-TDwAAQBAJ",
            "etag": "nxo15IfmtIo",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/03-TDwAAQBAJ",
            "volumeInfo": {
                "title": "Java",
                "subtitle": "Advanced Guide to Programming Code with Java",
                "authors": [
                    "Charlie Masterson"
                ],
                "publisher": "E.C. Publishing via PublishDrive",
                "publishedDate": "2017-02-09",
                "description": "Are you struggling to understand some of the Advanced Java programming concepts? Are you desperate to further your knowledge and make something out of your programming experience? Look no further; in \"Java: Advanced Guide to Programming Code with Java\", you will learn all about: In this Definitive Java Advanced Level Guide, you're about to discover... The Java Interface – Learn all about the Java Interface and how it works Java Packages – learn how to organize your code using packages Java Collections – Learn how to store dynamic data types better Java Inheritance – Learn about superclasses and abstract methods Access Modifiers – Learn how to structure your programs properly with the correct scoping Polymorphism – The number one Java concept you need to master if you are to truly understand Java programming Variable Scopes – know how and when to use variables properly Java Packages – learn how to organize your code using packages The J2EE environment – a basic overview of the J2EE environment ... And much, much more! Other Benefits of owning this book: Gain more advanced knowledge about the capabilities of the Java programming language Learn the advanced essentials of Java in order to gain the confidence to tackle more complex topics Gain the critical steps in your path towards Java programming mastery By the end of this book you will have a better grasp of advanced Java programming and will have learnt how to write your code more efficiently and for better effectiveness! Take action today to advance your programming career! Scroll to the top of the page and select the \"Buy now\" button.",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "PKEY:6610000083763"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 85,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.25.22.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=03-TDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=03-TDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=03-TDwAAQBAJ&pg=PT49&dq=java&hl=&cd=4&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=03-TDwAAQBAJ&dq=java&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Java.html?hl=&id=03-TDwAAQBAJ"
            },
            "saleInfo": {
                "country": "PK",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "PK",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Java-sample-epub.acsm?id=03-TDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Java-sample-pdf.acsm?id=03-TDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=03-TDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Enterprise JavaBeans (EJB) <b>Java</b> Message Service (JMS) <b>Java</b> Naming and <br>\nDirectory Interface (JNDI) <b>Java</b> Database Connectivity (JDBC) JavaMail <b>Java</b> <br>\nTransaction Service (JTS) <b>Java</b> Transaction API (JTA) J2EE Connector <br>\nArchitecture&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "Q3_QDwAAQBAJ",
            "etag": "ad/n5CsY+2Q",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/Q3_QDwAAQBAJ",
            "volumeInfo": {
                "title": "Java Performance",
                "subtitle": "In-Depth Advice for Tuning and Programming Java 8, 11, and Beyond",
                "authors": [
                    "Scott Oaks"
                ],
                "publisher": "O'Reilly Media",
                "publishedDate": "2020-02-11",
                "description": "Coding and testing are generally considered separate areas of expertise. In this practical book, Java expert Scott Oaks takes the approach that anyone who works with Java should be adept at understanding how code behaves in the Java Virtual Machine—including the tunings likely to help performance. This updated second edition helps you gain in-depth knowledge of Java application performance using both the JVM and the Java platform. Developers and performance engineers alike will learn a variety of features, tools, and processes for improving the way the Java 8 and 11 LTS releases perform. While the emphasis is on production-supported releases and features, this book also features previews of exciting new technologies such as ahead-of-time compilation and experimental garbage collections. Understand how various Java platforms and compilers affect performance Learn how Java garbage collection works Apply four principles to obtain best results from performance testing Use the JDK and other tools to learn how a Java application is performing Minimize the garbage collector’s impact through tuning and programming practices Tackle performance issues in Java APIs Improve Java-driven database application performance",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781492056089"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1492056081"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 450,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.1.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=Q3_QDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=Q3_QDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=Q3_QDwAAQBAJ&pg=PA3&dq=java&hl=&cd=5&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=Q3_QDwAAQBAJ&dq=java&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Java_Performance.html?hl=&id=Q3_QDwAAQBAJ"
            },
            "saleInfo": {
                "country": "PK",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "PK",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=Q3_QDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "In-Depth Advice for Tuning and Programming <b>Java</b> 8, 11, and Beyond Scott Oaks<br>\n. <b>Java</b>. Platforms. This book covers the performance of the Oracle HotSpot <b>Java</b> <br>\nVirtual Machine (JVM) and the <b>Java</b> Development Kit (JDK), versions 8 and 11."
            }
        },
        {
            "kind": "books#volume",
            "id": "9G3zurc5lFgC",
            "etag": "KfrgZa77sOQ",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/9G3zurc5lFgC",
            "volumeInfo": {
                "title": "Sailing Directions for Java",
                "subtitle": "Lesser Sundas; South, Southeast, and East Coasts of Borneo; and Celebes",
                "authors": [
                    "United States. Defense Mapping Agency. Hydrographic Center"
                ],
                "publishedDate": "1976",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "UCR:31210024863159"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 536,
                "printType": "BOOK",
                "categories": [
                    "Pilot guides"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.2.2.0.full.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=9G3zurc5lFgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=9G3zurc5lFgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=9G3zurc5lFgC&pg=RA1-PA8&dq=java&hl=&cd=6&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=9G3zurc5lFgC&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=9G3zurc5lFgC"
            },
            "saleInfo": {
                "country": "PK",
                "saleability": "FREE",
                "isEbook": true,
                "buyLink": "https://play.google.com/store/books/details?id=9G3zurc5lFgC&rdid=book-9G3zurc5lFgC&rdot=1&source=gbs_api"
            },
            "accessInfo": {
                "country": "PK",
                "viewability": "ALL_PAGES",
                "embeddable": true,
                "publicDomain": true,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false,
                    "downloadLink": "http://books.google.com/books/download/Sailing_Directions_for_Java.epub?id=9G3zurc5lFgC&hl=&output=epub&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=9G3zurc5lFgC&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "1 Pal ( <b>Java</b> ) = 1,506 metres . 1 Pal ( Sumatra ) = 1,852 metres . Cantala .-.<b>Java</b> <br>\nand Madura . Abaca .. Sumatra . Kapok ... --<b>Java</b> . Cinchona . West <b>Java</b> , <br>\nsouthwest Sumatra . Spices --- Lesser Sundas , <b>Java</b> , Celebes . Pepper --- ."
            }
        },
        {
            "kind": "books#volume",
            "id": "29wpAAAAYAAJ",
            "etag": "g5IaDNylhgw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/29wpAAAAYAAJ",
            "volumeInfo": {
                "title": "Some Notes on Java and Its Administration by the Dutch",
                "authors": [
                    "Henry Scott Boys"
                ],
                "publishedDate": "1892",
                "description": "This modestly-entitled work by a former member of the Bengal Civil Service is in fact more like a well-researched essay than a miscellaneous collection of notes. It pays considerable attention to Java's history, though its coverage is rather patchy by modern standards, and many names are mis-spelled. It has a few interesting insights on the situation at the time of the author's visit (1889), such as the prosperous appearance of the Javanese, especially the children, the domination of trade by women, and the absence of any sign of Islam. But its main interest is the author's favorable opinion of the economic management of Java by the Dutch, as compared with the British in India. He particularly commends the Dutch refusal to introduce individual property rights to land. He does predict however (correctly) that the growth of Java's population will lead to economic problems in the future. He is also unusual among British colonial administrators of the 19th century in suggesting that the Western way of doing things is not invariably the best one.",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "HARVARD:HNJM71"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 92,
                "printType": "BOOK",
                "categories": [
                    "Java (Indonesia)"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.4.4.0.full.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=29wpAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=29wpAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=29wpAAAAYAAJ&pg=PT2&dq=java&hl=&cd=7&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=29wpAAAAYAAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=29wpAAAAYAAJ"
            },
            "saleInfo": {
                "country": "PK",
                "saleability": "FREE",
                "isEbook": true,
                "buyLink": "https://play.google.com/store/books/details?id=29wpAAAAYAAJ&rdid=book-29wpAAAAYAAJ&rdot=1&source=gbs_api"
            },
            "accessInfo": {
                "country": "PK",
                "viewability": "ALL_PAGES",
                "embeddable": true,
                "publicDomain": true,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false,
                    "downloadLink": "http://books.google.com/books/download/Some_Notes_on_Java_and_Its_Administratio.epub?id=29wpAAAAYAAJ&hl=&output=epub&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": true,
                    "downloadLink": "http://books.google.com/books/download/Some_Notes_on_Java_and_Its_Administratio.pdf?id=29wpAAAAYAAJ&hl=&output=pdf&sig=ACfU3U0_VkD_S5JmtZMa3CAT0jKEhIXISA&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=29wpAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "<b>Java</b> , English occupation of , 16 . <b>Java</b> , First appearance of the Dutch in , 13 . <br>\n<b>Java</b> , Government of , 72 . <b>Java</b> , Indian Art in , 3 . <b>Java</b> , Land System in , 42 . <br>\n<b>Java</b> , Marriage Customs in , 35 . <b>Java</b> , Portuguese in , 11 . <b>Java</b> , Products of , <br>\n20&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "g2I7wbiwxO4C",
            "etag": "70BvB28UFfk",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/g2I7wbiwxO4C",
            "volumeInfo": {
                "title": "Java",
                "authors": [
                    "SparkNotes"
                ],
                "publisher": "Spark Publishing Group",
                "publishedDate": "2003-06-13",
                "description": "SparkChartsTM--created by Harvard students for students everywhere--serve as study companions and reference tools that cover a wide range of college and graduate school subjects, including Business, Computer Programming, Medicine, Law, Foreign Language, Humanities, and Science. Titles like How to Study, Microsoft Word for Windows, Microsoft Powerpoint for Windows, and HTML give you what it takes to find success in school and beyond. Outlines and summaries cover key points, while diagrams and tables make difficult concepts easier to digest. This four-page chart covers: Java basics, including types and variables Conditional and iterative statements Classes and objects Methods Polymorphism Exceptions The Java API",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "1586639161"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9781586639167"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 4,
                "printType": "BOOK",
                "categories": [
                    "Study Aids"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "1.2.3.0.preview.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=g2I7wbiwxO4C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=g2I7wbiwxO4C&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=g2I7wbiwxO4C&dq=java&hl=&cd=8&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=g2I7wbiwxO4C&dq=java&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Java.html?hl=&id=g2I7wbiwxO4C"
            },
            "saleInfo": {
                "country": "PK",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "PK",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=g2I7wbiwxO4C&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "This four-page chart covers: Java basics, including types and variables Conditional and iterative statements Classes and objects Methods Polymorphism Exceptions The Java API"
            }
        },
        {
            "kind": "books#volume",
            "id": "t5leAAAAcAAJ",
            "etag": "V177LzzP9zc",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/t5leAAAAcAAJ",
            "volumeInfo": {
                "title": "De Zieke Reiziger, Or, Rambles in Java and the Straits in 1852",
                "authors": [
                    "Bengal Civilian"
                ],
                "publishedDate": "1853",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "BL:A0019033273"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 139,
                "printType": "BOOK",
                "categories": [
                    "Java (Indonesia)"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.1.1.0.full.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=t5leAAAAcAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=t5leAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=t5leAAAAcAAJ&pg=PR10&dq=java&hl=&cd=9&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=t5leAAAAcAAJ&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=t5leAAAAcAAJ"
            },
            "saleInfo": {
                "country": "PK",
                "saleability": "FREE",
                "isEbook": true,
                "buyLink": "https://play.google.com/store/books/details?id=t5leAAAAcAAJ&rdid=book-t5leAAAAcAAJ&rdot=1&source=gbs_api"
            },
            "accessInfo": {
                "country": "PK",
                "viewability": "ALL_PAGES",
                "embeddable": true,
                "publicDomain": true,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false,
                    "downloadLink": "http://books.google.com/books/download/De_Zieke_Reiziger_Or_Rambles_in_Java_and.epub?id=t5leAAAAcAAJ&hl=&output=epub&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=t5leAAAAcAAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Page BATAVIA , APPROACH - INSALUBRITY - HOTELS IN <b>JAVA</b> - DUTCH <br>\nCOOKERYPLACES OF PUBLIC AMUSEMENT - MODE OF LIFE AT BATAVIA - <br>\nEUROPEAN PORTION OF THE TOWN ; COMPARATIVE SALUBRITY <br>\nOF_SINGULAR&nbsp;..."
            }
        },
        {
            "kind": "books#volume",
            "id": "q7G549GJWvUC",
            "etag": "HAWG3iLr8DA",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/q7G549GJWvUC",
            "volumeInfo": {
                "title": "De Koloniën Nederland ten vloek of ten zegen? Eene stem uit Java",
                "authors": [
                    "P. JANSZ"
                ],
                "publishedDate": "1863",
                "industryIdentifiers": [
                    {
                        "type": "OTHER",
                        "identifier": "BL:A0022189907"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "printType": "BOOK",
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.0.1.0.full.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=q7G549GJWvUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=q7G549GJWvUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=q7G549GJWvUC&pg=PA3&dq=java&hl=&cd=10&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=q7G549GJWvUC&source=gbs_api",
                "canonicalVolumeLink": "https://play.google.com/store/books/details?id=q7G549GJWvUC"
            },
            "saleInfo": {
                "country": "PK",
                "saleability": "FREE",
                "isEbook": true,
                "buyLink": "https://play.google.com/store/books/details?id=q7G549GJWvUC&rdid=book-q7G549GJWvUC&rdot=1&source=gbs_api"
            },
            "accessInfo": {
                "country": "PK",
                "viewability": "ALL_PAGES",
                "embeddable": true,
                "publicDomain": true,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false,
                    "downloadLink": "http://books.google.com/books/download/De_Koloni%C3%ABn_Nederland_ten_vloek_of_ten.epub?id=q7G549GJWvUC&hl=&output=epub&source=gbs_api"
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=q7G549GJWvUC&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Menig woord is reeds gesproken over en ten behoeve van de Evangelisatie op <br>\n<b>Java</b> en in Ned . Indië in het algemeen . Van meer dan eene zijde is die reeds <br>\nbeschouwd , en meermalen ook werd een of ander gebrek of hinderpaal&nbsp;..."
            }
        }
    ]


    var apitest =
    {
        "kind": "books#volumes",
        "totalItems": 1803,
        "items": [
            {
                "kind": "books#volume",
                "id": "y6QNAAAAQAAJ",
                "etag": "Zm2pKyD49j4",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/y6QNAAAAQAAJ",
                "volumeInfo": {
                    "title": "Java",
                    "subtitle": "Or, How to Manage a Colony. Showing a Practical Solution of the Questions Now Affecting British India",
                    "authors": [
                        "James William Bayley Money"
                    ],
                    "publishedDate": "1861",
                    "industryIdentifiers": [
                        {
                            "type": "OTHER",
                            "identifier": "OXFORD:N10606956"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": true
                    },
                    "printType": "BOOK",
                    "categories": [
                        "Great Britain"
                    ],
                    "averageRating": 1,
                    "ratingsCount": 1,
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "1.0.2.0.full.1",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=y6QNAAAAQAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=y6QNAAAAQAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=y6QNAAAAQAAJ&pg=PA42&dq=java&hl=&cd=1&source=gbs_api",
                    "infoLink": "https://play.google.com/store/books/details?id=y6QNAAAAQAAJ&source=gbs_api",
                    "canonicalVolumeLink": "https://play.google.com/store/books/details?id=y6QNAAAAQAAJ"
                },
                "saleInfo": {
                    "country": "PK",
                    "saleability": "FREE",
                    "isEbook": true,
                    "buyLink": "https://play.google.com/store/books/details?id=y6QNAAAAQAAJ&rdid=book-y6QNAAAAQAAJ&rdot=1&source=gbs_api"
                },
                "accessInfo": {
                    "country": "PK",
                    "viewability": "ALL_PAGES",
                    "embeddable": true,
                    "publicDomain": true,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false,
                        "downloadLink": "http://books.google.com/books/download/Java.epub?id=y6QNAAAAQAAJ&hl=&output=epub&source=gbs_api"
                    },
                    "pdf": {
                        "isAvailable": true,
                        "downloadLink": "http://books.google.com/books/download/Java.pdf?id=y6QNAAAAQAAJ&hl=&output=pdf&sig=ACfU3U30cczNI2BwTrk_kDmG9ZIDrbCFAw&source=gbs_api"
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=y6QNAAAAQAAJ&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "42 ANNUAL COLONIAL REPORTS. announcement secures the attention of the <br>\nDutch Parliament to the proper internal government of <b>Java</b>, to its present <br>\nmaterial and social condition, and to the future prospects of the country from <br>\nwhich so&nbsp;..."
                }
            },
            {
                "kind": "books#volume",
                "id": "eonVAAAAMAAJ",
                "etag": "vH7G9oR/u28",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/eonVAAAAMAAJ",
                "volumeInfo": {
                    "title": "Java",
                    "authors": [
                        "United States. Hydrographic Office"
                    ],
                    "publishedDate": "1944",
                    "industryIdentifiers": [
                        {
                            "type": "OTHER",
                            "identifier": "WISC:89097451819"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": true
                    },
                    "pageCount": 133,
                    "printType": "BOOK",
                    "categories": [
                        "Java (Indonesia)"
                    ],
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "0.1.2.0.full.1",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=eonVAAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=eonVAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=eonVAAAAMAAJ&pg=PA132&dq=java&hl=&cd=2&source=gbs_api",
                    "infoLink": "https://play.google.com/store/books/details?id=eonVAAAAMAAJ&source=gbs_api",
                    "canonicalVolumeLink": "https://play.google.com/store/books/details?id=eonVAAAAMAAJ"
                },
                "saleInfo": {
                    "country": "PK",
                    "saleability": "FREE",
                    "isEbook": true,
                    "buyLink": "https://play.google.com/store/books/details?id=eonVAAAAMAAJ&rdid=book-eonVAAAAMAAJ&rdot=1&source=gbs_api"
                },
                "accessInfo": {
                    "country": "PK",
                    "viewability": "ALL_PAGES",
                    "embeddable": true,
                    "publicDomain": true,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false,
                        "downloadLink": "http://books.google.com/books/download/Java.epub?id=eonVAAAAMAAJ&hl=&output=epub&source=gbs_api"
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=eonVAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "1170_Western Part of <b>Java</b> Sea and the Southern Passages to China , Nov. 1942 <br>\n. ac H.O. Chart No. 1188 — Batavia Roads , Jan. 1944 . ad H.O. Chart No. 3007 – <br>\nAnchorages on the North Coast of <b>Java</b> , June 1940 . ae H.O. Chart No."
                }
            },
            {
                "kind": "books#volume",
                "id": "tsjZDwAAQBAJ",
                "etag": "sV0FH+jJ57s",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/tsjZDwAAQBAJ",
                "volumeInfo": {
                    "title": "Learning Java",
                    "subtitle": "An Introduction to Real-World Programming with Java",
                    "authors": [
                        "Marc Loy",
                        "Patrick Niemeyer",
                        "Daniel Leuck"
                    ],
                    "publisher": "O'Reilly Media",
                    "publishedDate": "2020-03-30",
                    "description": "If you’re new to Java—or new to programming—this best-selling book will guide you through the language features and APIs of Java 11. With fun, compelling, and realistic examples, authors Marc Loy, Patrick Niemeyer, and Daniel Leuck introduce you to Java fundamentals—including its class libraries, programming techniques, and idioms—with an eye toward building real applications. You’ll learn powerful new ways to manage resources and exceptions in your applications—along with core language features included in recent Java versions. Develop with Java, using the compiler, interpreter, and other tools Explore Java’s built-in thread facilities and concurrency package Learn text processing and the powerful regular expressions API Write advanced networked or web-based applications and services",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_13",
                            "identifier": "9781492056249"
                        },
                        {
                            "type": "ISBN_10",
                            "identifier": "1492056243"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": true
                    },
                    "pageCount": 518,
                    "printType": "BOOK",
                    "categories": [
                        "Computers"
                    ],
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "preview-1.0.0",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=tsjZDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=tsjZDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=tsjZDwAAQBAJ&pg=PA484&dq=java&hl=&cd=3&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=tsjZDwAAQBAJ&dq=java&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Learning_Java.html?hl=&id=tsjZDwAAQBAJ"
                },
                "saleInfo": {
                    "country": "PK",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "PK",
                    "viewability": "PARTIAL",
                    "embeddable": true,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=tsjZDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "SAMPLE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "<b>Java</b> Concurrency in Practice (AddisonWesley), 283 <b>Java</b> Database Connectivity <br>\n(JDBC), 465 <b>Java</b> Development Kit (see JDK) .<b>java</b> extension, 69 <b>Java</b> Media <br>\nFramework (JMF), 403 <b>Java</b> Native Interface (JNI), 91 <b>Java</b> new I/O (NIO) <br>\npackage&nbsp;..."
                }
            },
            {
                "kind": "books#volume",
                "id": "03-TDwAAQBAJ",
                "etag": "nxo15IfmtIo",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/03-TDwAAQBAJ",
                "volumeInfo": {
                    "title": "Java",
                    "subtitle": "Advanced Guide to Programming Code with Java",
                    "authors": [
                        "Charlie Masterson"
                    ],
                    "publisher": "E.C. Publishing via PublishDrive",
                    "publishedDate": "2017-02-09",
                    "description": "Are you struggling to understand some of the Advanced Java programming concepts? Are you desperate to further your knowledge and make something out of your programming experience? Look no further; in \"Java: Advanced Guide to Programming Code with Java\", you will learn all about: In this Definitive Java Advanced Level Guide, you're about to discover... The Java Interface – Learn all about the Java Interface and how it works Java Packages – learn how to organize your code using packages Java Collections – Learn how to store dynamic data types better Java Inheritance – Learn about superclasses and abstract methods Access Modifiers – Learn how to structure your programs properly with the correct scoping Polymorphism – The number one Java concept you need to master if you are to truly understand Java programming Variable Scopes – know how and when to use variables properly Java Packages – learn how to organize your code using packages The J2EE environment – a basic overview of the J2EE environment ... And much, much more! Other Benefits of owning this book: Gain more advanced knowledge about the capabilities of the Java programming language Learn the advanced essentials of Java in order to gain the confidence to tackle more complex topics Gain the critical steps in your path towards Java programming mastery By the end of this book you will have a better grasp of advanced Java programming and will have learnt how to write your code more efficiently and for better effectiveness! Take action today to advance your programming career! Scroll to the top of the page and select the \"Buy now\" button.",
                    "industryIdentifiers": [
                        {
                            "type": "OTHER",
                            "identifier": "PKEY:6610000083763"
                        }
                    ],
                    "readingModes": {
                        "text": true,
                        "image": true
                    },
                    "pageCount": 85,
                    "printType": "BOOK",
                    "categories": [
                        "Computers"
                    ],
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "1.25.22.0.preview.3",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=03-TDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=03-TDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=03-TDwAAQBAJ&pg=PT49&dq=java&hl=&cd=4&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=03-TDwAAQBAJ&dq=java&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Java.html?hl=&id=03-TDwAAQBAJ"
                },
                "saleInfo": {
                    "country": "PK",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "PK",
                    "viewability": "PARTIAL",
                    "embeddable": true,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": true,
                        "acsTokenLink": "http://books.google.com/books/download/Java-sample-epub.acsm?id=03-TDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                    },
                    "pdf": {
                        "isAvailable": true,
                        "acsTokenLink": "http://books.google.com/books/download/Java-sample-pdf.acsm?id=03-TDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=03-TDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "SAMPLE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "Enterprise JavaBeans (EJB) <b>Java</b> Message Service (JMS) <b>Java</b> Naming and <br>\nDirectory Interface (JNDI) <b>Java</b> Database Connectivity (JDBC) JavaMail <b>Java</b> <br>\nTransaction Service (JTS) <b>Java</b> Transaction API (JTA) J2EE Connector <br>\nArchitecture&nbsp;..."
                }
            },
            {
                "kind": "books#volume",
                "id": "Q3_QDwAAQBAJ",
                "etag": "ad/n5CsY+2Q",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/Q3_QDwAAQBAJ",
                "volumeInfo": {
                    "title": "Java Performance",
                    "subtitle": "In-Depth Advice for Tuning and Programming Java 8, 11, and Beyond",
                    "authors": [
                        "Scott Oaks"
                    ],
                    "publisher": "O'Reilly Media",
                    "publishedDate": "2020-02-11",
                    "description": "Coding and testing are generally considered separate areas of expertise. In this practical book, Java expert Scott Oaks takes the approach that anyone who works with Java should be adept at understanding how code behaves in the Java Virtual Machine—including the tunings likely to help performance. This updated second edition helps you gain in-depth knowledge of Java application performance using both the JVM and the Java platform. Developers and performance engineers alike will learn a variety of features, tools, and processes for improving the way the Java 8 and 11 LTS releases perform. While the emphasis is on production-supported releases and features, this book also features previews of exciting new technologies such as ahead-of-time compilation and experimental garbage collections. Understand how various Java platforms and compilers affect performance Learn how Java garbage collection works Apply four principles to obtain best results from performance testing Use the JDK and other tools to learn how a Java application is performing Minimize the garbage collector’s impact through tuning and programming practices Tackle performance issues in Java APIs Improve Java-driven database application performance",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_13",
                            "identifier": "9781492056089"
                        },
                        {
                            "type": "ISBN_10",
                            "identifier": "1492056081"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": true
                    },
                    "pageCount": 450,
                    "printType": "BOOK",
                    "categories": [
                        "Computers"
                    ],
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "0.1.0.0.preview.1",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=Q3_QDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=Q3_QDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=Q3_QDwAAQBAJ&pg=PA3&dq=java&hl=&cd=5&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=Q3_QDwAAQBAJ&dq=java&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Java_Performance.html?hl=&id=Q3_QDwAAQBAJ"
                },
                "saleInfo": {
                    "country": "PK",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "PK",
                    "viewability": "PARTIAL",
                    "embeddable": true,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=Q3_QDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "SAMPLE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "In-Depth Advice for Tuning and Programming <b>Java</b> 8, 11, and Beyond Scott Oaks<br>\n. <b>Java</b>. Platforms. This book covers the performance of the Oracle HotSpot <b>Java</b> <br>\nVirtual Machine (JVM) and the <b>Java</b> Development Kit (JDK), versions 8 and 11."
                }
            },
            {
                "kind": "books#volume",
                "id": "9G3zurc5lFgC",
                "etag": "KfrgZa77sOQ",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/9G3zurc5lFgC",
                "volumeInfo": {
                    "title": "Sailing Directions for Java",
                    "subtitle": "Lesser Sundas; South, Southeast, and East Coasts of Borneo; and Celebes",
                    "authors": [
                        "United States. Defense Mapping Agency. Hydrographic Center"
                    ],
                    "publishedDate": "1976",
                    "industryIdentifiers": [
                        {
                            "type": "OTHER",
                            "identifier": "UCR:31210024863159"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": true
                    },
                    "pageCount": 536,
                    "printType": "BOOK",
                    "categories": [
                        "Pilot guides"
                    ],
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "0.2.2.0.full.1",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=9G3zurc5lFgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=9G3zurc5lFgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=9G3zurc5lFgC&pg=RA1-PA8&dq=java&hl=&cd=6&source=gbs_api",
                    "infoLink": "https://play.google.com/store/books/details?id=9G3zurc5lFgC&source=gbs_api",
                    "canonicalVolumeLink": "https://play.google.com/store/books/details?id=9G3zurc5lFgC"
                },
                "saleInfo": {
                    "country": "PK",
                    "saleability": "FREE",
                    "isEbook": true,
                    "buyLink": "https://play.google.com/store/books/details?id=9G3zurc5lFgC&rdid=book-9G3zurc5lFgC&rdot=1&source=gbs_api"
                },
                "accessInfo": {
                    "country": "PK",
                    "viewability": "ALL_PAGES",
                    "embeddable": true,
                    "publicDomain": true,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false,
                        "downloadLink": "http://books.google.com/books/download/Sailing_Directions_for_Java.epub?id=9G3zurc5lFgC&hl=&output=epub&source=gbs_api"
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=9G3zurc5lFgC&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "1 Pal ( <b>Java</b> ) = 1,506 metres . 1 Pal ( Sumatra ) = 1,852 metres . Cantala .-.<b>Java</b> <br>\nand Madura . Abaca .. Sumatra . Kapok ... --<b>Java</b> . Cinchona . West <b>Java</b> , <br>\nsouthwest Sumatra . Spices --- Lesser Sundas , <b>Java</b> , Celebes . Pepper --- ."
                }
            },
            {
                "kind": "books#volume",
                "id": "29wpAAAAYAAJ",
                "etag": "g5IaDNylhgw",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/29wpAAAAYAAJ",
                "volumeInfo": {
                    "title": "Some Notes on Java and Its Administration by the Dutch",
                    "authors": [
                        "Henry Scott Boys"
                    ],
                    "publishedDate": "1892",
                    "description": "This modestly-entitled work by a former member of the Bengal Civil Service is in fact more like a well-researched essay than a miscellaneous collection of notes. It pays considerable attention to Java's history, though its coverage is rather patchy by modern standards, and many names are mis-spelled. It has a few interesting insights on the situation at the time of the author's visit (1889), such as the prosperous appearance of the Javanese, especially the children, the domination of trade by women, and the absence of any sign of Islam. But its main interest is the author's favorable opinion of the economic management of Java by the Dutch, as compared with the British in India. He particularly commends the Dutch refusal to introduce individual property rights to land. He does predict however (correctly) that the growth of Java's population will lead to economic problems in the future. He is also unusual among British colonial administrators of the 19th century in suggesting that the Western way of doing things is not invariably the best one.",
                    "industryIdentifiers": [
                        {
                            "type": "OTHER",
                            "identifier": "HARVARD:HNJM71"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": true
                    },
                    "pageCount": 92,
                    "printType": "BOOK",
                    "categories": [
                        "Java (Indonesia)"
                    ],
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "0.4.4.0.full.1",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=29wpAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=29wpAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=29wpAAAAYAAJ&pg=PT2&dq=java&hl=&cd=7&source=gbs_api",
                    "infoLink": "https://play.google.com/store/books/details?id=29wpAAAAYAAJ&source=gbs_api",
                    "canonicalVolumeLink": "https://play.google.com/store/books/details?id=29wpAAAAYAAJ"
                },
                "saleInfo": {
                    "country": "PK",
                    "saleability": "FREE",
                    "isEbook": true,
                    "buyLink": "https://play.google.com/store/books/details?id=29wpAAAAYAAJ&rdid=book-29wpAAAAYAAJ&rdot=1&source=gbs_api"
                },
                "accessInfo": {
                    "country": "PK",
                    "viewability": "ALL_PAGES",
                    "embeddable": true,
                    "publicDomain": true,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false,
                        "downloadLink": "http://books.google.com/books/download/Some_Notes_on_Java_and_Its_Administratio.epub?id=29wpAAAAYAAJ&hl=&output=epub&source=gbs_api"
                    },
                    "pdf": {
                        "isAvailable": true,
                        "downloadLink": "http://books.google.com/books/download/Some_Notes_on_Java_and_Its_Administratio.pdf?id=29wpAAAAYAAJ&hl=&output=pdf&sig=ACfU3U0_VkD_S5JmtZMa3CAT0jKEhIXISA&source=gbs_api"
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=29wpAAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "<b>Java</b> , English occupation of , 16 . <b>Java</b> , First appearance of the Dutch in , 13 . <br>\n<b>Java</b> , Government of , 72 . <b>Java</b> , Indian Art in , 3 . <b>Java</b> , Land System in , 42 . <br>\n<b>Java</b> , Marriage Customs in , 35 . <b>Java</b> , Portuguese in , 11 . <b>Java</b> , Products of , <br>\n20&nbsp;..."
                }
            },
            {
                "kind": "books#volume",
                "id": "g2I7wbiwxO4C",
                "etag": "70BvB28UFfk",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/g2I7wbiwxO4C",
                "volumeInfo": {
                    "title": "Java",
                    "authors": [
                        "SparkNotes"
                    ],
                    "publisher": "Spark Publishing Group",
                    "publishedDate": "2003-06-13",
                    "description": "SparkChartsTM--created by Harvard students for students everywhere--serve as study companions and reference tools that cover a wide range of college and graduate school subjects, including Business, Computer Programming, Medicine, Law, Foreign Language, Humanities, and Science. Titles like How to Study, Microsoft Word for Windows, Microsoft Powerpoint for Windows, and HTML give you what it takes to find success in school and beyond. Outlines and summaries cover key points, while diagrams and tables make difficult concepts easier to digest. This four-page chart covers: Java basics, including types and variables Conditional and iterative statements Classes and objects Methods Polymorphism Exceptions The Java API",
                    "industryIdentifiers": [
                        {
                            "type": "ISBN_10",
                            "identifier": "1586639161"
                        },
                        {
                            "type": "ISBN_13",
                            "identifier": "9781586639167"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": false
                    },
                    "pageCount": 4,
                    "printType": "BOOK",
                    "categories": [
                        "Study Aids"
                    ],
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "1.2.3.0.preview.0",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=g2I7wbiwxO4C&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=g2I7wbiwxO4C&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=g2I7wbiwxO4C&dq=java&hl=&cd=8&source=gbs_api",
                    "infoLink": "http://books.google.com/books?id=g2I7wbiwxO4C&dq=java&hl=&source=gbs_api",
                    "canonicalVolumeLink": "https://books.google.com/books/about/Java.html?hl=&id=g2I7wbiwxO4C"
                },
                "saleInfo": {
                    "country": "PK",
                    "saleability": "NOT_FOR_SALE",
                    "isEbook": false
                },
                "accessInfo": {
                    "country": "PK",
                    "viewability": "NO_PAGES",
                    "embeddable": false,
                    "publicDomain": false,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=g2I7wbiwxO4C&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "NONE",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "This four-page chart covers: Java basics, including types and variables Conditional and iterative statements Classes and objects Methods Polymorphism Exceptions The Java API"
                }
            },
            {
                "kind": "books#volume",
                "id": "t5leAAAAcAAJ",
                "etag": "V177LzzP9zc",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/t5leAAAAcAAJ",
                "volumeInfo": {
                    "title": "De Zieke Reiziger, Or, Rambles in Java and the Straits in 1852",
                    "authors": [
                        "Bengal Civilian"
                    ],
                    "publishedDate": "1853",
                    "industryIdentifiers": [
                        {
                            "type": "OTHER",
                            "identifier": "BL:A0019033273"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": true
                    },
                    "pageCount": 139,
                    "printType": "BOOK",
                    "categories": [
                        "Java (Indonesia)"
                    ],
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "0.1.1.0.full.1",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=t5leAAAAcAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=t5leAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=t5leAAAAcAAJ&pg=PR10&dq=java&hl=&cd=9&source=gbs_api",
                    "infoLink": "https://play.google.com/store/books/details?id=t5leAAAAcAAJ&source=gbs_api",
                    "canonicalVolumeLink": "https://play.google.com/store/books/details?id=t5leAAAAcAAJ"
                },
                "saleInfo": {
                    "country": "PK",
                    "saleability": "FREE",
                    "isEbook": true,
                    "buyLink": "https://play.google.com/store/books/details?id=t5leAAAAcAAJ&rdid=book-t5leAAAAcAAJ&rdot=1&source=gbs_api"
                },
                "accessInfo": {
                    "country": "PK",
                    "viewability": "ALL_PAGES",
                    "embeddable": true,
                    "publicDomain": true,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false,
                        "downloadLink": "http://books.google.com/books/download/De_Zieke_Reiziger_Or_Rambles_in_Java_and.epub?id=t5leAAAAcAAJ&hl=&output=epub&source=gbs_api"
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=t5leAAAAcAAJ&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "Page BATAVIA , APPROACH - INSALUBRITY - HOTELS IN <b>JAVA</b> - DUTCH <br>\nCOOKERYPLACES OF PUBLIC AMUSEMENT - MODE OF LIFE AT BATAVIA - <br>\nEUROPEAN PORTION OF THE TOWN ; COMPARATIVE SALUBRITY <br>\nOF_SINGULAR&nbsp;..."
                }
            },
            {
                "kind": "books#volume",
                "id": "q7G549GJWvUC",
                "etag": "HAWG3iLr8DA",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/q7G549GJWvUC",
                "volumeInfo": {
                    "title": "De Koloniën Nederland ten vloek of ten zegen? Eene stem uit Java",
                    "authors": [
                        "P. JANSZ"
                    ],
                    "publishedDate": "1863",
                    "industryIdentifiers": [
                        {
                            "type": "OTHER",
                            "identifier": "BL:A0022189907"
                        }
                    ],
                    "readingModes": {
                        "text": false,
                        "image": true
                    },
                    "printType": "BOOK",
                    "maturityRating": "NOT_MATURE",
                    "allowAnonLogging": false,
                    "contentVersion": "0.0.1.0.full.1",
                    "panelizationSummary": {
                        "containsEpubBubbles": false,
                        "containsImageBubbles": false
                    },
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=q7G549GJWvUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=q7G549GJWvUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    },
                    "language": "en",
                    "previewLink": "http://books.google.com/books?id=q7G549GJWvUC&pg=PA3&dq=java&hl=&cd=10&source=gbs_api",
                    "infoLink": "https://play.google.com/store/books/details?id=q7G549GJWvUC&source=gbs_api",
                    "canonicalVolumeLink": "https://play.google.com/store/books/details?id=q7G549GJWvUC"
                },
                "saleInfo": {
                    "country": "PK",
                    "saleability": "FREE",
                    "isEbook": true,
                    "buyLink": "https://play.google.com/store/books/details?id=q7G549GJWvUC&rdid=book-q7G549GJWvUC&rdot=1&source=gbs_api"
                },
                "accessInfo": {
                    "country": "PK",
                    "viewability": "ALL_PAGES",
                    "embeddable": true,
                    "publicDomain": true,
                    "textToSpeechPermission": "ALLOWED",
                    "epub": {
                        "isAvailable": false,
                        "downloadLink": "http://books.google.com/books/download/De_Koloni%C3%ABn_Nederland_ten_vloek_of_ten.epub?id=q7G549GJWvUC&hl=&output=epub&source=gbs_api"
                    },
                    "pdf": {
                        "isAvailable": false
                    },
                    "webReaderLink": "http://play.google.com/books/reader?id=q7G549GJWvUC&hl=&printsec=frontcover&source=gbs_api",
                    "accessViewStatus": "FULL_PUBLIC_DOMAIN",
                    "quoteSharingAllowed": false
                },
                "searchInfo": {
                    "textSnippet": "Menig woord is reeds gesproken over en ten behoeve van de Evangelisatie op <br>\n<b>Java</b> en in Ned . Indië in het algemeen . Van meer dan eene zijde is die reeds <br>\nbeschouwd , en meermalen ook werd een of ander gebrek of hinderpaal&nbsp;..."
                }
            }
        ]
    }

    const apitest3 = apitest.items
    const [SearchBookname, SetSearchBookName] = useState();
    //props.onSearchBook(SearchBookname)

    const [item, setItem] = useState([])
    //props.callBackResult(item)

    const [loading, SetLoading] = useState(false)

    const trial = () => {
        console.log(apitest3[0].id)
        // setItem(apitest.items.map(a => a.id))
        // //console.log(apitest.items.map(a => a.id))
        // console.log(typeof apitest)
        // console.log(typeof item)
        // console.log(abc[2])
    }


    const loadbooks = () => {
        //getbooksfromApi(SearchBookname).then(data => {

        SetLoading(true)
        // if (SearchBookname !== undefined) {
        getbooksfromApi(SearchBookname).then(data => {


            setItem(data)
            console.log(typeof item)
            //console.log(item[0].items.id)
            // console.log(item)
            // const volumeItem = setItemsVolumeInfo(data.results);
            // SetLoading(false),
            // setItem(volumeItem)
            // console.log(volumeItem)
        }

        )

    }
    //}

    // useEffect(() => {
    //     SetLoading(true)

    //     getDataBooksAPI
    // }, [getDataBooksAPI, SearchBookname])

    // useEffect(() => {
    //     SetLoading(false)
    // }, [getDataBooksAPI])

    const textHandler = (SearchBookname) => {
        SetSearchBookName(SearchBookname)
        console.log(SearchBookname)
    }

    //const a = booksAPI.getBooks(SearchBookname)
    const [allItems, setAllItems] = useState([]);
    const setItemsVolumeInfo = a => {
        setAllItems(a)
        return allItems.map(item => {

            return item.volumeInfo;
        });
    };

    const renderitem1 = ({ item }) => {
        console.log(item.id)
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>hello</Text>
            </View>
        )
    }

    const renderitem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
                onPress={() => { }}>

                {/* Book Cover */}
                <Image
                    source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
                    resizeMode="cover"
                    style={{ width: 100, height: 130, borderRadius: 10, marginVertical: 10 }}
                />

                <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                    {/* Book name and author */}
                    <View>
                        <Text style={{ paddingRight: SIZES.padding, ...FONTS.h2, color: COLORS.white }}>{item.volumeInfo.title}</Text>
                        <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{item.volumeInfo.authors}</Text>
                    </View>

                    {/* Book Info */}
                    <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                        <Image
                            source={item.imageLinks}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>100</Text>

                        <Image
                            source={icons.read_icon}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>12</Text>
                    </View>


                </View>
            </TouchableOpacity>
        )
    }


    var v = false
    var z = "this is z"
    const vis = () => {
        if (item !== undefined || item !== 0) {
            v = true
            z = "Working"
            console.log("in function")
        }
        else {
            z = "not working"
            console.log("in function but not working")
        }
    }



    return (
        <View>
            <View style={{
                height: 55,
                borderWidth: 2,
                borderColor: COLORS.lightGray2,
                backgroundColor: 'white',
                borderRadius: SIZES.base,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
            }}>
                <View style={{
                    //backgroundColor: 'red',
                    flexDirection: 'row',

                }}>
                    <View
                        style={{
                            //backgroundColor:'blue',
                            borderRightWidth: 1,
                            borderRightColor: COLORS.lightGray,
                            //alignItems:'flex-start',
                            justifyContent: 'center',

                        }}
                    >
                        <Image
                            source={icons.search_icon}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray,
                                marginHorizontal: SIZES.radius,
                            }}
                        />
                    </View>
                    <TextInput

                        placeholder="Search"
                        value={SearchBookname}
                        onChangeText={textHandler}
                        style={{

                            width: '75%',
                            ...FONTS.body3,
                            paddingHorizontal: SIZES.radius,
                            color: COLORS.lightGray,
                        }}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => { }}
                    style={{
                        backgroundColor: COLORS.primary,
                        borderRadius: SIZES.base,
                        justifyContent: 'flex-end',

                        padding: SIZES.base
                    }}>
                    <Image
                        source={icons.search_icon}
                        tintColor={COLORS.white}
                        resizeMode="contain"
                        style={{
                            height: 25, width: 25,
                        }}
                    />

                </TouchableOpacity>
                <Button title={'modal'} onPress={trial} /></View>
            {/* //<ActivityIndicator animating={loading} /> */}
            <View>
                <FlatList
                    data={apitest3}
                    renderItem={renderitem}
                    keyExtractor={item => item.id}
                //showsVerticalScrollIndicator={false}

                /></View>
            {/* <FlatList
                    // data={apitest}
                    // renderItem={renderitem1}
                    data={categoriesData}
                    renderItem={({item}) => <Text>{item.books}hello</Text>}
                    keyExtractor={item => item.id}
                    //showsVerticalScrollIndicator={false}
                //extraData={searchbookn}
                /> */}

            {/* <Modal visible={v} >
                
                <FlatList
                    // data={apitest}
                    // renderItem={renderitem1}
                    data={categoriesData}
                    renderItem={({item}) => <Text>{item.books}hello</Text>}
                    keyExtractor={item => item.id}
                    //showsVerticalScrollIndicator={false}
                //extraData={searchbookn}
                />
                <View>
                <Text style={{...FONTS.h1, color:COLORS.white}}>abc{z}</Text>
                </View>
                </Modal> */}
        </View>


    )
}

export default SearchBox