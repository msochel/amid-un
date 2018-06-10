## Module structure
```json
{
    "modules": [
        {
            "description": null,
            "units": [
                {
                    "description": null,
                    "key_topics": [
                        "Topic 1", "Topic 2", ...
                    ],
                    "learning_objectives": [
                        "Objective 1", "Objective 2", ...
                    ],
                    "pedagogical_approach": [
                        {
                            "content": {
                                "title": null,
                                "body": [
                                    "Paragraph 1 (no line breaks)",
                                    "Paragraph 2 (no line breaks)",
                                    [ // Items list
                                        "Item 1", "Item 2", ...
                                    ],
                                    ... other paragraphs
                                ]
                            },
                            "activities": [
                                {
                                    "topic": null,
                                    "purpose": null,
                                    "explantation": [
                                        "Paragraph 1 (no line breaks)",
                                        "Paragraph 2 (no line breaks)",
                                        ...
                                    ],
                                    "structure": [
                                        {
                                            "columns": [],
                                            "rows": []
                                        },
                                        {
                                            "questions": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "unit_evaluation": {
                        "body": [],
                        "questions": {
                            "options": [
                                {"text": null, "right": false}
                            ]
                        }
                    }
                },
                { next unit }
                ... other units
            ]
        },
        { next module },
        ... other modules
```
