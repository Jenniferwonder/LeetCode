---
database-plugin: basic
DateStarted: 2023-09-06
DateModified: 2023-11-28
---

```yaml:dbfolder
name: DB-LC
description: new description
columns:
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 2
    isHidden: false
    sortIndex: -1
    width: 521
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
  __tasks__:
    key: __tasks__
    id: __tasks__
    input: task
    label: Task
    accessorKey: __tasks__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: false
    position: 1
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  tags:
    input: tags
    accessorKey: tags
    key: tags
    id: tags
    label: tags
    position: 4
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 131
    options:
      - { label: "Array", value: "Array", color: "hsl(116,22%,30%)"}
      - { label: "BinarySearch", value: "BinarySearch", color: "hsl(296,26%,33%)"}
      - { label: "String", value: "String", color: "hsl(337,24%,44%)"}
      - { label: "Two-Pointers", value: "Two-Pointers", color: "hsl(126,34%,31%)"}
      - { label: "HashTable", value: "HashTable", color: "hsl(127,10%,35%)"}
      - { label: "Sorting", value: "Sorting", color: "hsl(193,26%,37%)"}
      - { label: "NestedLoop", value: "NestedLoop", color: "hsl(205,57%,32%)"}
      - { label: "2d-Array", value: "2d-Array", color: "hsl(342,32%,57%)"}
      - { label: "DP", value: "DP", color: "hsl(307, 95%, 90%)"}
      - { label: "Greedy", value: "Greedy", color: "hsl(190, 95%, 90%)"}
      - { label: "Math", value: "Math", color: "hsl(275, 95%, 90%)"}
      - { label: "Templates", value: "Templates", color: "hsl(188, 95%, 90%)"}
      - { label: "Sliding-Window", value: "Sliding-Window", color: "hsl(26,39%,59%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
      wrap_content: true
  Difficulty:
    input: select
    accessorKey: Difficulty
    key: Difficulty
    id: Difficulty
    label: Difficulty
    position: 11
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Easy", value: "Easy", color: "hsl(24,22%,49%)"}
      - { label: "Medium", value: "Medium", color: "hsl(141,14%,43%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
      wrap_content: true
  Time:
    input: select
    accessorKey: Time
    key: Time
    id: Time
    label: Time
    position: 12
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "O(n*logn)", value: "O(n*logn)", color: "hsl(193,11%,48%)"}
      - { label: "O(n)", value: "O(n)", color: "hsl(341,13%,42%)"}
      - { label: "O(logn)", value: "O(logn)", color: "hsl(51,14%,53%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
  Space:
    input: select
    accessorKey: Space
    key: Space
    id: Space
    label: Space
    position: 13
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "O(n)", value: "O(n)", color: "hsl(136,11%,41%)"}
      - { label: "O(1)", value: "O(1)", color: "hsl(115,20%,34%)"}
      - { label: "O(m)", value: "O(m)", color: "hsl(214,12%,46%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
  Like:
    input: checkbox
    accessorKey: Like
    key: Like
    id: Like
    label: Like
    position: 14
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Solution:
    input: text
    accessorKey: Solution
    key: Solution
    id: Solution
    label: Solution
    position: 15
    skipPersist: false
    isHidden: true
    sortIndex: -1
    width: 193
    config:
      enable_media_view: false
      link_alias_enabled: false
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
  SourceLink:
    input: text
    accessorKey: SourceLink
    key: SourceLink
    id: SourceLink
    label: SourceLink
    position: 16
    skipPersist: false
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  DateStarted:
    input: calendar
    accessorKey: DateStarted
    key: DateStarted
    id: DateStarted
    label: DateStarted
    position: 10
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  DateDone:
    input: calendar
    accessorKey: DateDone
    key: DateDone
    id: DateDone
    label: DateDone
    position: 9
    skipPersist: false
    isHidden: false
    sortIndex: 3
    isSorted: true
    isSortedDesc: false
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Title:
    input: text
    accessorKey: Title
    key: Title
    id: Title
    label: Title
    position: 3
    skipPersist: false
    isHidden: true
    sortIndex: -1
    width: 159
    config:
      enable_media_view: false
      link_alias_enabled: false
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
  Similar:
    input: text
    accessorKey: Similar
    key: Similar
    id: Similar
    label: Similar
    position: 18
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: false
      link_alias_enabled: false
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
  Intervals:
    input: formula
    accessorKey: Intervals
    key: Intervals
    id: Intervals
    label: Intervals
    position: 17
    skipPersist: false
    isHidden: true
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Reviewed:
    input: number
    accessorKey: Reviewed
    key: Reviewed
    id: Reviewed
    label: Reviewed
    position: 6
    skipPersist: false
    isHidden: false
    sortIndex: 4
    width: 3
    isSorted: true
    isSortedDesc: false
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
  DateReviewed:
    input: calendar
    accessorKey: DateReviewed
    key: DateReviewed
    id: DateReviewed
    label: DateReviewed
    position: 8
    skipPersist: false
    isHidden: false
    sortIndex: 2
    width: 117
    isSorted: true
    isSortedDesc: false
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  TimeNeed:
    input: select
    accessorKey: TimeNeed
    key: TimeNeed
    id: TimeUsed
    label: TimeNeed
    position: 5
    skipPersist: false
    isHidden: false
    sortIndex: 0
    isSorted: true
    isSortedDesc: true
    options:
      - { label: "Good", value: "Good", color: "hsl(46,61%,55%)"}
      - { label: "Hard", value: "Hard", color: "hsl(357,40%,60%)"}
      - { label: "Easy", value: "Easy", color: "hsl(111,26%,39%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
  Comment:
    input: text
    accessorKey: Comment
    key: Comment
    id: Comment
    label: Comment
    position: 7
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: false
      link_alias_enabled: false
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: false
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: true
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  show_metadata_tags: false
  source_data: query
  source_form_result: "FROM \"LeetNote\" WHERE contains(Type, \"A\")"
  source_destination_path: LeetCode/LeetNote
  row_templates_folder: Templates/Tp-Notes
  current_row_template: Templates/Tp-Notes/tp-LC.md
  pagination_size: 40
  font_size: 16
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
filters:
  enabled: true
  conditions:
      - condition: AND
        disabled: true
        label: "Easy"
        color: "hsl(104,91%,82%)"
        filters:
        - field: Difficulty
          operator: CONTAINS
          value: "Easy"
          type: select
      - condition: AND
        disabled: true
        label: "Medium"
        color: "hsl(50,93%,66%)"
        filters:
        - field: Difficulty
          operator: CONTAINS
          value: "Medium"
          type: select
      - condition: AND
        disabled: true
        label: "Difficult"
        color: "hsl(0,100%,75%)"
        filters:
        - field: aliases
          operator: CONTAINS
          value: "Difficult"
          type: text
      - condition: AND
        disabled: true
        label: "HashTable"
        color: "hsl(134,12%,34%)"
        filters:
        - field: tags
          operator: CONTAINS
          value: "HashTable"
          type: tags
      - condition: AND
        disabled: true
        label: "Sorting"
        color: "hsl(191,33%,35%)"
        filters:
        - field: tags
          operator: CONTAINS
          value: "Sorting"
          type: tags
      - condition: AND
        disabled: false
        label: "Two-Pointers"
        color: "hsl(28,46%,43%)"
        filters:
        - field: tags
          operator: CONTAINS
          value: "Two-Pointers"
          type: tags
      - condition: AND
        disabled: true
        label: "NestedLoop"
        color: "hsl(198,100%,25%)"
        filters:
        - field: tags
          operator: CONTAINS
          value: "NestedLoop"
          type: tags
      - condition: AND
        disabled: true
        label: "String"
        color: "hsl(340,26%,45%)"
        filters:
        - field: tags
          operator: CONTAINS
          value: "String"
          type: tags
      - condition: AND
        disabled: true
        label: "BinarySearch"
        color: "hsl(311,29%,41%)"
        filters:
        - field: tags
          operator: CONTAINS
          value: "BinarySearch"
          type: tags
      - condition: AND
        disabled: true
        label: "DP"
        color: "hsl(357,19%,49%)"
        filters:
        - field: tags
          operator: CONTAINS
          value: "DP"
          type: tags
      - condition: AND
        disabled: true
        label: "Greedy"
        color: "hsl(155,20%,39%)"
        filters:
        - field: tags
          operator: CONTAINS
          value: "Greedy"
          type: tags
```